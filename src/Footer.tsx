import { Box, Stack, styled } from "@mui/material";
import { AppTheme } from "./AppTheme";
import theodo from './theodo.png';
import axaClimate from './axaClimate.png';
import sbcs from './sbcs.png';
import padoa from './padoa.png';
import bnpParibas from './bnpParibas.png';

const FooterContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.light,
  borderTop: "1px solid",
  borderColor: AppTheme.palette.grey.main,
}));

export const Footer = (): JSX.Element => {
  const carrierItems = [
    {
      label: 'BNP Paribas',
      src: bnpParibas,
    },
    {
      label: 'Axa Climate',
      src: axaClimate,
    },
    {
      label: 'Theodo',
      src: theodo,
    },
    {
      label: 'Padoa',
      src: padoa,
    },
    {
      label: 'SBCS',
      src: sbcs,
    }];

  return (<FooterContainer position="absolute" width="100%" bottom={0} left={0} height="10vh">
    <Stack flexDirection="row" gap={2} justifyContent="space-around" alignItems="center" height="100%" width="100%">
      {carrierItems.map(({ label, src }) => (<Box key={label} width="10%">
        <img src={src} width="100%" />
      </Box>))}
    </Stack>
  </FooterContainer>);

}