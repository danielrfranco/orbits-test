import * as React from 'react';
import { Video, Tag } from './generic';

import { videos } from './videos';

export const VideosPanel = () => {
  const [selectVideosFunctionality, setselectVideosFunctionality] = React.useState(false);
  const [selectedVideos, setselectedVideos] = React.useState([]);
  const [assignVideos, setassignVideos] = React.useState(false);
  const [emailValue, setemailValue] = React.useState('');
  const [emailsAssigned, setemailsAssigned] = React.useState([]);
  const [createBundle, setcreateBundle] = React.useState(false);
  const [bundleName, setbundleName] = React.useState('');
  const [selectAll, setselectAll] = React.useState(false);

  const resetState = () => {
    setselectVideosFunctionality(false);
    setselectedVideos([]);
    setassignVideos(false);
    setemailValue('');
    setemailsAssigned([]);
    setcreateBundle(false);
    setbundleName('');
    setselectAll(false);
  };

  const isBundleComplete = () => ( selectedVideos.length > 0 && bundleName.length > 0 );

  const isVideosAssignmentComplete = () => ( emailsAssigned.length > 0 && selectedVideos.length > 0 );

  const renderTags = () => (
    <div className='tags-container'>
      <div className='tags-wrapper'>
        {
          selectedVideos.map((v, index) => (
            <Tag
              key={`tag-${index}`}
              video={v}
              onRemove={(video) => {
                const removeVideoIndex = selectedVideos.findIndex(v => v.id === video.id);
                setselectedVideos([
                  ...selectedVideos.slice(0, removeVideoIndex),
                  ...selectedVideos.slice(removeVideoIndex + 1),
                ]);
              }}
            />
          ))
        }
      </div>

      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={(event) => {
            const target = event.target;
            const selected = target.checked;

            setselectedVideos([selected ? videos : []]);
            setselectAll(selected);
          }}
        />
        Select all videos
      </label>
    </div>
  );

  const renderEmails = () => (emailsAssigned.map(email => (
    <span>{email}</span>
  )));

  const renderBundle = () => (
    <div className='create-bundle-panel action-panel'>
      <span className='title'>Create bundle</span>

      <input
        type='text'
        className='big'
        placeholder='Add Bundle Name'
        value={bundleName}
        onChange={(event) => {
          setbundleName(event.target.value);
        }}
      />

      <span className='description'>Select the videos you want to add to the bundle</span>

      {renderTags()}

      <div className='buttons-wrapper'>
        <button
          className='ok'
          disabled={!isBundleComplete()}
        >
          Create
        </button>
        <button
          className='cancel'
          onClick={resetState}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderAssignVideos = () => (
    <div className='assign-videos-panel action-panel'>
      <span className='title'>Assign videos</span>
      <span className='description'>Select the videos you want to assign</span>

      {renderTags()}
      
      <span className='description'>Assign videos to</span>

      <div className='inputs-wrapper'>
        <input
          type='text'
          placeholder='email@email.com'
          value={emailValue}
          onChange={(event) => {
            setemailValue(event.target.value);
          }}
        />
        <button
          disabled={!emailValue.length}
          onClick={() => {
            setemailsAssigned([
              ...emailsAssigned,
              emailValue
            ]);
            setemailValue('');
          }}
        >
          Add
        </button>
      </div>

      <span className='small'>Add the email addresses of the people that will have this bundle assigned</span>

      { renderEmails() }

      <div className='buttons-wrapper'>
        <button
          disabled={!isVideosAssignmentComplete()}
          className='ok'
        >
          Assign
        </button>
        <button
          className='cancel'
          onClick={resetState}
        >
          Cancel
        </button>
      </div>
    </div>
  );

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
              setselectVideosFunctionality(true);
              setcreateBundle(true);
            }}
          >
            <i className='fas fa-box'></i>
            Create Bundle
          </button>
          <button
            className='assign'
            disabled={selectVideosFunctionality}
            onClick={() => {
              setselectVideosFunctionality(true);
              setassignVideos(true);
            }}
          >
            <i className='fas fa-play'></i>
            Assign Videos
          </button>
          <button disabled={selectVideosFunctionality} className='search'>
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
        createBundle && renderBundle()
      }

      {
        assignVideos && renderAssignVideos()
      }

      <div className='panel-content-wrapper container-fluid'>
        <div className='row'>
          {
            videos.map((video, index) => (
              <Video
                key={`video-${index}`}
                video={video}
                selectable={selectVideosFunctionality}
                selected={selectedVideos.find(v => v.id === video.id)}
                onSelect={(video) => {
                  setselectedVideos([
                    ...selectedVideos,
                    video,
                  ])
                }}
                onDeselect={(video) => {
                  const removeVideoIndex = selectedVideos.findIndex(v => v.id === video.id);
                  setselectedVideos([
                    ...selectedVideos.slice(0, removeVideoIndex),
                    ...selectedVideos.slice(removeVideoIndex + 1),
                  ]);
                }}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default VideosPanel;
