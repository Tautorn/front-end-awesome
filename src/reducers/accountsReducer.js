let initialState = {
    isLoading: false,
    isEmpty: false,
    isError: false,
    data: [],
    message: null
};

export function accounts(state = initialState, action){
    switch(action.type){
        case 'FETCH_ACCOUNTS':
            return { ...state, isLoading: true }
        case 'RECEIVE_ACCOUNTS':
            return { ...state, data: action.payload, isLoading: false, isEmpty: false, isError: false }
        case 'RECEIVE_BANKS':
            return { ...state, banks: action.payload, isLoading: false, isEmpty: false, isError: false }
        case 'STORE_ACCOUNTS':
            return { ...state, data: [...state.data, action.payload], isEmpty: false, isError: false }
        case 'FETCH_ACCOUNTS_NO_DATA':
            return {
                ...state,
                isLoading: false,
                isEmpty: true,
                data: null,
                message: action.message
            }
        case 'FETCH_ACCOUNTS_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: null,
                message: action.message
            }
        default:
            return state;
    }
}