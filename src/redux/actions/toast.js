import {
    TOAST_SHOW,
    TOAST_HIDE,
    FETCH_ALERTS,
    SET_ALERTS
} from "../../commons/constants";

const toastShow = payload => ({ type: TOAST_SHOW, payload: payload });
const toastHide = () => ({ type: TOAST_HIDE });
const setAlerts = payload => ({ type: SET_ALERTS, payload: payload });
const getAlerts = () => dispatch => {
    fetch(FETCH_ALERTS)
        .then(function(res) {
            if (!res.ok) {
                throw new Error("Error fetching alerts");
            }
            return res.json();
        })
        .then(res => {
            dispatch(
                setAlerts(
                    res.map(alert => {
                        return `${alert.title}: ${Object.values(alert.zones).reduce((acc, actual) =>acc === "" ? actual : acc + ", " + actual,""
                        )}`;
                    })
                )
            );
        })
        .catch(error => {
            throw error;
        });
};

export { toastShow, toastHide, getAlerts };
