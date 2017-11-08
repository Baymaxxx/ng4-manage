import { ProjectStatusPipe } from './project-status.pipe';

describe('ProjectStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ProjectStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
