export const fetchAccounts = () => {
    return {type: 'FETCH_ACCOUNTS'}
}

export const receiveAccounts = payload => {
    return {type: 'RECEIVE_ACCOUNTS', payload}
}

export const receiveBanks = payload => {
    return {type: 'RECEIVE_BANKS', payload}
}

export const storeAccounts = payload => {
    return {type: 'STORE_ACCOUNTS', payload}
}