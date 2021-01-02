import { TestBed } from '@angular/core/testing';

import { BaseControlsService } from './base-controls.service';

describe('BaseControlsService', () => {
  let service: BaseControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
