import axios from 'axios';
import {ACCOUNTS, BANKS} from '../constants/APIConstants'
import {
    fetchAccounts,
    receiveAccounts,
    receiveBanks,
    storeAccounts
} from '../actions/accountsActions';

export default class AccountsService{

    static fetchAccounts(){
        return dispatch => {
            dispatch(fetchAccounts());
            axios.get(ACCOUNTS)
                .then(response => {
                    dispatch(receiveAccounts(response.data));
                })
        }
    }

    static storeAccounts(account){
        return dispatch => {
            dispatch(fetchAccounts());
            axios.post(ACCOUNTS, account)
                .then(response => {
                    dispatch(storeAccounts(response.data));
                })
                .catch(error => {

                });
        }
    }

    static fetchBanks(){
        return dispatch => {
            axios.get(BANKS)
                .then(response => {
                    dispatch(receiveBanks(response.data));
                })
                .catch(error => {

                })
        }
    }
}