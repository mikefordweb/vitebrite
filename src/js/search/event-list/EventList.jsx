import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import TextButton from 'common/TextButton';
import EventItem from 'event/EventItem';
import {push} from 'connected-react-router';

export default class EventList extends PureComponent {
    static propTypes = {
        selectedEvent: PropTypes.object,
        events: PropTypes.arrayOf(PropTypes.object).isRequired,
        setEvent: PropTypes.func.isRequired
    };

    constructor () {
        super();
        this.state = {
          showGetModal: false,
          showPostModal: false
        };
        this._onHandleCloseGetModal = this._onHandleCloseGetModal.bind(this);
        this._onHandleClosePostModal = this._onHandleClosePostModal.bind(this);
        this._onShowPostModal = this._onShowPostModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _onDetailsClick = event => {
        this.props.setEvent(event);
        this.setState({ showGetModal: true });
    }

    _onShowPostModal () {
        this.setState({ showGetModal: false });
        this.setState({ showPostModal: true });
    }

    _onHandleCloseGetModal () {
        this.setState({ showGetModal: false });
    }

    _onHandleClosePostModal () {
        this.setState({ showPostModal: false });
    }

    handleSubmit(event) {
        event.preventDefault();
        push('/checkout');
        console.log('handleSubmit');
    }

    render() {
        const { selectedEvent, events } = this.props;

        return (
            <div className="EventList">
                <div className="EventList-feature">
                    <div className="EventList-breadcrumbs">
                        <TextButton>Chicago</TextButton> &gt; Millennium Park
                    </div>
                    <p>{events.length} Events Available</p>
                </div>
                 
                <div className="EventList-events">
                    {events.map(event => {
                        return (
                            <EventItem
                                key={event.id}
                                data={event}
                                isSelected={selectedEvent && selectedEvent.id === event.id}
                                onDetailsClick={this._onDetailsClick}
                            />
                            
                        );
                    })}
                </div>

            </div>
        );
    }
}
