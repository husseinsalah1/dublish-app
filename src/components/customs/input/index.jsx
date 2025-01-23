import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      variant="filled"
      size="small"
      sx={{
        mb: 2,
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "secondary.dark", // Custom border color on focus
          },
        },
        "& label.Mui-focused": {
          color: "secondary.dark", // Custom label color on focus
        },
      }}
    />
  );
};

export default CustomInput;
