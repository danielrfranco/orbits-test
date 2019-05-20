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
      title, number, duration, type, previewImage,
      selectable,
    } = this.props;
    return (
      <div className='col-sm-6 col-lg-4 col-xl-3'>
        <div className={selectable ? 'video-card selectable' : 'video-card'}>

          <div className='video-container' style={{backgroundImage: `url(${previewImage})`}}>
            <img src={previewImage} alt='placeholder' />
            <div className='play-btn'></div>
            <div className='type'>{type}</div>
            <div className='duration'>{duration}</div>
          </div>

          <div className='video-title'>
            <span className='number'>{this.formatNumber(number)}</span>
            <span className='title'>{title}</span>
          </div>

        </div>
      </div>
    )
  }
}