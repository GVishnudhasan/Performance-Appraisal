import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodenggComponent } from './hodengg.component';

describe('HodenggComponent', () => {
  let component: HodenggComponent;
  let fixture: ComponentFixture<HodenggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodenggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodenggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
