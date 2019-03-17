/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

// App Imports
import { MonitoringConfig } from './models';
import { AnalyticsService, GoogleAnalyticsService } from './analytics';
import { MonitoringConfigToken } from './monitoring.tokens';
import { AnalyticsProviders } from './monitoring.constants';

/* ––
 * –––– Providers map declaration
 * –––––––––––––––––––––––––––––––––– */
export const providers = new Map([
  [AnalyticsProviders.Google, GoogleAnalyticsService]
]);

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class MonitoringModule {
  public static forRoot(monitoringConfig: MonitoringConfig): ModuleWithProviders {
    const Provider = providers.get(monitoringConfig.analytics.provider) || AnalyticsService;

    return {
      ngModule: MonitoringModule,
      providers: [
        { provide: AnalyticsService, useClass: Provider },
        { provide: MonitoringConfigToken, useValue: monitoringConfig }
      ]
    };
  }
}
