require('jsdom-global/register');
global.expect = require('expect');
global.$ = require('jquery');
global.mount = function(template) {
  return $(template);
};

global.mountWithWrapper = function(template, wrapper = 'div') {
  return mount(`<${wrapper}> ${template} </${wrapper}>`);
};
