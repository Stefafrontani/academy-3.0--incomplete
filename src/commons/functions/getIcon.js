import { RAIN, CLOUD, SUN, WARNING } from "../constants";

function getIcon(message) {
    if (
        message.toLowerCase().includes("precipitacion") ||
        message.toLowerCase().includes("tormenta") ||
        message.toLowerCase().includes("lluvia") ||
        message.toLowerCase().includes("chaparron")
    )
        return RAIN;
    if (
        message.toLowerCase().includes("nublado") ||
        message.toLowerCase().includes("nubosidad")
    )
        return CLOUD;
    if (
        message.toLowerCase().includes("soleado") ||
        message.toLowerCase().includes("despejado")
    )
        return SUN;
    return WARNING;
}

export { getIcon };
