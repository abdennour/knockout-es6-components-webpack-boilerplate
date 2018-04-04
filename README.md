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
    └── App.css
    └── index.js
└── webpack
    └── config.js    

```

**public/index.html** is the single page of the whole application

**src/index.js** where you import all components and register them into `componentsRegistry` collection.

**src/[MyComponent].component.js** it is KO component that should import the view-model, the template as well as the style of the component if any. Then, it exports a component following this shape:

```js
{
  component, // name of component
  viewModel, // import of src/[MyComponent].viewModel.js
  template   // import of src/[MyComponent].template.html
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code and the process of handling pull requests.

## Authors

* **Abdennour TOUMI** - *Original Author* - [in.abdennoor.com](http://in.abdennoor.com)


## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details
