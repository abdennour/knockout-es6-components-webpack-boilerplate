import ko from 'knockout';

class App {
  constructor() {
    this.message = ko.observable('');
  }
  sayHello() {
    this.message('Hello World!');
  }
}

export default App;
