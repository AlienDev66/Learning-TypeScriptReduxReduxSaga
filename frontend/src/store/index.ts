/**Configurando o estado da nossa aplicação de forma global */
import { createStore, Store } from 'redux';

import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState{
  repositories: RepositoriesState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;