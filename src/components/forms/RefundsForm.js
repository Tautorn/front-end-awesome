import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {createSelectOptions} from '../../utils/FormUtils'
import {floatToRealTwo} from '../../utils/FormatterUtils'


const RefundsForm = props => {
    const {handleSubmit, accounts} = props
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className="form__group">
                <label htmlFor='title' className='form__label'>
                    O que foi gasto?
                </label>
                <Field component='input' name='title' id='title' type='text' className='form__input' required/>
            </div>
            <div className="form__group">
                <label htmlFor='value' className='form__label'>
                    Valor
                </label>
                <Field component='input' name='value' id='value' type='text' className='form__input' required normalize={floatToRealTwo}/>
            </div>
            <div className="form__group">
                <label htmlFor='account_id' className='form__label'>
                    Conta
                </label>
                <Field component='select' name='account_id' id='account_id' className='form__input' required>
                    <option>Escolha a conta para depósito...</option>
                    {createSelectOptions(accounts)}
                </Field>
            </div>
            <div className="form__group">
                <label htmlFor='fiscal_note' className='form__label'>
                    Nota Fiscal
                </label>
                <Field component='input' name='fiscal_note' id='fiscal_note' type='file' className='form__input'/>
            </div>
            <div className="form__group">
                <label htmlFor='comment' className='form__label'>
                    Comentários
                </label>
                <Field component='textarea' name='comment' id='comment' type='text' className='form__textarea' required/>
            </div>
            <button type='submit' className='button'>Salvar</button>
        </form>
    );
}

export default reduxForm({
    form: 'refunds'
})(RefundsForm)