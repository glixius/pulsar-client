/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { Injectable, Inject } from '@angular/core';

// App imports
import { MonitoringConfig, AnalyticsProvider } from '../models';
import { MonitoringConfigToken } from '../monitoring.tokens';

/* ––
 * –––– Service declaration
 * –––––––––––––––––––––––––––––––––– */
@Injectable()
export class AnalyticsService implements AnalyticsProvider {

  /* –– Constructor
   * –––––––––––––––––––––––––––––––––– */
  constructor(@Inject(MonitoringConfigToken) private monitoringConfig: MonitoringConfig) {}

  /* –– Public API
   * –––––––––––––––––––––––––––––––––– */
  registerPageView(path: string) {}
  registerEvent(action: string, category: string, value?: any, label?: string) {}

  /* –– Helper methods
   * –––––––––––––––––––––––––––––––––– */
  isSourceAvailable() {
    return !!( this.monitoringConfig.analytics && this.monitoringConfig.analytics.trackingID );
  }
}
