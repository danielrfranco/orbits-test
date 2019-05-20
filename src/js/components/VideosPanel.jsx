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
      selectVideosFunctionality: false,
      selectedVideos: [],
      assignVideos: false,
      createBundle: false,
    };

    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      selectVideosFunctionality: false,
      selectedVideos: [],
      assignVideos: false,
      createBundle: false,
    });
  }

  render() {
    const {
      selectVideosFunctionality, selectedVideos,
      assignVideos, createBundle,
    } = this.state;

    return (
      <div className='App-panel'>

        <div className='panel-header'>
          <div>
            <h2>Welcome to Orbits!</h2>
          </div>

          <div>
            <span>Please select and option</span>
            <button
              className='bundle'
              disabled={selectVideosFunctionality}
              onClick={() => {
                this.setState({
                  selectVideosFunctionality: true,
                  createBundle: true,
                });
              }}
            >
              <i className='fas fa-box'></i>
              Create Bundle
            </button>
            <button
              className='assign'
              disabled={selectVideosFunctionality}
              onClick={() => {
                this.setState({
                  selectVideosFunctionality: true,
                  assignVideos: true,
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

        {
          createBundle
            ? (
              <div className='create-bundle-panel action-panel'>
                <span className='title'>Create bundle</span>
                <span className='description'>Select the videos you want to add to the bundle</span>

                <div className='buttons-wrapper'>
                  <button
                    className='ok'
                  >
                    Assign
                  </button>
                  <button
                    className='cancel'
                    onClick={() => {
                      this.resetState();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )
            : null
        }

        {
          assignVideos
            ? (
              <div className='assign-videos-panel action-panel'>
                <span className='title'>Assign videos</span>
                <span className='description'>Select the videos you want to assign</span>
                <span className='description'>Assign videos to</span>

                <div className='inputs-wrapper'>
                  <input type='text' placeholder='email@email.com'/>
                  <button>Add</button>
                </div>

                <span className='small'>Add the email addresses of the people that will have this bundle assigned</span>

                <div className='buttons-wrapper'>
                  <button
                    className='ok'
                  >
                    Assign
                  </button>
                  <button
                    className='cancel'
                    onClick={() => {
                      this.resetState();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )
            : null
        }

        <div className='panel-content-wrapper container-fluid'>
          <div className='row'>
            {
              videos.map((video, index) => (
                <Video
                  key={`video-${index}`}
                  video={video}
                  number={index}
                  selectable={selectVideosFunctionality}
                  selected={selectedVideos.find(v => v.id === video.id)}
                  onSelect={(video) => {
                    const { selectedVideos: editVideos } = this.state;
                    editVideos.push(video);
                    this.setState({ selectedVideos: editVideos });
                  }}
                  onDeselect={(video) => {
                    const { selectedVideos: editVideos } = this.state;
                    const removeVideoIndex = selectedVideos.findIndex(v => v.id === video.id);
                    this.setState({
                      selectedVideos: [
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