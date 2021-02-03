import { WARNING } from "./";

const TOAST_SHOW = "TOAST_SHOW";
const TOAST_HIDE = "TOAST_HIDE";
const GET_ALERTS = "GET_ALERTS";
const SET_ALERTS = "SET_ALERTS";
const TOAST_INITIAL_STATE = {
    toastShow: false,
    toastIcon: WARNING,
    toastMessage: "",
    alerts: []
};

export { TOAST_SHOW, TOAST_HIDE, GET_ALERTS, SET_ALERTS, TOAST_INITIAL_STATE };
