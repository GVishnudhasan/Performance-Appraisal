import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lt5Component } from './lt5.component';

import { ToastrService } from 'ngx-toastr';

describe('Lt5Component', () => {
  let component: Lt5Component;
  let fixture: ComponentFixture<Lt5Component>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lt5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
