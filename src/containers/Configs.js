import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../components/Loading'
import ConfigsService from '../services/ConfigsService'
import ConfigsForm from '../components/forms/ConfigsForm'

class Configs extends Component {

    componentDidMount() {
        //this.props.fetch();
    }

    update = values => {
        this.props.update(values)
    }

    render() {
        const {props, update} = this
        return props.isLoading ? <Loading/> : <ConfigsForm initialValues={props.configs.data} onSubmit={update}/>
    }
}

const
    mapStateToProps = state => {
        return {
            configs: state.configs
        }
    }

const
    mapDispatchToProps = dispatch => {
        return {
            fetch: () => {
                dispatch(ConfigsService.fetchConfigs())
            },
            update: config => {
                dispatch(ConfigsService.updateConfigs(config))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Configs)