/* eslint-disable react/jsx-no-bind */
import {hot} from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    Switch
} from 'react-router-dom';
import Checkout from 'checkout/Checkout';
import Confirmation from 'confirmation/Confirmation';
import Search from 'search/Search';

const App = ({
    events
}) => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return <Search events={events} />;
                }}
            />
            <Route
                path="/checkout"
                component={Checkout}
            />
            <Route
                path="/confirmation"
                component={Confirmation}
            />
        </Switch>
    );
};

App.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default hot(App);
