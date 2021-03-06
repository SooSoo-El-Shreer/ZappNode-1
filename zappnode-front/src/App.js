import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.generated.css';
import './landing/components/css/landing.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
