export class TestMeController {
  constructor(raceCarService) {
    'ngInject';
    let cars = raceCarService.getCars(10);
    console.log('Ten cars', cars);
  }
}
