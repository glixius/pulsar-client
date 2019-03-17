/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { Injectable, Inject } from '@angular/core';

// Third-party imports
import { LogglyService } from 'ngx-loggly-logger';

// App imports
import { MonitoringConfig } from '../models';
import { MonitoringConfigToken } from '../monitoring.tokens';

/* ––
 * –––– Service declaration
 * –––––––––––––––––––––––––––––––––– */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  /* –– Constructor
   * –––––––––––––––––––––––––––––––––– */
  constructor(
    @Inject(MonitoringConfigToken) private monitoringConfig: MonitoringConfig,
    private loggly: LogglyService,
  ) {

    this.loggly.push({
      logglyKey: monitoringConfig.logging.key,
      tag : monitoringConfig.logging.tag,
      sendConsoleErrors : true,
    });
  }

  log(message: string) {
    this.loggly.push({ level: 'log', message });
  }

  error(message: string) {
    this.loggly.push({ level: 'error', message });
  }
}
