const IS_FETCHING = "IS_FETCHING";
const HANDLE_ERROR = "HANDLE_ERROR";
const SET_WEATHERCARDS = "SET_WEATHERCARDS";
const WEATHERCARDS_INITIAL_STATE = {
    isFetching: false,
    handleError: {
        status: false,
        message: ""
    },
    weatherCards: []
};

export {
    WEATHERCARDS_INITIAL_STATE,
    SET_WEATHERCARDS,
    IS_FETCHING,
    HANDLE_ERROR
};
