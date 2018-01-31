export const fetchRefunds = () => {
    return {type: 'FETCH_REFUNDS'}
}

export const receiveRefunds = payload => {
    return {type: 'RECEIVE_REFUNDS', payload}
}

export const storeRefunds = payload =>{
    return {type: 'STORE_REFUNDS', payload}
}
export const updatedStatus = payload =>{
    return {type: 'UPDATED_STATUS', payload}
}
