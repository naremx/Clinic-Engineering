export const DatePickerAction = (chosenDate) => {
    return {
        type: 'DATA_DATETIME',
        payload: chosenDate
    };
}