import { Box, Stack, styled } from "@mui/material";
import { AppTheme, PAGE_PADDING_X } from "../../AppTheme";
import { Button } from "../../Button";
import { StyledLink } from "../../link.style";
import { Logo } from "../../Logo";

const HeaderContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.white,
}))

export const Header = (): JSX.Element => {
  const links = ['Experience', 'Skills', 'Projects', 'Formation'];
  return <HeaderContainer
    position="fixed"
    top="0"
    width="100%"
    borderBottom="1px solid"
    borderColor={AppTheme.palette.principal.main}
    paddingX={PAGE_PADDING_X}
    paddingY={0.5}
  >
    <Stack
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
    >
      <Logo />
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={3}
      >
        {links.map(link => <StyledLink key={link} colorVariant='principal' fontWeight={400}>{link}</StyledLink>)}
        <Button styleVariant="outlined" colorVariant="principal">Reach me!</Button>
      </Stack>
    </Stack >
  </HeaderContainer>
}
