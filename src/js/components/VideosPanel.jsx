import React, { Component } from 'react';

export default class VideosPanel extends Component {
  render() {
    return (
      <div className='App-panel'>

        <div className='panel-header'>
          <div>
            <h2>Welcome to Orbits!</h2>
          </div>

          <div>
            <button className='bundle'>Create Bundle</button>
            <button className='assign'>Assign Videos</button>
            <button className='search'>Search</button>
          </div>
        </div>

      </div>
    )
  }
}