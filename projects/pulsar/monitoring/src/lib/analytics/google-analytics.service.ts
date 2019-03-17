/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { Injectable, Inject } from '@angular/core';

// App imports
import { MonitoringConfig, AnalyticsProvider } from '../models';
import { MonitoringConfigToken } from '../monitoring.tokens';
import { AnalyticsService } from './analytics.service';

/* ––
 * –––– Service declaration
 * –––––––––––––––––––––––––––––––––– */
@Injectable()
export class GoogleAnalyticsService implements AnalyticsProvider {

  /* –– Properties
   * –––––––––––––––––––––––––––––––––– */
  isAnalyticsEnabled: boolean;
  isTagManager: boolean;
  analyticsSource: (...args) => void;

  /* –– Constructor
   * –––––––––––––––––––––––––––––––––– */
  constructor( @Inject(MonitoringConfigToken) private monitoringConfig: MonitoringConfig) {
    this.isAnalyticsEnabled = this.isSourceAvailable();

    if ( this.isAnalyticsEnabled ) {
      this.isTagManager = !!((window as any).gtag);
      this.analyticsSource = this.isTagManager && ((window as any).gtag) || ((window as any).ga);

    } else if ( this.monitoringConfig.debug ) {
      console.warn('Analytics | Setup was not provided. No data will be registered.');
    }
  }

  registerPageView(url: string) {
    if ( this.isAnalyticsEnabled ) {
      if ( this.isTagManager ) {
        this.analyticsSource('config', this.monitoringConfig.analytics.trackingID, { page_path: url });
      } else {
        this.analyticsSource('set', 'page', url);
        this.analyticsSource('send', 'pageview');
      }

    } else if ( this.monitoringConfig.debug ) {
      console.warn('Analytics | Setup was not provided. page view will not be sent.' );
    }
  }

  registerEvent(action: string, category: string, value?: any, label?: string) {
    if ( this.isAnalyticsEnabled ) {
      if ( this.isTagManager ) {
        this.analyticsSource('event', action, {
          event_category: category || 'General',
          event_label: label || undefined,
          value: value || undefined
        });
      } else {
        this.analyticsSource('send', 'event', {
          eventAction: action,
          eventCategory: category || 'General',
          eventLabel: label || undefined,
          eventValue: value || undefined
        });
      }

    } else if ( this.monitoringConfig.debug ) {
      console.warn('Analytics | Setup was not provided. Events will not be sent.' );
    }
  }

  /* –– Helper methods
   * –––––––––––––––––––––––––––––––––– */
  isSourceAvailable() {
    return !!(
      this.monitoringConfig.analytics &&
      this.monitoringConfig.analytics.trackingID &&
      ((window as any).gtag || (window as any).ga)
    );
  }
}
