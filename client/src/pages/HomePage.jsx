import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Landing from "../pages/Landing"
import Preloader from '../components/widgets/Preloader';

import { Routes as RoutesConfig } from '../routes';

const RouteLanding = ({ element: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      <main>
        <Component {...rest} />
      </main>
    </>
  );
};


export default function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutesConfig.Landing.path} element={<RouteLanding element={Landing} />} />
    </Routes>
  );
}