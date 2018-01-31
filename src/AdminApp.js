import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './components/Header'
import RefundCards from './components/RefundCards'
import Loading from './components/Loading'
import RefundService from './services/RefundService'
import AccountsService from './services/AccountsService'
import './css/App.css'

class AdminApp extends Component {

    componentWillMount() {
        this.props.fetch()
    }

    updateStatus = ({status, id}) => {
        const {props} = this
        props.update_status(status, id)
    }

    render() {
        const {props, updateStatus} = this
        const {data, isLoading} = props.refunds
        return (
            <Fragment>
                <Header/>
                <div className="container principal-container">
                    <div className="content">
                        <h1 className='title'>Reembolsos</h1>
                        <div className='container refunds-container'>
                            {isLoading ? <Loading/> : <RefundCards refunds={data} isAdmin={true} updateStatus={updateStatus}/>}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
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
        fetch_accounts: () => {
            dispatch(AccountsService.fetchAccounts())
        },
        update_status: (status, id) => {
            dispatch(RefundService.justLoad())
            RefundService.updateStatus(status, id).then(()=>{
                dispatch(RefundService.fetchRefunds())
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminApp)