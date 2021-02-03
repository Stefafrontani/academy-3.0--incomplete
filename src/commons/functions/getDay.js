import { DAYS } from "../constants";

function getDay(offset) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);
    return DAYS[currentDate.getDay()];
}

export { getDay };
