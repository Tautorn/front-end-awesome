let initialState = {
    isLoading: false,
    isEmpty: false,
    isError: false,
    data: {},
    message: null
};

export function configs(state = initialState, action){
    switch(action.type){
        case 'FETCH_CONFIGS':
            return {
                ...state,
                isLoading: true,
                isEmpty: false,
                isError: false
            }
        case 'RECEIVE_CONFIGS':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: (action.payload.length > 0) ? action.payload[0] : action.payload,
                message: null
            }
        case 'UPDATE_CONFIGS':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: false,
                message: null
            }
        default:
            return state;
    }
}