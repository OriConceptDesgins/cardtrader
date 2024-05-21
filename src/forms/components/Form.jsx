import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";

export default function Form({
  title = "",
  onSubmit,
  onReset,
  validateForm,
  navigateToOnCancel = "/",
  color = "inherit",
  spacing = 1,
  styles = {},
  children,
}) {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={12} sm={6}>
          <FormButton
            contents="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(navigateToOnCancel)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            contents={<LoopIcon />}
            variant="outlined"
            component="div"
            onClick={onReset}
          />
        </Grid>
        <Grid item xs={12}>
          <FormButton
            contents="Submit"
            onClick={onSubmit}
            disabled={!validateForm()}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
