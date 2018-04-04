A Single Page Application boilerplate using Knockout as organizational framework to build components-based frontend.

# Prerequiestes

- Node 8.11.1 LTS

# Start application

```sh
npm start
```

# Build application

```sh
npm run build
```

The output is `dist/` directory


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
    └── App.viewModel.js
    └── App.template.js
    └── App.component.js
    └── App.spec.js
    └── App.css
    └── registry.js
    └── index.js
└── webpack
    └── config.js    

```

**public/index.html** is the single page of the whole application

**src/registry.js** where you import all components and register them into `registry` collection. So basically, this file will be updated with the creation of any new KO component.

**src/index.js** the facade and the entry point of the whole application where all components are fetched from *src/registry.js* and registred by Knockout. So basically, this file should be stable and does not need any update.

**src/[MyComponent].component.js** it is KO component that should import the view-model, the template as well as the style of the component if any. Then, it exports a component following this shape:

```js
{
  component, // name of component as string
  viewModel, // import of src/[MyComponent].viewModel.js
  template   // import of src/[MyComponent].template.html
}
```

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
