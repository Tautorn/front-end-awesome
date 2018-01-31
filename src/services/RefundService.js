import axios from 'axios';
import {fetchRefunds, receiveRefunds, storeRefunds, updatedStatus} from "../actions/refundActions";
import {REFUNDS} from '../constants/APIConstants'

export default class RefundService{

    static fetchRefunds(){
        return dispatch => {
            dispatch(fetchRefunds());
            axios.get(REFUNDS)
                .then((response)=>{
                    dispatch(receiveRefunds(response.data));
                });
        }
    }

    //TODO: Maybe reorganize reducers?
    static justLoad(){
        return dispatch =>{
            dispatch(fetchRefunds());
        }
    }

    static updateStatus(status, id){
        return axios.patch(`${REFUNDS}/${id}`, {status})
    }

    static storeRefunds(refund){
        return dispatch => {
            dispatch(fetchRefunds());
            axios.post(REFUNDS, refund)
                .then(response => {
                    dispatch(storeRefunds(response.data));
                })
                .catch(error => {

                });
        }
    }

}