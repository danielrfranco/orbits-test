import React from 'react';
import '../css/App.css';

import {
  Topbar, Sidebar, VideosPanel,
} from './components';

function App() {
  return (
    <div className='App'>
      
      <Topbar />

      <div className='container-fluid content-wrapper'>
        <div className='row'>
        
          <div className='col-md-2'>
            <Sidebar />
          </div>

          <div className='col-md-10'>
            <VideosPanel />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
