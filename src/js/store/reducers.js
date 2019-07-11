import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import event from 'event/event-reducer';

export default history => combineReducers({
    event,
    router: connectRouter(history),
});
