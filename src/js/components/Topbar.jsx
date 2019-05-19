import React, { Component } from 'react';

export default class Topbar extends Component {

  render () {
    return (
      <header className='App-header'>
        <div className='container'>
          <div className='row'>
            <div>
              Some logo
            </div>
            <div>
              Logout
            </div>
          </div>
        </div>
      </header>
    );
  }

}
