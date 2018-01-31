import React, {Component} from 'react'
import Card from './Card'
import CardTitle from '../components/Card/CardTitle'
import CardData from '../components/Card/CardData'
import StatusBadge from '../components/StatusBadge'
import {floatToReal} from '../utils/FormatterUtils'
import {ABERTO, APROVADO, REEMBOLSADO, NEGADO} from '../constants/StatusConstants'
import AdminOptions from "./AdminOptions"

export default class RefundCards extends Component{

    updateStatus = (status, id) => {
        const {props} = this
        props.updateStatus(status, id);
    }

    createCards(refund) {
        const {props} = this;
        const statusArray = [
            ABERTO,
            APROVADO,
            REEMBOLSADO,
            NEGADO
        ]
        return (
            <Card key={`card_${refund.id}`}>
                <CardTitle>
                    {refund.title}
                </CardTitle>
                <CardData>
                    <ul className="card__unordered-list">
                        <li className="card__list-item">
                            <b>Valor:</b> {floatToReal(refund.value)}
                        </li>
                        <li className="card__list-item">
                            <b>Comentário:</b> {refund.comment}
                        </li>
                        <li className="card__list-item">
                            <b>Conta:</b> {refund.account_id}
                        </li>
                        <li className="card__list-item">
                            <StatusBadge status={refund.status} />
                        </li>
                    </ul>
                    {
                        props.isAdmin === true ? <AdminOptions options={statusArray} updateStatus={props.updateStatus} refundId={refund.id}/> : ''
                    }
                </CardData>
            </Card>
        )
    }

    renderRefunds(refunds){
        return refunds.map(refund => this.createCards(refund))
    }

    render(){
        const {refunds} = this.props;
        return this.renderRefunds(refunds);
    }
}