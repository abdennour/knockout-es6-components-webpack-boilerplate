import ko from 'knockout';
import componentsRegistry from './registry';

componentsRegistry.forEach(c => {
  const { component, ...rest } = c;
  ko.components.register(component, rest);
});

ko.applyBindings();
window.ko = ko;
