import React from 'react'

const CardTitle = props => (
    <div className='card__title' {...props}>
        {props.children}
    </div>
)

export default CardTitle