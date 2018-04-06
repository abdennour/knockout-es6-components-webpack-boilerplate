A Single Page Application boilerplate using Knockout as organizational framework to build components-based frontend.

# Prerequiestes

- Node 8.11.1 LTS

# Getting Started

**Install dependencies**

```sh
npm install
```
**Start application**

```sh
npm start
```

**Build application**

```sh
npm run build
```

The output is `dist/` directory

**Run unit-tests**

```sh
npm test
# or "npm run test:watch" to watch status of unit-tests in realtime
```


# Boilerplate hierarchy

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── index.html
└── src
    └── ko
        └── ViewModel.js
    └── App.vm.js
    └── App.tmpl.js
    └── App.component.js
    └── App.spec.js
    └── App.css
    └── registry.js
    └── index.js
    └── setupTests.js    
└── webpack
    └── config.js    

```

**public/index.html** is the single page of the whole application

**src/ko/ViewModel.js** An abstract class that any Knockout viewmodel implementation should extend. It is a decorator class and it injects the parameters of the component inside the "this" of the viewmodel.

**src/registry.js** where you import all components and register them into `registry` collection. So basically, this file will be updated with the creation of any new KO component.

**src/index.js** the facade and the entry point of the whole application where all components are fetched from *src/registry.js* and registred by Knockout. So basically, this file should be stable and does not need any update.

**src/[MyComponent].component.js** it is KO component that should import the view-model, the template as well as the style of the component if any. Then, it exports a component following this shape:

```js
{
  component, // name of component as string
  viewModel, // import of src/[MyComponent].vm.js
  template   // import of src/[MyComponent].tmpl.html
}
```

**src/[MyComponent].vm.js** is the ViewModel class of the component *src/[MyComponent].component.js* and it should inherit from *src/ko/ViewModel.js*.

**src/[MyComponent].tmpl.html** is the HTML template of the component *src/[MyComponent].component.js*.


**src/setupTests** It makes some test utilities globally, then unit-tests file can access to them directly with any import statement (.e.g: expect). It also create test utilities for Knockout files (.e.g: `mount` function to test Knockout templates)

# Reuse the boilerplate

```sh
BOILERPLATE=https://github.com/abdennour/knockout-es6-components-webpack-boilerplate.git;
git clone $BOILERPLATE my-app;
cd my-app;
git remote set-url origin https://github.com/my-name/my-app
# To synchronize your app with updates of this boilerplate
# , then proceed with the following commands
git remote add boilerplate $BOILERPLATE
# Fetch last updates of boilerplate
git fetch boilerplate master;
# It is now your expertise with GIT to orchestrate between two repositories: yours and this boilerplate
```

# Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code and the process of handling pull requests.

# Authors

* **Abdennour TOUMI** - *Original Author* - [in.abdennoor.com](http://in.abdennoor.com)


# License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details
