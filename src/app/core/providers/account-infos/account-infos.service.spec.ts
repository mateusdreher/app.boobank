import { TestBed } from '@angular/core/testing';

import { AccountInfosService } from './account-infos.service';

describe('AccountInfosService', () => {
  let service: AccountInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
