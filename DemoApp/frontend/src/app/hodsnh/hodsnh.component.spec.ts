import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodsnhComponent } from './hodsnh.component';

describe('HodsnhComponent', () => {
  let component: HodsnhComponent;
  let fixture: ComponentFixture<HodsnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodsnhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodsnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
