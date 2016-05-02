export class TestMeController {
  constructor(raceCarService) {
    'ngInject';
    this.cars = raceCarService.getCars(10);
    console.log('Ten cars', this.cars);
  }
}
