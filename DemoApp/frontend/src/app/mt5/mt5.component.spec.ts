import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt5Component } from './mt5.component';

describe('Mt5Component', () => {
  let component: Mt5Component;
  let fixture: ComponentFixture<Mt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mt5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
