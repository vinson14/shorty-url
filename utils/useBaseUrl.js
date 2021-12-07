import { useEffect, useState } from "react";

const useBaseUrl = () => {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    setBaseUrl(window.location.href);
  }, []);
  return baseUrl;
};

export default useBaseUrl;
