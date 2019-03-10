/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Third party imports
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

// App imports
import { environment } from '../../environments/environment';
import { ActionType } from './actions';
import { pulsarReducer } from './reducers';

/* ––
 * –––– State declaration
 * –––––––––––––––––––––––––––––––––– */
export interface State {
  pulsar: number;
}

/* ––
 * –––– Reducers declaration
 * –––––––––––––––––––––––––––––––––– */

export const pulsarReducers: ActionReducerMap<State> = {
  pulsar: pulsarReducer
};

/* ––
 * –––– Metareducers declaration
 * –––––––––––––––––––––––––––––––––– */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
export { PulsarAction } from './actions';

