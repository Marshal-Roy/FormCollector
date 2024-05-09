import { TestBed } from '@angular/core/testing';

import { FormsInfoService } from './forms-info.service';

describe('FormsInfoService', () => {
  let service: FormsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
