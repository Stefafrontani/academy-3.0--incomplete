import {
    TOAST_SHOW,
    TOAST_HIDE,
    TOAST_INITIAL_STATE,
    SET_ALERTS
} from "../../commons/constants";

const toast = (state = TOAST_INITIAL_STATE, action) => {
    switch (action.type) {
        case TOAST_SHOW:
            return Object.assign({}, state, {
              toastShow: true,
              toastMessage: action.payload.msg,
              toastIcon: action.payload.icon
            });
        case TOAST_HIDE:
            return Object.assign({}, state, {
                toastShow: false
            });
        case SET_ALERTS:
            return Object.assign({}, state, {
                alerts: action.payload
            });
        default:
            return state;
    }
};

export default toast;
