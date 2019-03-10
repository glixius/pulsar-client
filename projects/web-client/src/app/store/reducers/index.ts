/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Third party imports
import { Action } from '@ngrx/store';

// App imports
import { ActionType } from '../actions';

/* ––
 * –––– State declaration
 * –––––––––––––––––––––––––––––––––– */
export const initialState = 0;

/* ––
 * –––– Reducer declaration
 * –––––––––––––––––––––––––––––––––– */
export function pulsarReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.PulsarAction:
      return state + 1;
    default:
      return state;
  }
}
