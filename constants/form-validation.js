import isUrl from "is-url";
import { isUri, isWebUri } from "valid-url";
import { URL_INPUT_INVALID_URL_ERR_MSG, URL_INPUT_REQUIRED_ERR_MSG } from "./strings";

export const URL_INPUT_RULES = {
  required: {
    value: true,
    message: URL_INPUT_REQUIRED_ERR_MSG,
  },
  validate: { isUrl: (value) => isUrl(value) || URL_INPUT_INVALID_URL_ERR_MSG },
};
