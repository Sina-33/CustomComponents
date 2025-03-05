import React from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
}) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick} disabled={disabled}>
      {children}
    </MuiButton>
  );
};

export default Button;
