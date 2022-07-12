import { Box, keyframes, Stack, styled } from "@mui/material";
import { AppTheme } from "../../AppTheme";
import theodo from '@/assets/experiences/theodo.png';
import axaClimate from '@/assets/experiences/axaClimate.png';
import sbcs from '@/assets/experiences/sbcs.png';
import padoa from '@/assets/experiences/padoa.png';
import bnpParibas from '@/assets/experiences/bnpParibas.png';

const scroll = keyframes`
  from {
    transform: translateX(-100vw);
  }

  to {
    transform: translateX(0);
  }
`;

const FooterContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.light,
  borderTop: "1px solid",
  borderColor: AppTheme.palette.grey.main,
  animation: `${scroll} 60s infinite linear`,
  width: '200vw',
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

  return (<FooterContainer position="absolute" width="100%" bottom={0} left={0} height="9vh">
    <Stack flexDirection="row" gap={2} justifyContent="space-around" alignItems="center" height="100%" width="100%">
      {carrierItems.map(({ label, src }) => (<Box key={`${label}-1`} width="20%">
        <img src={src} width="50%" />
      </Box>))}
      {carrierItems.map(({ label, src }) => (<Box key={`${label}-2`} width="20%">
        <img src={src} width="50%" />
      </Box>))}
    </Stack>
  </FooterContainer>);

}