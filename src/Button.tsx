import { Box, styled } from "@mui/material";
import { AppTheme, ColorVariant } from "./AppTheme";

export const Button = styled(Box)<{
  colorVariant: ColorVariant,
  styleVariant: 'filled' | 'outlined',
}>(({ colorVariant, styleVariant }) => ({
  background: styleVariant === 'outlined' ? AppTheme.palette.grey.white : AppTheme.palette[colorVariant].main,
  color: styleVariant === 'outlined' ? AppTheme.palette[colorVariant].main : AppTheme.palette.grey.white,
  borderRadius: 2,
  border: "1px solid",
  borderColor: styleVariant === 'outlined' ? AppTheme.palette[colorVariant].main : AppTheme.palette[colorVariant].main,
  padding: "6px 12px",
  transition: "background 400ms, color 400ms, border-radius 400ms",
  '&:hover': {
    background: styleVariant === 'filled' ? AppTheme.palette.grey.white : AppTheme.palette[colorVariant].main,
    color: styleVariant === 'filled' ? AppTheme.palette[colorVariant].main : AppTheme.palette.grey.white,
    borderColor: styleVariant === 'filled' ? AppTheme.palette[colorVariant].main : AppTheme.palette[colorVariant].main,
    borderRadius: 5,
    transition: "background 400ms, color 400ms, border-radius 400ms",
    cursor: 'pointer',
  }
}));
