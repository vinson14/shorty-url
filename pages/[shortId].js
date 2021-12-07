import { Typography } from "@mui/material";
import { getRedirectUrl } from "../utils/api";

const RedirectPage = () => {
  return <></>;
};

export default RedirectPage;

export async function getServerSideProps(context) {
  const { shortId } = context.params;
  const redirectUrl = await getRedirectUrl(shortId);
  return {
    redirect: {
      permanent: false,
      destination: redirectUrl,
    },
  };
}
