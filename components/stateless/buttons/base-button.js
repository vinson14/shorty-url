import { LoadingButton } from "@mui/lab";

const BaseButton = ({ children, loading, ...props }) => {
  return (
    <LoadingButton loading={loading} aria-label={children} sx={{ m: 2 }} variant="contained" {...props}>
      {children}
    </LoadingButton>
  );
};

export default BaseButton;
