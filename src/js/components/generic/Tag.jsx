import React, { PureComponent } from 'react';

export default class Tag extends PureComponent {
  constructor(props) {
    super(props);

    this.formatNumber = this.formatNumber.bind(this);
  }
  
  formatNumber(number) {
    return ("0" + (number + 1)).slice(-2);
  }

  render() {
    const {
      video,
      onRemove,
    } = this.props;

    return (
      <div className='tag'>
        <span>{`Video ${this.formatNumber(video.id)}`}</span>
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
  }
}
