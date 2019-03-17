/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { InjectionToken } from '@angular/core';

// App imports
import { MonitoringConfig } from './models';

/* ––
 * –––– Injection token definition
 * –––––––––––––––––––––––––––––––––– */
export const MonitoringConfigToken = new InjectionToken<MonitoringConfig>('monitoringConfig');
