export const EVENT_UPDATE_SELECTED = 'EVENT_UPDATE_SELECTED';
export const EVENT_PURCHASE = 'EVENT_PURCHASE';

export const updateSelected = event => {
    return {
        type: EVENT_UPDATE_SELECTED,
        payload: event
    };
};

export const purchase = data => {
    return {
        type: EVENT_PURCHASE,
        payload: data
    };
};
