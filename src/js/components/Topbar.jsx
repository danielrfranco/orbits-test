import React from 'react';

const Topbar = props => {

  return (
    <header className='App-header'>
      <div className='container'>
        <div className='row'>
          <div>
            Some logo
          </div>
          <div>
            <i class="fas fa-power-off"></i>
            Logout
          </div>
        </div>
      </div>
    </header>
  );

}

export default Topbar;
