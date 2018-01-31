import React, {Component} from 'react'
import {ABERTO, APROVADO, NEGADO, REEMBOLSADO} from "../constants/StatusConstants"

class AdminOptions extends Component{

    constructor(){
        super();
        this.state = {
            status: '',
            id: ''
        }
    }

    sendStatus = () => {
        const {props, state} = this
        props.updateStatus(state);
    }

    handleChange = event => {
        const {refundId} = this.props
        this.setState({status: event.target.value, id: refundId})
    }


    createOptions(){
        const statusArray = [
            ABERTO,
            APROVADO,
            REEMBOLSADO,
            NEGADO
        ]
        return statusArray.map(status => {
            return <option value={status} key={`option_${status}`}>{status}</option>
        })
    }


    render(){
        return(
            <form className='form'>
                <div className="form__group">
                    <label htmlFor='title' className='form__label'>
                        Escolha o novo status
                    </label>
                    <select name='status' id='status' className='form__input' onChange={this.handleChange} required>
                        {this.createOptions()}
                    </select>
                </div>
                <div className="form__group">
                    <a className='button' onClick={this.sendStatus}>Salvar</a>
                </div>
            </form>
        )
    }
}
export default AdminOptions;