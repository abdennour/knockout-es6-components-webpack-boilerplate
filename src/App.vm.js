import ko from 'knockout';
import ViewModel from './ko/ViewModel';

class App extends ViewModel {
  constructor(...args) {
    super(...args); // Make params accessible via this.$params
    this.message = ko.observable('');
  }
  sayHello() {
    this.message('Hello World!');
  }
}

export default App;
