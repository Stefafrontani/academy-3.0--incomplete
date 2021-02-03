import {
    PROVINCES_INITIAL_STATE,
    SET_PROVINCES,
    IS_FETCHING
} from "../../commons/constants";

const provinces = (state = PROVINCES_INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROVINCES:
            return Object.assign({}, state, {
                provinces: action.payload
            });
        case IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: action.payload
            });
        default:
            return state;
    }
};

export default provinces;
