import React from 'react'

const Card = props => (
    <div className='card' {...props}>
        {props.children}
    </div>
)

export default Card