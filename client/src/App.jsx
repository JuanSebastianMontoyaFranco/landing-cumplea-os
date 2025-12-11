import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
          <AppRoutes />
    </BrowserRouter>
  );
}

export default App;