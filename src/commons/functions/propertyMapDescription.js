function propertyMapToDescription(prop) {
    switch (prop) {
        case "Humedad":
            return "Promedio de humedad por provincia en %";
        case "Visibilidad":
            return "Promedio de visibilidad por provincia en %";
        case "Sensación Térmica":
            return "Promedio de sensación térmica por provincia en °C";
        case "Temperatura":
            return "Promedio de temperatura por provincia en °C";
        case "Presión":
            return "Promedio de presión por provincia en hPac";
        case "Velocidad del Viento":
            return "Promedio de velocidad del viento por provincia en km/h";
        default:
            break;
    }
}

export { propertyMapToDescription };
