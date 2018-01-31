import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Loading from '../components/Loading'
import Card from '../components/Card/index'
import CardTitle from '../components/Card/CardTitle'
import CardData from '../components/Card/CardData'
import AccountsService from '../services/AccountsService'
import BankingForm from '../components/forms/BankingForm'

class Banking extends Component {

    componentDidMount() {
        this.props.fetch()
        this.props.fetch_banks()
    }

    storeAccounts = values => {
        return this.props.storeAccounts(values)
    }

    //TODO: Create a high order component to improve this repeated code
    renderCards(account) {
        return (
            <Card key={`banking_${account.id}`}>
                <CardTitle>
                    {account.bank_code}
                </CardTitle>
                <CardData>
                    <ul className="card__unordered-list">
                        <li className="card__list-item"><b>Agencia:</b> {account.bank_agency}</li>
                        <li className="card__list-item"><b>Conta:</b> {account.bank_account}</li>
                        <li className="card__list-item"><b>Comentários:</b> {account.comment}</li>
                    </ul>
                </CardData>
            </Card>
        )
    }

    banksToSelectData(banks = []) {
        return banks.map((bank) => ({value: bank.code, label: bank.name}))
    }

    render() {

        const banks = this.banksToSelectData(this.props.banks)
        const {data, isLoading} = this.props.accounts

        return (
            <Fragment>
                <BankingForm banks={banks} onSubmit={this.storeAccounts}/>
                <h1 className='title'>Suas contas</h1>
                <div className='container banks-container'>
                    {isLoading ? <Loading/> : data.map(account => this.renderCards(account))}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        banks: state.accounts.banks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => {
            dispatch(AccountsService.fetchAccounts())
        },
        storeAccounts: account => {
            dispatch(AccountsService.storeAccounts(account))
        },
        fetch_banks: () => {
            dispatch(AccountsService.fetchBanks())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking)