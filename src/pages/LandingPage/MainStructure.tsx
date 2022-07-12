import { Box, styled } from '@mui/material';
import { AppTheme } from '@/AppTheme';
import { Socials } from './Socials';

const StyledBlock = styled(Box)<{ backgroundColor: string, offset: number }>(({ backgroundColor, offset }) => ({
  transform: `rotate(-25deg) translateY(-${offset}px)`,
  width: "1000px",
  height: "45vh",
  background: backgroundColor,
  position: 'absolute',
  bottom: '-25vh',
  right: -150,
}))

export const MainStructure = () => <>
  <StyledBlock backgroundColor={AppTheme.palette.secondary.main} offset={20} />
  <StyledBlock backgroundColor={AppTheme.palette.principal.main} offset={0} />
  <Socials></Socials>
</>