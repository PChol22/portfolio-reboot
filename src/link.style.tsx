import { Box, styled } from "@mui/material";
import { AppTheme } from "./AppTheme";

export const StyledLink = styled(Box)<{ colorVariant: 'principal' | 'secondary' | 'oppositeA' | 'oppositeB' }>(({ colorVariant }) => ({
  cursor: 'pointer',
  color: AppTheme.palette[colorVariant].main,
  position: 'relative',
  '&::after': {
    background: AppTheme.palette[colorVariant].main,
    position: 'absolute',
    width: "100%",
    height: '1.5px',
    bottom: -1,
    left: 0,
    content: "''",
    transformOrigin: 'center',
    transform: 'scaleX(0)',
    transition: "transform 400ms"
  },
  '&:hover::after': {
    transform: 'scaleX(0.8)',
    transition: "transform 400ms"
  },
  '&:active': {
    color: AppTheme.palette[colorVariant].dark,
  },
  '&:active::after': {
    background: AppTheme.palette[colorVariant].dark,
  },
}));
