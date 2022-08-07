import { useRef } from 'react';
import { Experience } from './pages/Experience/Experience';
import { Header } from './pages/LandingPage/Header';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { MiddleLayer } from './pages/MiddleLayer/MiddleLayer';

export const App = (): JSX.Element => {
  const experienceRef = useRef(null);
  return (
    <>
      <LandingPage></LandingPage>
      <MiddleLayer refs={[experienceRef]}></MiddleLayer>
      <Experience refProp={experienceRef}></Experience>
      <Header refs={[experienceRef]}></Header>
    </>);
};
