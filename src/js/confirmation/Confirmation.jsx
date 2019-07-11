import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from 'common/Button';
import Image from 'common/Image';

class Confirmation extends PureComponent {
    static propTypes = {
        email: PropTypes.string.isRequired,
        selectedEvent: PropTypes.object,
        pushTo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        const {
            selectedEvent,
            pushTo
        } = props;

        // if you refresh on conirmation and there isn't a selectedEvent, make sure to go back to search and render nothing here
        if (!selectedEvent) {
            pushTo('/');
        }
    }

    _onPurchaseAnotherClick = evt => {
        const {
            pushTo,
        } = this.props;

        pushTo('/');
    }

    render() {
        const {
            email,
            selectedEvent
        } = this.props;

        if (!selectedEvent) {
            return null;
        }

        return (
            <div className="Confirmation">
                <h1>Park it like its hot!</h1>
                <p>You successfully purchased parking at <strong>{selectedEvent.title}</strong> for <strong>${(selectedEvent.price / 100).toFixed(2)}</strong>.</p>
                <Image src={selectedEvent.image} />
                <p>We emailed a receipt to <a href={`mailto:${email}`}>{email}</a>.</p>
                <Button
                    color="primary"
                    onClick={this._onPurchaseAnotherClick}
                >
                    Purchase Another Event!
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        checkout: {
            email
        },
        event: {
            selected: selectedEvent
        }
    } = state;

    return {
        email,
        selectedEvent
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
