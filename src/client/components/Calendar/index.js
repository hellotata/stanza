import React from 'react';

import './index.scss';

function Calendar({ image, name, subscriberCount }) {
  const imageString = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image})`;

  const style = {
    backgroundImage: imageString,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontSize: '20px',
    color: '#fff'
  }

  return(
    <div className="calendar" style={style}>
      <h1>{name}</h1>
      <p>Subscriber Count: {subscriberCount}</p>
      <button>Subscribe Now!</button>
    </div>
  );
}

export default Calendar;