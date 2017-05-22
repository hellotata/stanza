const fetchCalendar = () => dispatch => {
  fetch('https://www.stanza.co/api/graphql?query=%7B%0A%20%20calendar(shortname%3A%20%22nfl-49ers%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20subscriberCount%0A%20%20%20%20background%0A%20%20%0A%20%20%20%20upcomingEvents%3A%20events(first%3A%2020%2C%20filterBy%3A%20%7Bpast%3A%20false%7D)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20images%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20medium%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20dates%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20start%0A%20%20%20%20%20%20%20%20%20%20%20%20end%0A%20%20%20%20%20%20%20%20%20%20%20%20allDay%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D')
    .then(response => {
      return response.json()
    }).then(data => {
      dispatch({
        type: 'FETCH_CALENDAR',
        payload: data
      });
  })
}

export default fetchCalendar;