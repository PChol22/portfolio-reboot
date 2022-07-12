import { Header } from './Header';
import { LandingPage } from './LandingPage';
import { MiddleLayer } from './MiddleLayer';

export const App = (): JSX.Element => (
  <>
    <LandingPage></LandingPage>
    <Header></Header>
    <MiddleLayer></MiddleLayer>
  </>
);
