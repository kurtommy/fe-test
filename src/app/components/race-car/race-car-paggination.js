export function RaceCarsPagination() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/race-car/race-cars.html',
    scope: {
      cars: '='
    }
  };

  return directive;
}