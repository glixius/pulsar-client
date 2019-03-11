/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// App imports
import { BandComponent } from './band.component';

/* ––
 * –––– Tests declaration
 * –––––––––––––––––––––––––––––––––– */
describe('BandComponent', () => {
  let component: BandComponent;
  let fixture: ComponentFixture<BandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
