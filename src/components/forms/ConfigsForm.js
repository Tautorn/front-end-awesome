import React from 'react'
import {Field, reduxForm} from 'redux-form'



class ConfigsForm extends React.Component{

    render(){
        const {handleSubmit, configs} = this.props
        return(
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__group'>
                    <label htmlFor='name' className='form__label'>
                        Nome
                    </label>
                    <Field component='input' name='name' id='name' type='text' className='form__input'/>
                </div>
                <div className='form__group'>
                    <label htmlFor='email' className='form__label'>
                        Email
                    </label>
                    <Field component='input' name='email' id='email' type='email' className='form__input'/>
                </div>
                <div className='form__group'>
                    <label htmlFor='rg' className='form__label'>
                        RG
                    </label>
                    <Field component='input' name='rg' id='rg' type='text' className='form__input'/>
                </div>
                <div className='form__group'>
                    <label htmlFor='cpf' className='form__label'>
                        CPF
                    </label>
                    <Field component='input' name='cpf' id='cpf' type='text' className='form__input'/>
                </div>
                <div className='form__group'>
                    <label htmlFor='password' className='form__label'>
                        Senha
                    </label>
                    <Field component='input' name='password' id='password' type='password' className='form__input'/>
                </div>
                <button className='button'>Salvar</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'configs'
})(ConfigsForm)