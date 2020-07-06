import React from 'react';

export const Tag = ({
  video,
  onRemove,
}) => {

  const formatNumber = (number) => {
    return ("0" + (number + 1)).slice(-2);
  }

  return (
    <div className='tag'>
      <span>{`Video ${formatNumber(video.id)}`}</span>
      <button
        className='delete'
        onClick={() => {
          onRemove(video);
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default Tag;
