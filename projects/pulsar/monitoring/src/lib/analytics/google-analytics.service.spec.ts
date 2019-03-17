/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { TestBed } from '@angular/core/testing';

// App imports
import { GoogleAnalyticsService } from './google-analytics.service';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('GoogleAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalyticsService = TestBed.get(GoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
