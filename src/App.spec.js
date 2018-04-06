import Component from './App.component.js';

// unit-test is here
describe('App Component', () => {
  it('is name is "app"', () => {
    expect(Component.component).toEqual('app');
  });

  describe('template', () => {
    let $template;
    beforeEach(() => {
      $template = mountWithWrapper(Component.template);
    })
    it('has heading element', () => {
      expect($template.find('h1').length).toEqual(1);
    });
    it('has button', () => {
      expect($template.find('button').length).toEqual(1);
    });
  })
});
