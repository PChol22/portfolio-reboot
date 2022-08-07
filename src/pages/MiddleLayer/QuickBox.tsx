import { AppTheme } from "@/AppTheme";
import { Box, styled, Typography } from "@mui/material";

const QuickBoxElement = styled(Box)(() => ({
  background: AppTheme.palette.grey.main,
  color: AppTheme.palette.grey.dark,
  overflow: 'hidden',
  transition: 'background 200ms, color 300ms',
  '&:hover': {
    background: AppTheme.palette.principal.main,
    transition: 'background 200ms, color 300ms',
    color: 'white',
    cursor: 'pointer',
  },
  '& img': {
    filter: 'brightness(1)',
    'transform-origin': 'bottom left',
    transform: 'scale(1)',
    transition: 'filter 300ms, transform 300ms',
  },
  '&:hover img': {
    filter: 'brightness(8)',
    'transform-origin': 'bottom left',
    transform: 'scale(2)',
    transition: 'filter 300ms, transform 300ms'
  },
  '& .base': {
    opacity: 1,
    transition: 'opacity 300ms',
  },
  '&:hover .base': {
    opacity: 0,
    transition: 'opacity 300ms',
  },
  '& .seeMore': {
    opacity: 0,
    transition: 'transform 300ms',
    transform: 'translateX(300%)'
  },
  '&:hover .seeMore': {
    opacity: 1,
    transition: 'transform 300ms',
    transform: 'translateX(0%)'
  },
  '& .seeMore b': {
    fontSize: 10,
  },
}));

interface QuickBoxProps {
  link: string;
  message: string;
  onClick: () => void;
}

export const QuickBox = ({ link, message, onClick }: QuickBoxProps): JSX.Element => {
  return (
    <QuickBoxElement width="22%" paddingTop="22%;" position="relative" onClick={onClick}>
      <Box position="absolute" bottom={6} left={6}>
        <img width="30%" src={link}></img>
        <Typography fontSize={12} lineHeight={1.1} fontWeight={600} className="base">{message}</Typography>
      </Box>
      <Box position="absolute" bottom={6} left={6}>
        <Typography fontSize={14} lineHeight={1.1} fontWeight={600} className="seeMore"><b>{'◀ '}</b>See more</Typography>
      </Box>
    </QuickBoxElement >
  );
}