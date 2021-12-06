import { Grid, Typography } from "@mui/material";
import _ from "lodash";
import { useForm } from "react-hook-form";
import BaseButton from "../components/stateless/buttons/base-button";
import FormContainer from "../components/stateless/containers/form-container";
import FormGridItemContainer from "../components/stateless/containers/form-grid-item-container";
import MainContainer from "../components/stateless/containers/main-container";
import UrlInput from "../components/stateless/inputs/url-input";
import PageTitle from "../components/stateless/typography/page-title";
import { URL_INPUT_RULES } from "../constants/form-validation";
import { PAGE_TITLE, URL_INPUT_LABEL, URL_INPUT_NAME, URL_INPUT_PLACEHOLDER } from "../constants/strings";

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues: { [URL_INPUT_NAME]: "" } });
  const onSubmit = (values) => console.log(values);
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
          <BaseButton>Shorten URL</BaseButton>
        </FormGridItemContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default HomePage;
