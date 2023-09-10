import { TestBed } from '@angular/core/testing';

import { WorkexperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  let service: WorkexperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkexperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
