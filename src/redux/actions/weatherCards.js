import {
    FETCH_DAY0,
    FETCH_DAY1,
    FETCH_DAY2,
    SET_WEATHERCARDS,
    IS_FETCHING,
    HANDLE_ERROR,
    FORECAST_FETCH_DELAY
} from "../../commons/constants";
import { getIcon, getDay, getDate } from "../../commons/functions";

const isFetching = payload => ({
    type: IS_FETCHING,
    payload: payload
});

const handleError = payload => ({
    type: HANDLE_ERROR,
    payload: payload
});

const setWeatherCards = payload => ({
    type: SET_WEATHERCARDS,
    payload: payload
});

const getWeatherCards = location => dispatch => {
    dispatch(isFetching(true));
    Promise.all(
        [FETCH_DAY0, FETCH_DAY1, FETCH_DAY2].map(el =>
            fetch(el).then(function(res) {
                if (!res.ok) {
                    throw new Error(`Error ${res.status} with endpoint ${el}`);
                }
                return res.json();
            })
        )
    )
        .then(function(response) {
            const weatherCards = response.map((currentDay, index) => {
                if (!currentDay.some(el => el.name === location)) return {};
                const {
                    morning_desc,
                    afternoon_desc,
                    morning_temp,
                    afternoon_temp
                } = currentDay.find(el => el.name === location).weather;
                return {
                    day: getDay(index),
                    date: getDate(index),
                    icon: getIcon(morning_desc + afternoon_desc),
                    tempMin: Math.min(morning_temp, afternoon_temp),
                    tempMax: Math.max(morning_temp, afternoon_temp),
                    morningDesc: morning_desc,
                    afternoonDesc: afternoon_desc
                };
            });
            setTimeout(() => {
                dispatch(isFetching(false));
            }, FORECAST_FETCH_DELAY);
            dispatch(handleError({ status: false, message: "" }));
            dispatch(setWeatherCards(weatherCards));
        })
        .catch(error => {
            dispatch(isFetching(false));
            dispatch(handleError({ status: true, message: error.message }));
        });
};

export { getWeatherCards };
