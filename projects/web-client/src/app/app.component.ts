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
import { AnalyticsService, LoggerService } from '@pulsar/monitoring';

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
  constructor( private store: Store<State>, private analyticsService: AnalyticsService, private logger: LoggerService) {
    this.pulsar$ = this.store.pipe(select('pulsar'));
    this.analyticsService.registerEvent('sample', 'test');
    this.logger.log('Este es mi primer mensaje desde Pulsar');
  }

  dispatch() {
    this.store.dispatch( new PulsarAction() );
  }

}
