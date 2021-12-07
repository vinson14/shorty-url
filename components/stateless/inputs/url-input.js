import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const UrlInput = ({ name, control, rules, error, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          error={error ? true : false}
          helperText={error?.message}
          inputProps={{ type: "url" }}
          InputLabelProps={{ shrink: true }}
          {...props}
        />
      )}
    />
  );
};

export default UrlInput;
