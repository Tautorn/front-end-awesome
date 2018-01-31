export const fetchConfigs = () => {
    return {type: 'FETCH_CONFIGS'}
}

export const receiveConfigs = payload => {
    return {type: 'RECEIVE_CONFIGS', payload}
}

export const updateConfigs = payload => {
    return {type: 'UPDATE_CONFIGS', payload}
}