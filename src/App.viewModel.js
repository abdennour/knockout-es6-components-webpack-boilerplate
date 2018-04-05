import ko from 'knockout';

class App {
  constructor(params) {
    this.$params = params;
    this.message = ko.observable('');
  }

  sayHello() {
    this.message(`Hello ${this.$params.helloTo}!`);
  }
}

export default App;
