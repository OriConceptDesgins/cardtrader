import React from "react";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";

export default function FormTextField({
  variant = "outlined",
  type = "text",
  name,
  data,
  label,
  required = true,
  error,
  onChange,
  ...rest
}){
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
}
