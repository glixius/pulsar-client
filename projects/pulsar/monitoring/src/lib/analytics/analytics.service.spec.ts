/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { TestBed } from '@angular/core/testing';

// App imports
import { AnalyticsService } from './analytics.service';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('AnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsService = TestBed.get(AnalyticsService);
    expect(service).toBeTruthy();
  });
});
