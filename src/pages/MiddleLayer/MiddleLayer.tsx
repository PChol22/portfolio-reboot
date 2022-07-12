import { Box, Stack, styled, Typography } from "@mui/material";
import { AppTheme, PAGE_PADDING_X } from "../../AppTheme";

const MiddleLayerContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.light,
  width: '100vw',
  borderBottom: '1px solid',
  borderColor: AppTheme.palette.grey.main,
}));

export const MiddleLayer = (): JSX.Element => (
  <Box height="40vh">
    <MiddleLayerContainer paddingX={PAGE_PADDING_X} paddingY={2}>
      <Stack alignItems="flex-start">
        <Typography fontSize={72} color={AppTheme.palette.secondary.main} fontWeight={600} lineHeight={1}>15+</Typography>
        <Typography fontSize={24} color={AppTheme.palette.grey.dark} lineHeight={1} fontWeight={600} marginTop={0.5}>Months<br />Professional<br />Experience</Typography>
      </Stack>
    </MiddleLayerContainer>
  </Box>
);
