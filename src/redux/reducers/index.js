import { combineReducers } from "redux";
import toast from "./toast.js";
import weatherCards from "./weatherCards.js";
import provinces from "./provinces.js";

export default combineReducers({
    toast,
    weatherCards,
    provinces
});
