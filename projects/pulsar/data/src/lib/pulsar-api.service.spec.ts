/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { TestBed } from '@angular/core/testing';

// App imports
import { PulsarAPIService } from './pulsar-api.service';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('PulsarAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PulsarAPIService = TestBed.get(PulsarAPIService);
    expect(service).toBeTruthy();
  });
});
