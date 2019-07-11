import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import TextButton from 'common/TextButton';
import EventItem from 'event/EventItem';
import ReactModal from 'react-modal';
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
                    <h1>Millennium Park</h1>
                    <p>{events.length} Events Available</p>
                </div>
                <ReactModal 
                    isOpen={this.state.showPostModal}
                    contentLabel="Post Modal"
                    ariaHideApp={false}
                    className="vitebrite-post"
                    closeTimeoutMS={2000}
                >
                    <div className="modal-post-header">
                        <a href="" className="modal-post-back" onClick={this._onHandleClosePostModal}>Back to Search</a>
                    </div>
                        <img className="modal-post-image" src={selectedEvent.image}></img>
                        <div className="modal-post-title">
                            <div className="modal-post-title-text">{selectedEvent.title}</div>
                            <div className="modal-post-title-distance">{selectedEvent.distance}</div>
                        </div>
                        <div className="modal-post-form-hr"></div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <label forhtml="first-name" className="modal-post-label first-name-label">First Name</label>
                            <input name="first-name" className="first-name modal-post-input"></input>

                            <label forhtml="last-name" className="modal-post-label last-name-label">Last Name</label>
                            <input name="last-name" className="modal-post-input"></input>

                            <label forhtml="email" className="modal-post-label email-label">Email</label>
                            <input name="email" className="modal-post-input"></input>
                            
                            <label forhtml="phone" className="modal-post-label phone-label">Phone Number</label>
                            <input name="phone" className="modal-post-input"></input>

                            <input type="submit" value={(selectedEvent.price / 100).toFixed(2)} className="purchase-btn" />
                        </form>
                    
                </ReactModal>
                <ReactModal 
                    isOpen={this.state.showGetModal}
                    contentLabel="Get Modal"
                    ariaHideApp={false}
                    className="vitebrite-modal"
                    closeTimeoutMS={2000}
                >
                    <a href="#" 
                        className="modal-close" 
                        onClick={this._onHandleCloseGetModal}>X</a>
                    <div className="modal-title modal-text">Event Details</div>
                    <div className="modal-address modal-text">{selectedEvent.title}</div>
                    <div className="modal-description">{selectedEvent.description}</div>
                    <a href="#" className="bookit-btn" onClick={this._onShowPostModal}>
                    ${(selectedEvent.price / 100).toFixed(2)} | Book it!</a>
                </ReactModal>
                
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
