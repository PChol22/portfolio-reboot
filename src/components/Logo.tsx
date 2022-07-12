import { Stack, Typography } from "@mui/material";
import { AppTheme } from "@/AppTheme";

export const Logo = (): JSX.Element =>
  <Stack flexDirection="row" alignItems="center" sx={{ cursor: 'pointer' }}>
    <Typography fontSize={24} fontWeight={600} color={AppTheme.palette.grey.black}>p</Typography>
    <Typography fontSize={24} fontWeight={600} color={AppTheme.palette.principal.main}>chol</Typography>
    <Typography fontSize={25} fontWeight={900} color={AppTheme.palette.grey.black} fontFamily="sans">.</Typography>
  </Stack>