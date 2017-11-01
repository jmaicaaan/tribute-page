import * as timelines from '../../assets/timeline.json';
import * as logo from '../../assets/images/cd-icon-picture.svg';

class HomeController {
  constructor() {
    "ngInject";
    this.text = 'Hola Amigo';
    this.logo = logo.default;
    this.timelines = timelines.data;
  };
  
  $onInit = () => {
  };
}

export default HomeController;
