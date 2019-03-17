
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// App imports
import { AnalyticsProviders } from '../monitoring.constants';

/* ––
 * –––– Interface definition
 * –––––––––––––––––––––––––––––––––– */
export interface MonitoringConfig {
  analytics: { provider: AnalyticsProviders, trackingID: string };
  debug: boolean;
}
