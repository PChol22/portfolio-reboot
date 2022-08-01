import { Box, Stack, styled, Typography } from "@mui/material";
import { AppTheme, PAGE_PADDING_X } from "@/AppTheme";
import { QuickBox } from "./QuickBox";
import fullStackIcon from '@/assets/quickBoxes/fullStack.png';
import formationIcon from '@/assets/quickBoxes/formation.png';
import skillsIcon from '@/assets/quickBoxes/skills.png';
import projectsIcon from '@/assets/quickBoxes/projects.png';

const MiddleLayerContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.light,
  width: '100vw',
  borderBottom: '1px solid',
  borderColor: AppTheme.palette.grey.main,
}));

export const MiddleLayer = (): JSX.Element => (
  <Box height="40vh">
    <MiddleLayerContainer paddingX={PAGE_PADDING_X} paddingY={2}>
      <Stack position="absolute" right={PAGE_PADDING_X} gap={3} width="min(55%, 600px)">
        <Typography fontSize={24} color={AppTheme.palette.grey.dark} lineHeight={1.2} fontWeight={600} marginTop={0.5}>Fullstack developer<br />Serverless enthusiast</Typography>
        <Stack flexDirection="row" gap={2}>
          <QuickBox message="Fullstack developer experience" link={fullStackIcon}></QuickBox>
          <QuickBox message="Software development skills" link={skillsIcon}></QuickBox>
          <QuickBox message="Projects and experimentations" link={projectsIcon}></QuickBox>
          <QuickBox message="Engineering and IT formation" link={formationIcon}></QuickBox>
        </Stack>
      </Stack>
      <Stack alignItems="flex-start">
        <Typography fontSize={80} color={AppTheme.palette.principal.main} fontWeight={600} lineHeight={1}>15+</Typography>
        <Typography fontSize={30} color={AppTheme.palette.grey.dark} lineHeight={1} fontWeight={600} marginTop={0.5}>Months<br />Professional<br />Experience</Typography>
      </Stack>

    </MiddleLayerContainer>
  </Box >
);
