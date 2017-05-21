import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCalendar from '../../actions';
import mockData from './data';

import Calendar from '../Calendar';
import Event from '../Event';

import './index.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCalendar();
  }

  render() {
    const eventObjects = mockData.data.calendar.upcomingEvents.edges;
    return(
      <div>
        <Calendar name={mockData.data.calendar.name} subscriberCount={mockData.data.calendar.subscriberCount} />
        <div className="home">
          {eventObjects.map((event, idx) => {
            return <Event key={idx} event={event} />
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
    calendar: state.calendar,
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCalendar: () => dispatch(fetchCalendar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);