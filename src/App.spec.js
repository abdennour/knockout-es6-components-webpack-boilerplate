import Component from './App.component.js';

// unit-test is here
describe('App Component', () => {
  it('is name is "app"', () => {
    expect(Component.component).toEqual('app');
  });
});
