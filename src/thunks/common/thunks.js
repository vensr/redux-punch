import {
    startLoading,
    stopLoading,
    displayMessage,
    clearDisplayMessage
} from "../../actions/common/actions";

export const startLoadingRequest = () => async dispatch => {
    dispatch(startLoading());
};

export const stopLoadingRequest = () => async dispatch => {
    dispatch(stopLoading());
};

export const displayMessageRequest = message => async dispatch => {
    dispatch(displayMessage(message));
};

export const clearDisplayMessageRequest = () => async dispatch => {
    dispatch(clearDisplayMessage());
};
