import React from "react";
import Button from "@mui/material/Button";

export default function FormButton({
  variant = "contained",
  component = "button",
  size = "medium",
  color = "primary",
  onClick,
  disabled = false,
  contents,
}){
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {contents}
    </Button>
  );
}
