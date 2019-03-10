/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform impotrs
import { TestBed } from '@angular/core/testing';

// App imports
import { SessionService } from './session.service';

/* ––
 * –––– Test declarations
 * –––––––––––––––––––––––––––––––––– */
describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });
});
