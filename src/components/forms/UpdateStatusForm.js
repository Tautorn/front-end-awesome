import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {ABERTO, APROVADO, REEMBOLSADO, NEGADO} from '../../constants/StatusConstants'

class UpdateStatusForm extends Component{


}

export default reduxForm({
    form: 'updateStatus'
})(UpdateStatusForm)