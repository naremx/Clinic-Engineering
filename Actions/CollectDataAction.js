export const CollectDataAction = (val) => {
    console.log('OK')
    return {
        type: 'ADD_QUEUE',
        payload: val
    };
}
