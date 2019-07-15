import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import axios from 'axios';
import createStore, {getHistory} from 'store/store';
import App from './App';

export default class Root extends Component {
    state = {
        isLoading: true,
        events: []
    };

    componentDidMount() {
        this._loadEvents();
        this._loadUserEvents();
    }

    async _loadEvents() {
        try {
            const {
                data
            } = await axios.get('http://localhost:8000/api/events');

            this.setState({
                isLoading: false,
                events: data
            });
        } catch (error) {
            console.log('Error loading event data: ', error); // eslint-disable-line no-console
        }
    }

    async _loadUserEvents() {
        try {
            const {
                data
            } = await axios.get('http://localhost:3001/api/getData');

            console.log(data);

            this.setState({
                userEvents: data
            });
        } catch (error) {
            console.log('Error loading event data: ', error); // eslint-disable-line no-console
        }
    }

    render() {
        const {
            isLoading,
            events,
            userEvents
        } = this.state;

        if (isLoading) {
            return (
                <div className="Root-loader">
                    Loading...
                </div>
            );
        }

        return (
            <div className="Root">
                <Provider store={createStore()}>
                    <ConnectedRouter history={getHistory()}>
                        <App 
                            events={events}
                            userEvents={userEvents}
                        />
                    </ConnectedRouter>
                </Provider>
            </div>
        );
    }
}
