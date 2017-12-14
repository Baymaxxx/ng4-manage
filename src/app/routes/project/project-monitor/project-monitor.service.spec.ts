import { TestBed, inject } from '@angular/core/testing';

import { ProjectMonitorService } from './project-monitor.service';

describe('ProjectMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectMonitorService]
    });
  });

  it('should be created', inject([ProjectMonitorService], (service: ProjectMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
