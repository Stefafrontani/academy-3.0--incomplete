import {
    FETCH_WEATHER,
    SET_PROVINCES,
    IS_FETCHING,
    WEATHER_FETCH_DELAY
} from "../../commons/constants";

const setProvinces = payload => ({
    type: SET_PROVINCES,
    payload: payload
});
const isFetching = payload => ({
    type: IS_FETCHING,
    payload: payload
});
const getProvinces = () => dispatch => {
    dispatch(isFetching(true));
    fetch(FETCH_WEATHER)
        .then(response => response.json())
        .then(response => {
            const provinces = response.reduce((accumulated, actual) => {
                if (accumulated.some(el => el.province === actual.province)) {
                    const modifiedProvince = accumulated.find(
                        el => el.province === actual.province
                    );
                    modifiedProvince.prom += 1;
                    modifiedProvince.temp += actual.weather.temp;
                    modifiedProvince.humidity += actual.weather.humidity;
                    modifiedProvince.thermalSensation += actual.weather.st;
                    modifiedProvince.visibility += actual.weather.visibility;
                    modifiedProvince.windSpeed += actual.weather.wind_speed;
                    modifiedProvince.pressure += actual.weather.pressure;
                    return [
                        ...accumulated.filter(
                            el => el.province !== actual.province
                        ),
                        modifiedProvince
                    ];
                } else {
                    const newProvince = {
                        prom: 1,
                        province: actual.province,
                        temp: actual.weather.temp,
                        humidity: actual.weather.humidity,
                        thermalSensation: actual.weather.st,
                        visibility: actual.weather.visibility,
                        windSpeed: actual.weather.wind_speed,
                        pressure: actual.weather.pressure
                    };
                    return [...accumulated, newProvince];
                }
            }, []);
            dispatch(
                setProvinces(
                    provinces.map(el => {
                        return {
                            province: el.province,
                            temp: el.temp / el.prom,
                            humidity: el.humidity / el.prom,
                            thermalSensation: el.thermalSensation / el.prom,
                            visibility: el.visibility / el.prom,
                            windSpeed: el.windSpeed / el.prom,
                            pressure: el.pressure / el.prom
                        };
                    })
                )
            );

            setTimeout(() => dispatch(isFetching(false)), WEATHER_FETCH_DELAY);
        })
        .catch(error => {
            dispatch(isFetching(false));
            throw error;
        });
};

export { getProvinces };
