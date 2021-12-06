export const shortenUrl = async (longUrl) => {
  return "https://www.shorturl.com";
};

export const getPages = async () => {
  const pages = [{ shortId: "abc", url: "https://www.google.com" }];
  return pages;
};

export const getRedirectUrl = async (shortId) => {
  return "https://www.google.com";
};
