# Shared component library for deus-labs -tools projects

## Instructions
### 1. Packing up the library 

The components reside in the `src` folder. Keeping the current folder structure intact, you may add, remove or update components before bundling them into a package.

- Installing the necessary packages via npm:

```
npm install
```

- Running rollup to generate the bundle:

```
npm run rollup
```

You should now have a `dist` folder ready with the bundled components.
<br>

### 2. Publishing the package
- Make sure that you have an `.npmrc` file ready in your Home folder with the following content:
```
registry=https://registry.npmjs.org/
@deus-labs:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<Github authentication token for deus-labs>
```
- Make sure that you have incremented the Version number for the package in the `package.json` file.

- Run the following command to publish the package:

```
npm publish
```
<br>

### 3. Using the package


- Install the package via npm:

```
npm i @deus-labs/tools-components
```
- Install ``postcss-import`` via npm:

```
npm i postcss-import
```
- Import the ``index.css`` file that's included in the package:
```
import '@deus-labs/tools-components/dist/esm/index.css';
```
- Import the components you need into your project:

e.g.
```
import Button from '@deus-labs/tools-components';
```



