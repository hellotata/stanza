const fetchCalendar = () => dispatch => {
  fetch('')
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