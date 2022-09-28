import { TestBed } from '@angular/core/testing';

import { MInterfaceService } from './m-interface.service';

describe('MInterfaceService', () => {
  let service: MInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
