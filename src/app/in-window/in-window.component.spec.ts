import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InWindowComponent } from './in-window.component';

describe('InWindowComponent', () => {
  let component: InWindowComponent;
  let fixture: ComponentFixture<InWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
