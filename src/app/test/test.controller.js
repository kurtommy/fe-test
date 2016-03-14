export class TestController {
  constructor($scope, raceCarService) {
    'ngInject';

    this.cars = [];
    this.rc_service = raceCarService;

    // load random amount of cars from service - for pagination testing
    this.cars = this.loadCars(Math.random()*100 + 100);

    //scope
    $scope.cars = this.cars;
    $scope.amount = this.cars.length;
    $scope.page = 1;
    $scope.per_page = 10;
    $scope.pages = Math.ceil($scope.amount / $scope.per_page);

    // paginate cars and pass to view filtered array
    $scope.$watch("page + per_page", function () {
      var offset = (($scope.page - 1) * $scope.per_page);
      var end   = offset + $scope.per_page;

      $scope.filteredCars = $scope.cars.slice(offset, end);
    });
  }

  loadCars(howMany)
  {
    return this.rc_service.getCars(howMany);
  }
}
