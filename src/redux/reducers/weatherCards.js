import {
    WEATHERCARDS_INITIAL_STATE,
    SET_WEATHERCARDS,
    IS_FETCHING,
    HANDLE_ERROR
} from "../../commons/constants";

const weatherCards = (state = WEATHERCARDS_INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_WEATHERCARDS:
          return Object.assign({}, state, {
              weatherCards: action.payload
          });
        case IS_FETCHING:
          return Object.assign({}, state, {
            isFetching: action.payload
        });
        case HANDLE_ERROR:
          return Object.assign({}, state, {
            handleError: {
              status: action.payload.status,
              message: action.payload.message,
            }
        });
        default:
            return state;
    }
};

export default weatherCards;
