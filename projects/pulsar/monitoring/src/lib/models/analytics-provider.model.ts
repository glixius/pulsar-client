/* ––
 * –––– Interface declaration
 * –––––––––––––––––––––––––––––––––– */
export interface AnalyticsProvider {
  registerPageView(path: string): void;
  registerEvent(action: string, category: string, value?: any, label?: string): void;
  isSourceAvailable(): boolean;
}
