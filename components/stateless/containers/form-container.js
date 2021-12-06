import { Grid } from "@mui/material";

const FormContainer = ({ children, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" p={5}>
        {children}
      </Grid>
    </form>
  );
};

export default FormContainer;
