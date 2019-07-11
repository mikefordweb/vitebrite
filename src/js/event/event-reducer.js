import {EVENT_UPDATE_SELECTED} from './event-actions';

const initialState = {
    selected: null
};

export default function event(state = initialState, {type, payload}) {
    switch (type) {
        case EVENT_UPDATE_SELECTED: {
            return {
                ...state,
                selected: payload || null
            };
        }

        default:
            return state;
    }
}
