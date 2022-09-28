import { TestBed } from '@angular/core/testing';

import { MAPImapService } from './m-apimap.service';

describe('MAPImapService', () => {
  let service: MAPImapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MAPImapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
