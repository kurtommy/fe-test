describe('service raceCar', () => {
  beforeEach(angular.mock.module('feTest'));

  it('should be registered', inject(raceCar => {
    expect(raceCar).not.toEqual(null);
  }));
});
