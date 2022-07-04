import { Stack, Typography } from "@mui/material";
import { AppTheme } from "./AppTheme";

export const Logo = (): JSX.Element =>
  <Stack flexDirection="row" alignItems="baseline" sx={{ cursor: 'pointer' }}>
    <Typography fontSize={32} fontWeight={600} color={AppTheme.palette.grey.black}>p</Typography>
    <Typography fontSize={32} fontWeight={600} color={AppTheme.palette.principal.main}>chol</Typography>
    <Typography fontSize={32} fontWeight={600} color={AppTheme.palette.grey.black}>.</Typography>
  </Stack>