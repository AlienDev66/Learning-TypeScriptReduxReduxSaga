import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store'
import { Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'
import { bindActionCreators, Dispatch } from 'redux';

interface StateProps{
    repositories: Repository[]

}

interface DispatchProps{
    loadRequest(): void
}
interface OwnProps{

}

type Props = StateProps & DispatchProps
class RepositoryList extends Component<Props> {

    componentDidMount(){
        const { loadRequest } = this.props

        loadRequest()
    }

    render(){
        const { repositories } = this.props;
        return(
            <>
            <ul>
                { repositories.map(repository => repository.name) }
            </ul>
            </>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({

    repositories: state.repositories.data,

});

const mapDispatchToProps = (dispatch: Dispatch) =>
bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);