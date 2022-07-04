import { Box, Stack, Typography } from "@mui/material";
import { AppTheme, PAGE_PADDING_X } from "./AppTheme";
import { Button } from "./Button";
import { MainStructure } from "./MainStructure";
import Portrait from './Portrait.png';

export const LandingPage = (): JSX.Element =>
  <Stack height="100vh" paddingX={PAGE_PADDING_X} justifyContent="center" position="relative" overflow="hidden">
    <Stack flexDirection="row">
      <Stack gap={1}>
        <Typography fontSize={80} fontWeight={600} lineHeight={1} color={AppTheme.palette.grey.dark}>
          Pierre<br />Chollet
        </Typography>
        <Box marginBottom={1}>
          <Typography fontSize={24} fontWeight={400} lineHeight={1.3} color={AppTheme.palette.grey.dark}>
            Software Engineer<br />Fullstack developer
          </Typography>
          <Typography fontSize={24} fontWeight={400} lineHeight={1.3} fontStyle="italic" color={AppTheme.palette.secondary.main}>
            #openToWork
          </Typography>
        </Box>
        <Button fontSize={18} colorVariant="secondary" styleVariant="filled" width="max-content">Reach me !</Button>
      </Stack>
    </Stack>
    <Box position="absolute" right={0} width={400} marginRight="10vw">
      <img src={Portrait} width="100%" />
    </Box>
    <MainStructure />
  </Stack >;
