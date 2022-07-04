import { Box, Stack } from "@mui/material";
import { AppTheme } from "./AppTheme";
import { Button } from "./Button";
import { StyledLink } from "./link.style";
import { Logo } from "./Logo";

export const Header = (): JSX.Element => {
  const links = ['Experience', 'Skills', 'Projects', 'Formation'];
  return <Box
    position="fixed"
    top="0"
    width="100vw"
    borderBottom="1px solid"
    borderColor={AppTheme.palette.principal.main}
    paddingX="5vw"
    boxSizing="border-box"
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
  </Box>
}
