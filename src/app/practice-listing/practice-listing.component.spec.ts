import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeListingComponent } from './practice-listing.component';

describe('PracticeListingComponent', () => {
  let component: PracticeListingComponent;
  let fixture: ComponentFixture<PracticeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
