/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { TestBed } from '@angular/core/testing';

// App imports
import { LoggerService } from './logger.service';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });
});
