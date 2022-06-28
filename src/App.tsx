import { Typography } from '@mui/material';
import { AppTheme } from './AppTheme';

export const App = (): JSX.Element => (
  <Typography variant="h1" color={AppTheme.palette.principal.main}>
    Hello World !
  </Typography>
);
