import { Container } from "@mui/material";

const MainContainer = ({ children }) => {
  const sx = {
    p: 3,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return <Container sx={sx}>{children}</Container>;
};

export default MainContainer;
