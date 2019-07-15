import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'common/Image';
import TextButton from 'common/TextButton';

export default class EventItem extends PureComponent {
    static propTypes = {
        showDetails: PropTypes.bool,
        isSelected: PropTypes.bool,
        data: PropTypes.object.isRequired,
        onDetailsClick: PropTypes.func
    };
    static defaultProps = {
        showDetails: true
    };

    _onDetailsClick = evt => {
        const {
            data,
            onDetailsClick
        } = this.props;

        onDetailsClick(data);
    }

    render() {
        const {
            showDetails,
            isSelected,
            data: {
                image,
                distance,
                title
            }
        } = this.props;
        const classes = classNames(
            'EventItem',
            {'EventItem-selected': isSelected}
        );

        return (
            <div className={classes}>
                <div className="date-time-table">
                    <div className="date-time-column">
                        <label htmlFor="date-start-date">Start Date</label>
                        <div className="date-start-date">07/09/2019</div>
                    </div>
                    <div className="date-time-column">
                        <label htmlFor="date-end-date">End Date</label>
                        <div className="date-end-date">07/20/2019</div>
                    </div>
                </div>
                <div className="EventItem-email">
                    <div className="EmailItem">
                        <div className="EmailItem-firstname">Mike</div>
                        <div className="EmailItem-lastname">Ford</div>
                        <div className="EmailItem-email">mike@mikefordweb.com</div>
                    </div>
                    
                    <div className="EmailItem">
                        <div className="EmailItem-firstname">Mike</div>
                        <div className="EmailItem-lastname">Ford</div>
                        <div className="EmailItem-email">floyd1985@hotmail</div>
                    </div>
                    <div className="EmailItem">
                        <div className="EmailItem-firstname">Megan</div>
                        <div className="EmailItem-lastname">Ford</div>
                        <div className="EmailItem-email">meggin19@hotmail.com</div>
                    </div>
                </div>
            </div>
        );
    }
}
