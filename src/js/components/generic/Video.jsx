import React, { PureComponent } from 'react';

export default class Video extends PureComponent {
  constructor(props){
    super(props);

    this.formatNumber = this.formatNumber.bind(this);
  }

  formatNumber(number) {
    return ("0" + (number + 1)).slice(-2);
  }

  render() {
    const {
      video, number, selectable, selected,

      onSelect, onDeselect,
    } = this.props;
    return (
      <div className='col-sm-6 col-lg-4 col-xl-3'>
        <div
          className={
            !selectable
              ? 'video-card'
              : selected
                ? 'video-card selectable selected'
                : 'video-card selectable'
          }
          onClick={() => {
            if(selectable) {
              if(!selected){
                onSelect(video);
              } else {
                onDeselect(video);
              }
            }
          }}
        >

          <div className='video-container' style={{backgroundImage: `url(${video.previewImage})`}}>
            <img src={video.previewImage} alt='placeholder' />

            {
              !selectable
                ? (
                  <div className='play-btn'>
                    <i className="far fa-play-circle"></i>
                  </div>
                )
                : !selected
                  ? (
                    <div className='select-btn'>
                      <i className="fas fa-circle"></i>
                    </div>
                  )
                  : (
                    <div className='select-btn selected'>
                      <i className="fas fa-check-circle"></i>
                    </div>
                  )
            }
            
            <div className='type'>{video.type}</div>
            <div className='duration'>{video.duration}</div>
          </div>

          <div className='video-title'>
            <span className='number'>{this.formatNumber(number)}</span>
            <span className='title'>{video.title}</span>
          </div>

        </div>
      </div>
    )
  }
}