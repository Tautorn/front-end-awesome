import React from 'react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__group'>
                <label htmlFor='email'>
                    Email
                </label>
                <Field name='username' id='username' type='text' component='input' className='form__input'/>
            </div>
            <div className='form__group'>
                <label htmlFor='password'>
                    Password
                </label>
                <Field name='password' id='password' type='password' component='input' className='form__input'/>
            </div>
            <div>
                <button className='button'>Enviar</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form:'login'
})(LoginForm)