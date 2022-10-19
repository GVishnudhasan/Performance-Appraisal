import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithphdComponent } from './withphd.component';

describe('WithphdComponent', () => {
  let component: WithphdComponent;
  let fixture: ComponentFixture<WithphdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithphdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithphdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
