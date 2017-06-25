import { TestBed, inject } from '@angular/core/testing';

import { DataGeneratorsApiService } from './data-generators-api.service';

describe('DataGeneratorsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGeneratorsApiService]
    });
  });

  it('should ...', inject([DataGeneratorsApiService], (service: DataGeneratorsApiService) => {
    expect(service).toBeTruthy();
  }));
});
