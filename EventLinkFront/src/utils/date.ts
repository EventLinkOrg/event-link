const is_expired = (date: string): boolean => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    return currentDate > givenDate;
}

export { is_expired }