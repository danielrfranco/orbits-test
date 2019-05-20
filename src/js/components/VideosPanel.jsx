import React, { Component } from 'react';
import { Video } from './generic';

const videos = [
  {
    id: 4,
    title: 'Classification of Items',
    duration: '04:21 min',
    type: 'Admin',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
  {
    id: 8,
    title: 'Employee Maintenance',
    duration: '05:57 min',
    type: 'Admin',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
  {
    id: 5,
    title: 'Vendor and Location',
    duration: '05:48 min',
    type: 'Admin',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
  {
    id: 7,
    title: 'Dashboard, Find and Item Detail Page',
    duration: '07:26 min',
    type: 'Dashboard',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
  {
    id: 6,
    title: 'Help, Support, Switch',
    duration: '03:08 min',
    type: 'Inventory',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
  {
    id: 1,
    title: 'Items and Locations',
    duration: '04:43 min',
    type: 'Inventory',
    previewImage: 'https://placeimg.com/352/200/tech',
  },
];

export default class VideosPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignVideosFunctionality: false,
      assignedVideos: [],
    };
  }

  render() {
    const {
      assignVideosFunctionality, assignedVideos,
    } = this.state;

    return (
      <div className='App-panel'>

        <div className='panel-header'>
          <div>
            <h2>Welcome to Orbits!</h2>
          </div>

          <div>
            <span>Please select and option</span>
            <button className='bundle'>
              <i className='fas fa-box'></i>
              Create Bundle
            </button>
            <button
              className='assign'
              disabled={assignVideosFunctionality}
              onClick={() => {
                this.setState({
                  assignVideosFunctionality: true,
                });
              }}
            >
              <i className='fas fa-play'></i>
              Assign Videos
            </button>
            <button className='search'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>

        <div className='panel-filter-container'>
          <span>Subject filter</span>
          <select>
            <option value="">All</option>
          </select>
        </div>

        <div className='panel-content-wrapper container-fluid'>
          <div className='row'>
            {
              videos.map((video, index) => (
                <Video
                  key={`video-${index}`}
                  video={video}
                  number={index}
                  selectable={assignVideosFunctionality}
                  selected={assignedVideos.find(v => v.id === video.id)}
                  onSelect={(video) => {
                    const { assignedVideos: editVideos } = this.state;
                    editVideos.push(video);
                    this.setState({ assignedVideos: editVideos });
                  }}
                  onDeselect={(video) => {
                    const { assignedVideos: editVideos } = this.state;
                    const removeVideoIndex = assignedVideos.findIndex(v => v.id === video.id);
                    this.setState({
                      assignedVideos: [
                        ...editVideos.slice(0, removeVideoIndex),
                        ...editVideos.slice(removeVideoIndex + 1),
                      ],
                    });
                  }}
                />
              ))
            }
          </div>
        </div>

      </div>
    )
  }
}