import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {createSelectOptions} from '../../utils/FormUtils'

const BankingForm = props => {
    const {handleSubmit, banks} = props

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__group'>
                <label htmlFor='bank_code' className='form__label'>
                    Banco
                </label>
                <Field component='select' type='text' name='bank_code' id='bank_code' className='form__input' required>
                    <option>Escolha o banco...</option>
                    {createSelectOptions(banks)}
                </Field>
            </div>
            <div className='form__group'>
                <label htmlFor='bank_agency' className='form__label'>
                    Agencia
                </label>
                <Field component='input' type='text' name='bank_agency' id='bank_agency' className='form__input' required/>
            </div>
            <div className='form__group'>
                <label htmlFor='bank_account' className='form__label'>
                    Conta
                </label>
                <Field component='input' type='text' name='bank_account' id='bank_account' className='form__input' required/>
            </div>
            <div className='form__group'>
                <label htmlFor='comment' className='form__label'>
                    Comentários
                </label>
                <Field component='textarea' type='text' name='comment' id='comment' className='form__textarea' required/>
            </div>
            <button type="submit" className='button'>Salvar</button>
        </form>
    )
}

export default reduxForm({
    form: 'banking'
})(BankingForm)