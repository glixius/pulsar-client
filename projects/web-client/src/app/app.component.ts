/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { Component } from '@angular/core';

// Third party imports
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

// App imports
import { State } from './store';
import { PulsarAction } from './store/actions';

/* ––
 * –––– Component declaration
 * –––––––––––––––––––––––––––––––––– */
@Component({
  selector: 'pul-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* –– Properties
   * –––––––––––––––––––––––––––––––––– */
  pulsar$: Observable<number>;

  /* –– Constructor
   * –––––––––––––––––––––––––––––––––– */
  constructor( private store: Store<State>) {
    this.pulsar$ = this.store.pipe(select('pulsar'));
  }

  dispatch() {
    this.store.dispatch( new PulsarAction() );
  }

}
