export const START_LOADING = "START_LOADING";

export const startLoading = () => ({
    type: START_LOADING
});

export const STOP_LOADING = "STOP_LOADING";

export const stopLoading = () => ({
    type: STOP_LOADING
});

export const DISPLAY_MESSAGE = "DISPLAY_MESSAGE";

export const displayMessage = message => ({
    type: DISPLAY_MESSAGE,
    payload: message
});

export const CLEAR_DISPLAY_MESSAGE = "CLEAR_DISPLAY_MESSAGE";

export const clearDisplayMessage = () => ({
    type: CLEAR_DISPLAY_MESSAGE
});
