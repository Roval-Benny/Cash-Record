import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutButtonComponent } from './in-out-button.component';

describe('InOutButtonComponent', () => {
  let component: InOutButtonComponent;
  let fixture: ComponentFixture<InOutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
