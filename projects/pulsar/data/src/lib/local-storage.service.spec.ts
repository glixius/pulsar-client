/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { TestBed } from '@angular/core/testing';

// App imports
import { LocalStorageService } from './local-storage.service';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });
});
