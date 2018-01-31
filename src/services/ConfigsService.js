import axios from 'axios';
import {fetchConfigs, receiveConfigs, updateConfigs} from '../actions/configsActions';
import {USERS} from '../constants/APIConstants'

export default class ConfigsService{

    static fetchConfigs(){
        return dispatch => {
            dispatch(fetchConfigs());
            axios.get(USERS)
                .then(configs => {
                    dispatch(receiveConfigs(configs.data));
                })
        }
    }

    static updateConfigs(configs, userId){
        return dispatch => {
            axios.put(`${USERS}/${userId}`)
                .then(configs => {
                    dispatch(updateConfigs(configs.data));
                })
        }
    }

}