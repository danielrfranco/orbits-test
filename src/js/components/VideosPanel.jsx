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
            <span>Please select and option</span>
            <button className='bundle'>
              <i class="fas fa-box"></i>
              Create Bundle
            </button>
            <button className='assign'>
              <i class="fas fa-play"></i>
              Assign Videos
            </button>
            <button className='search'>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

      </div>
    )
  }
}