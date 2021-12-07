/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var bodyParser = require("body-parser");
var express = require("express");
const shortid = require("shortid");
const { getItem, putItem } = require("./utils");

AWS.config.update({ region: process.env.TABLE_REGION });

let tableName = "shortyurl";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const partitionKeyName = "shortId";
const path = "/urls";
const hashKeyPath = "/:" + partitionKeyName;
// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + hashKeyPath, async function (req, res) {
  const shortId = req.params[partitionKeyName];
  try {
    const item = await getItem(shortId);
    res.json(item);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
});

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, async function (req, res) {
  try {
    let shortId = shortid.generate();
    let item = null;
    do {
      item = await getItem(shortId);
    } while (item);

    const putItemResponse = await putItem(shortId, req.body.url);
    res.json({ success: "Post call succeeded", url: req.url, data: putItemResponse });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error, url: req.url, body: req.body });
  }
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
