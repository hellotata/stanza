import { combineReducers } from 'redux';

const initialState = {
  "data": {
    "calendar": {
      "name": "",
      "subscriberCount": "",
      "upcomingEvents": {
        "edges": [
          {
            "node": {
              "name": "",
              "images": {
                "medium": ""
              },
              "dates": {
                "start": "",
                "end": "",
                "allDay": null
              }
            }
          }
        ]
      }
    }
  }
}

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CALENDAR':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  calendar
});