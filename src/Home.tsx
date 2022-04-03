import React, { useEffect, useState } from 'react';
import { ComponentA } from './utils/ComponentA';
import { ComponentB } from './utils/ComponentB';
import { getExperimentAB } from './utils/getExperimentAB';
import { HomeExperiment } from './utils/constants';
import { useCookies } from 'react-cookie';

function useStickyExperimentAB() {
  const [cookies, setCookie] = useCookies([HomeExperiment]);

  if (cookies.HomeExperiment) {
    return cookies.HomeExperiment;
  } else {
    const thisVisit = getExperimentAB();
    setCookie(HomeExperiment, thisVisit, { path: '/' });
    return thisVisit;
  }
}

const Home: React.FC<{}> = () => {
  const experiment = useStickyExperimentAB();
  return (
    <>
      {experiment == 'A' ? <ComponentA /> : <ComponentB />}
    </>
  );
}

export default Home;