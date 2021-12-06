import { Box } from "@mui/material";

const ShortUrlContainer = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {children}
    </Box>
  );
};

export default ShortUrlContainer;
