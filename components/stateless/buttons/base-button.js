import { LoadingButton } from "@mui/lab";

const BaseButton = ({ children, loading, ...props }) => {
  return (
    <LoadingButton loading={loading} aria-label={children} sx={{ mx: 1, my: 1 }} variant="contained" {...props}>
      {children}
    </LoadingButton>
  );
};

export default BaseButton;
