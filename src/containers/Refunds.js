import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Loading from '../components/Loading'
import RefundsForm from '../components/forms/RefundsForm'
import RefundService from '../services/RefundService'
import AccountsService from '../services/AccountsService'
import {ABERTO} from '../constants/StatusConstants'
import RefundCards from '../components/RefundCards'

class Refunds extends Component {

    componentWillMount() {
        this.props.fetch()
        this.props.fetch_accounts()
    }

    storeRefunds = values => {
        this.props.storeRefunds({...values, status: ABERTO})
    }

    accountsToSelectData(accounts) {
        return accounts.map(account => ({label: `${account.bank_agency} / ${account.bank_account}`, value: account.id}))
    }

    render() {
        const {props, storeRefunds, accountsToSelectData} = this
        const {data, isLoading} = props.refunds
        const accounts = accountsToSelectData(props.accounts.data)

        return (
            <Fragment>
                <RefundsForm accounts={accounts} onSubmit={storeRefunds}/>
                <h1 className='title'>Seus Reembolsos</h1>
                <div className='container refunds-container'>
                    {isLoading ? <Loading/> : <RefundCards refunds={data}/>}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        refunds: state.refunds,
        accounts: state.accounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => {
            dispatch(RefundService.fetchRefunds())
        },
        storeRefunds: refund => {
            dispatch(RefundService.storeRefunds(refund))
        },
        fetch_accounts: () => {
            dispatch(AccountsService.fetchAccounts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refunds)