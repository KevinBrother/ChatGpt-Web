import { useRoutes } from 'react-router-dom';
import { webRouter } from '../routers';
import React from 'react';

function App() {
  return useRoutes(webRouter as Array<any>);
}

export default App;
