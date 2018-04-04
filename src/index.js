import ko from 'knockout';
import App from './App.component.js';

// Subscribe component in the registry
const componentsRegistry = [
 App
];


componentsRegistry.forEach((c) => {
  const {component, ...rest } = c;
  ko.components.register(component, rest);
  ko.applyBindings(new rest.viewModel());
});
