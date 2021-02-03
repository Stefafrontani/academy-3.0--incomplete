function getDate(offset) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);
    return currentDate.toLocaleDateString();
}

export { getDate };
