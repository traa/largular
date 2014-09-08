largular
========

Angular application with modules, bundles, require.js and r.js

## Adding a new module

1. Place module folder into `js/components` folder. It must be a requirejs package, with `main.js` file in it, which contains a list of all module files. In this example `module.js` is an entry point of module, where stored module configuration and angular dependencies
2. Add a new package into `js/main.js` file, at `packages` object, with it's own name and location.
3. Create new bundle or add package name to one of existing bundles (like `mymodule` added to `app` bundle). **Bundle** can be a set of modules/packages.
4. Add to `app` module angular dependency, with name of your angular module.


## Adding a new bundle

1. Create a new file with desired bundle name in `js/bundles` and list all packages, that needs to be included in it.
2. Add to `build.js` new bundle, in `modules` object. Name of module must be `bundles/<your bundle name>`
3. Load it somewhere in the app by calling `require(['bundles/mybundlename']);`


## Building application

To build project (compile it into bundles, minify CSS and other cool things, that you can set up in `build.js`) type this into your shell (navigate to project folder)

#### Windows
`r.js.cmd -o build.js`

#### Mac/Linux
`r.js -o build.js`


## Module examples

[Here is](https://github.com/traa/largular/tree/master/js/components/mymodule) a small example of module

## Application workflow

![Structure of app](https://lh3.googleusercontent.com/kMzs6OLyCZkXVXmiwakDCOwBa7hvXC4raoPOPzxA05fc9jhA4FPyk3HcOkVg1skUIeW4Mg=w1896-h875)
