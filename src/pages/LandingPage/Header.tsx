import { Box, Stack, styled } from "@mui/material";
import { AppTheme, PAGE_PADDING_X } from "@/AppTheme";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import { Logo } from "@/components/Logo";
import { MutableRefObject } from "react";

const HeaderContainer = styled(Box)(() => ({
  background: AppTheme.palette.grey.white,
}));

const onLinkClick = (ref: MutableRefObject<HTMLElement | null>): void => {
  if (ref.current !== null) {
    ref.current.scrollIntoView();
  }
};

export const Header = ({ refs }: { refs: MutableRefObject<HTMLElement | null>[] }): JSX.Element => {
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
        {links.map((link, i) => (
          <StyledLink
            key={link}
            colorVariant='principal'
            fontWeight={400}
            onClick={() => onLinkClick(refs[i])}
          >
            {link}
          </StyledLink>
        ))}
        <Button styleVariant="outlined" colorVariant="principal">Reach me!</Button>
      </Stack>
    </Stack >
  </HeaderContainer>
}
