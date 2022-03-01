import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutWindowComponent } from './out-window.component';

describe('OutWindowComponent', () => {
  let component: OutWindowComponent;
  let fixture: ComponentFixture<OutWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
