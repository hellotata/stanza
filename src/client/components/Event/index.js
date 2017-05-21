import React from 'react';

import './index.scss';

function Event(props) {
  const image= `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.event.node.images.medium})`;
  const start = new Date(props.event.node.dates.start).toLocaleString();
  const end = new Date(props.event.node.dates.end).toLocaleString();

  const style = {
    backgroundImage: image,
    backgroundPosition: 'center',
    fontSize: '20px',
    color: '#fff'
  }

  return(
    <div className='event' style={style} >
      <div className='title' >
        Event: {props.event.node.name}
      </div>
      <br/> 
      Start: {start}
      <br/>
      End: {end}
      <br/>
    </div>
  );
}

export default Event;
