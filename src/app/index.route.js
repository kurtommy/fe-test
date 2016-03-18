export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('test', {
      url: '/',
      templateUrl: 'app/test-me/test-me.html',
      controller: 'TestMeController',
      controllerAs: 'testMe'
    });

  $urlRouterProvider.otherwise('/');
}
