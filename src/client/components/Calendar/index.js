import React from 'react';

import './index.scss';

function Calendar(props) {
  return(
    <div className="calendar">
      <h1>{props.name}</h1>
      <p>Subscriber Count: {props.subscriberCount}</p>
      <button>Subscribe Now! </button>
    </div>
  );
}

export default Calendar;