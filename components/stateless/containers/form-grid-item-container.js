import { Grid } from "@mui/material";

const FormGridItemContainer = ({ children }) => {
  return (
    <Grid item xs={12} md={8} display="flex" justifyContent="center">
      {children}
    </Grid>
  );
};

export default FormGridItemContainer;
