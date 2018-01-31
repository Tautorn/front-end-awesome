import React from 'react'
import {ABERTO, APROVADO, REEMBOLSADO, NEGADO} from '../constants/StatusConstants'


const createBadgeClassName = status => {
    switch(status){
        case ABERTO:
            return 'badge--pending'
        case APROVADO:
            return 'badge--success'
        case REEMBOLSADO:
            return 'badge--neutral'
        case NEGADO:
            return 'badge--danger'
        default:
            return ''
    }
}

const StatusBadge = ({status}) => {
    return(
        <div className={`badge ${createBadgeClassName(status)}`}>
            {status}
        </div>
    )
}

export default StatusBadge