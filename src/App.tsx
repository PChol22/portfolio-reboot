import { Header } from './pages/LandingPage/Header';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { MiddleLayer } from './pages/MiddleLayer/MiddleLayer';

export const App = (): JSX.Element => (
  <>
    <LandingPage></LandingPage>
    <Header></Header>
    <MiddleLayer></MiddleLayer>
  </>
);
