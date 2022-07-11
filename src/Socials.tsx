import { Box, Stack, styled } from "@mui/material";
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import github from './github.png';
import malt from './malt.png';
import email from './email.png';

const SocialLogo = styled(Box)(() => ({
  '&:hover': {
    filter: 'grayscale(1) invert(1)',
    transition: 'filter 400ms',
  },
  cursor: 'pointer',
  transition: 'filter 200ms',
}))

const socials = [
  {
    link: 'https://www.linkedin.com/in/pchol22/',
    logo: linkedin,
  },
  {
    link: 'https://github.com/PChol22',
    logo: github,
  },
  {
    link: 'https://twitter.com/PierreChollet22',
    logo: twitter,
  },
  {
    link: 'https://www.malt.fr/profile/pchol22',
    logo: malt,
  },
  {
    link: 'mailto: pchol.pro@gmail.com',
    logo: email,
  },
];

export const Socials = (): JSX.Element => <Stack position="absolute" right="1vh" bottom="11vh" gap={1}>
  {socials.map(({ link, logo }) => (
    <SocialLogo height="5vh" key={link}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={logo} height="100%"></img>
      </a>
    </SocialLogo>
  ))
  }
</Stack>