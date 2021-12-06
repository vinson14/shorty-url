import { Typography } from "@mui/material";

const PageTitle = ({ children }) => {
  return (
    <Typography align="center" variant="h3">
      {children}
    </Typography>
  );
};

export default PageTitle;
