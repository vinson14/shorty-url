import { Typography } from "@mui/material";
import MainContainer from "../components/stateless/containers/main-container";
import PageTitle from "../components/stateless/typography/page-title";
import { PAGE_TITLE } from "../constants/strings";

const HomePage = () => {
  return (
    <MainContainer>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <Typography>Content</Typography>
    </MainContainer>
  );
};

export default HomePage;
