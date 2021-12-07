import API from "@aws-amplify/api";
import Amplify from "@aws-amplify/core";
import awsmobile from "../src/aws-exports";

Amplify.configure({ ...awsmobile });

const apiName = "shortyurlapi";
const path = "/urls";
const pageDomain = "localhost:3000";

export const shortenUrl = async (url) => {
  const init = {
    headers: {},
    body: { url },
  };
  const response = await API.post(apiName, path, init);
  return response.data.shortId;
};

export const getPages = async () => {
  const pages = [{ shortId: "abc", url: "https://www.google.com" }];
  return pages;
};

export const getRedirectUrl = async (shortId) => {
  const init = { headers: {} };
  const response = await API.get(apiName, `${path}/${shortId}`, init);
  if (response.length) return response[0].url;
  else return null;
};
