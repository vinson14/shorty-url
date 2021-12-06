import { Box, Typography } from "@mui/material";
const ShortUrlDisplay = ({ children }) => {
  return (
    <Box>
      <Typography component="p" variant="overline" align="center">
        Shortened URL
      </Typography>
      <Typography align="center">{children}</Typography>
    </Box>
  );
};

export default ShortUrlDisplay;
