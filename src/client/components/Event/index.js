import React from 'react';

import './index.scss';

function Event(props) {
  const { images, dates, name } = props.event.node;
  const image = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${images.medium})`;
  const start = new Date(dates.start).toLocaleString();
  const end = new Date(dates.end).toLocaleString();

  const style = {
    backgroundImage: image,
    backgroundPosition: 'center',
    fontSize: '20px',
    color: '#fff'
  }

  return(
    <div className='event' style={style} >
      <div className='title' >
        Event: {name}
      </div>
      <div>
        Start: {start}
      </div>
      <div>
        End: {end}
      </div>
    </div>
  );
}

export default Event;
