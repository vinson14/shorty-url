import { Typography } from "@mui/material";
import { getPages } from "../utils/api";

const RedirectPage = ({ shortId }) => {
  return <Typography>{shortId}</Typography>;
};

export default RedirectPage;

export async function getStaticPaths() {
  const pages = await getPages();
  const paths = pages.map((page) => ({ params: { shortId: page.shortId } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { shortId } = params;
  return {
    props: {
      shortId,
    },
  };
}
