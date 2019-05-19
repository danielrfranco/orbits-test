import React from 'react';
import '../css/App.css';

import { Topbar, Sidebar } from './components';

function App() {
  return (
    <div className='App'>
      
      <Topbar />

      <div className='container-fluid'>
        <div className='row'>
        
          <div className='col-md-2'>
            <Sidebar />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
