import { AppTheme, PAGE_PADDING_X } from "@/AppTheme";
import { Stack, styled, Typography } from "@mui/material";
import { MutableRefObject } from "react";

const ExperienceCard = styled(Stack)(() => ({
  background: AppTheme.palette.grey.light,
}));

export const Experience = ({ refProp }: { refProp: MutableRefObject<HTMLElement | null> }): JSX.Element => {
  return <Stack paddingX={PAGE_PADDING_X} gap={1}>
    <Typography fontSize={48} fontWeight={600} lineHeight={1} color={AppTheme.palette.grey.dark} ref={refProp}>
      Experience
    </Typography>
    <Stack width="100%" gap={1} flexDirection="row" marginTop={2}>
      <ExperienceCard width="100%" height="40vh"></ExperienceCard>
      <ExperienceCard width="100%" height="40vh"></ExperienceCard>
    </Stack>
    <Stack width="100%" gap={1} flexDirection="row">
      <ExperienceCard width="100%" height="40vh"></ExperienceCard>
      <ExperienceCard width="100%" height="40vh"></ExperienceCard>
    </Stack>
  </Stack>
}