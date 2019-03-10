/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Third party imports
import { Action } from '@ngrx/store';

/* ––
 * –––– ActionType declaration
 * –––––––––––––––––––––––––––––––––– */
export enum ActionType {
  PulsarAction = '[Pulsar Component] Action'
}

/* ––
 * –––– Actions declaration
 * –––––––––––––––––––––––––––––––––– */
export class PulsarAction implements Action {
  readonly type = ActionType.PulsarAction;
}
