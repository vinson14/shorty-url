const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.TABLE_REGION });

// Constants
const dynamodb = new AWS.DynamoDB.DocumentClient();
let tableName = "shortyurl";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}
const getItem = async (shortId) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableName,
      Key: { shortId },
    };
    dynamodb.get(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data?.Item);
    });
  });
};

const putItem = async (shortId, url) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableName,
      Item: { shortId, url },
    };
    dynamodb.put(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve({ shortId, url });
    });
  });
};

module.exports.getItem = getItem;
module.exports.putItem = putItem;
