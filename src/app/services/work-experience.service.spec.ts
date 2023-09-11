import { TestBed } from '@angular/core/testing';

import { WorkexperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  let service: WorkexperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkexperienceService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
