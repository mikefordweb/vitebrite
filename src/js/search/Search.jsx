import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from 'event/event-actions';
import EventList from './event-list/EventList';

const Search = ({
    selectedEvent,
    events,
    setEvent,
    userEvents
}) => {
    console.log("userEvents: " + userEvents);
    if (selectedEvent === null) {
        selectedEvent = {};
    }
    return (
        <div className="Search">
            <EventList
                events={events}
                userEvents={events}
                selectedEvent={selectedEvent}
                setEvent={setEvent}
            />
            <div className="Search-content" />
        </div>
    );
};

Search.propTypes = {
    selectedEvent: PropTypes.object,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    setEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const {
        event: {
            selected: selectedEvent
        }
    } = state;

    return {
        selectedEvent
    };
};

const mapDispatchToProps = {
    setEvent: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
