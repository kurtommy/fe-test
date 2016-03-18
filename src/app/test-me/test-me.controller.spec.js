describe('TestMeController', () => {
  let testMeController;

  beforeEach(angular.mock.module('creditech'));

  beforeEach(inject(($controller) => {
    testMeController = $controller('TestMeController');
  }));

  it('should exist', () => {
    expect(testMeController).toBeDefined();
  });
});
