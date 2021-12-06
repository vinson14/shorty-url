import { Typography } from "@mui/material";
import { getPages, getRedirectUrl } from "../utils/api";

const RedirectPage = ({ shortId }) => {
  return <Typography>{shortId}</Typography>;
};

export default RedirectPage;

export async function getServerSideProps(context) {
  const { shortId } = context.params;
  const redirectUrl = await getRedirectUrl(shortId);
  return {
    redirect: {
      permanent: true,
      destination: redirectUrl,
    },
  };
}
