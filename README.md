# Kellerkinder ESLint Config

[![npm version](https://badge.fury.io/js/%40kellerkinder%2Feslint-config.svg)](https://badge.fury.io/js/%40kellerkinder%2Feslint-config)

This package provides the Kellerkinder ESLint configuration for vanilla
JS. It is based on the [AirBnB Configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
with slight alterations.

> :warning: This is a pre-release, so use it with caution.

## Requirements
This config has been developed and tested with the following requirements:
* NodeJS >= 12
* ESLint >= 7.2.0
* ESLint Plugin Import: >= 2.22.1

## Installation
In order to use this configuration, run the following scripts in your NodeJS project:

```bash
$ npm i -D eslint eslint-plugin-import @kellerkinder/eslint-config
```

## Usage
You can use this configuration by creating an `.eslintrc.json` inside your
project's root directory that is extending this configuration.

```json
{
    "extends": "@kellerkinder/eslint-config"
}
```

You can now execute eslint by running the following script:

```bash
$ npx eslint src/
```

The `src/` directory can be replaced with the directory or file you want to lint.

If you want ESLint to try to fix the errors it found, execute the following command:

```bash
$ npx eslint src/ --fix
```

Alternatively, refer to your IDE's documentation to find out, if and how ESLint
is integrated.

## Changelog
This project adheres to [Semantic Versioning](https://semver.org/). 
Please refer to the [CHANGELOG.md](CHANGELOG.md) for detailed changes and
migration instructions.

## License
MIT
