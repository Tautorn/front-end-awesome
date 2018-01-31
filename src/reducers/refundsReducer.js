let initialState = {
    isLoading: false,
    isEmpty: false,
    isError: false,
    data: [],
    message: null
};

export function refunds(state = initialState, action){
    switch(action.type){
        case 'FETCH_REFUNDS':
            return {
                ...state,
                isLoading: true,
                isEmpty: false,
                isError: false
            }
        case 'RECEIVE_REFUNDS':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: action.payload
            }
        case 'STORE_REFUNDS':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: [...state.data, action.payload],
                message: null
            }
        case 'FETCH_REFUNDS_NO_DATA':
            return {
                ...state,
                isLoading: false,
                isEmpty: true,
                isError: false,
                data: null,
                message: action.message
            }
        case 'FETCH_REFUNDS_ERROR':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: true,
                data: null,
                message: action.message
            }
        case 'UPDATED_STATUS':
            return {
                ...state,
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: [...state.data]
            }
        default:
            return {...state};
    }
}