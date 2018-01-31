import React from 'react'

const CardData = props => (
    <div className='card__data' {...props}>
        {props.children}
    </div>
)

export default CardData