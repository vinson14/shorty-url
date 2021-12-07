import { Grid, Typography } from "@mui/material";
import _, { set } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../components/stateless/buttons/base-button";
import CopyButton from "../components/stateless/buttons/copy-button";
import FormContainer from "../components/stateless/containers/form-container";
import FormGridItemContainer from "../components/stateless/containers/form-grid-item-container";
import MainContainer from "../components/stateless/containers/main-container";
import ShortUrlContainer from "../components/stateless/containers/short-url-container";
import UrlInput from "../components/stateless/inputs/url-input";
import PageTitle from "../components/stateless/typography/page-title";
import ShortUrlDisplay from "../components/stateless/typography/short-url-display";
import { URL_INPUT_RULES } from "../constants/form-validation";
import { PAGE_TITLE, URL_INPUT_LABEL, URL_INPUT_NAME, URL_INPUT_PLACEHOLDER } from "../constants/strings";
import { shortenUrl } from "../utils/api";
import useBaseUrl from "../utils/useBaseUrl";

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues: { [URL_INPUT_NAME]: "" } });
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const baseUrl = useBaseUrl();

  const onSubmit = async (values) => {
    console.log("onSubmit runs");
    setLoading(true);
    const shortId = await shortenUrl(_.get(values, URL_INPUT_NAME));
    setShortUrl(`${baseUrl}${shortId}`);
    if (shortId) {
      setLoading(false);
      reset();
    }
  };
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MainContainer>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <FormGridItemContainer>
          <UrlInput
            control={control}
            name={URL_INPUT_NAME}
            error={_.get(errors, URL_INPUT_NAME)}
            label={URL_INPUT_LABEL}
            placeholder={URL_INPUT_PLACEHOLDER}
            rules={URL_INPUT_RULES}
          />
        </FormGridItemContainer>
        <FormGridItemContainer>
          <BaseButton type="submit" loading={loading}>
            Shorten URL
          </BaseButton>
        </FormGridItemContainer>
      </FormContainer>
      {shortUrl && (
        <ShortUrlContainer>
          <ShortUrlDisplay>{shortUrl}</ShortUrlDisplay>
          <CopyButton copied={copied} onClick={copyUrl} />
        </ShortUrlContainer>
      )}
    </MainContainer>
  );
};

export default HomePage;
