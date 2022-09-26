# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.0] - 2022-09-26
### Added
- Documentation for unit tests

### Fixed
- Unit tests are now based on Vitest and no longer break Github Actions

### Fixed
- Vue configurations inside the base configuration now properly reside in the Vue configuration only

## [3.1.0] - 2022-08-13
### Added
- Unit test for configuration validity

### Fixed
- Vue configurations inside the base configuration now properly reside in the Vue configuration only

## [3.0.0] - 2022-08-06
### Added
- Support for Vue 3 via `@kellerkinder/eslint-config/vue`
- Vue 3 ruleset based on community and library best-practices

## [3.0.0-beta.1] - 2022-08-06
### Added
- Support for Vue 3
- Baseline rules for Vue 3

## [2.2.0] - 2022-08-06
### Added
- Import order and spacing configuration, to group imports by type

### Changed
- Made `eslint-plugin-import` a dependency instead of a peer dependency

## [2.1.0] - 2021-11-19
### Added
- TypeScript support via extending `@kellerkinder/eslint-config/typescript`
- TypeScript specific rules based on `@typescript-eslint/recommended`

### Changed
- `import/prefer-default-export` rule disabled

## [2.0.0] - 2021-08-11
### Added
- Default babel configuration
  - Note: This might be a breaking change, if you have partially overwritten the `babelOptions` section in your ESLint config
- Support for `@babel/plugin-proposal-class-properties`


## [1.1.0] - 2021-02-08
### Added
- Babel support via `@babel/eslint-parser`

## [1.0.0] - 2021-02-05
### Changed
- `no-plusplus` rule disabled
- `import/no-extraneous-dependencies` rule disabled
- `no-use-before-define` rule disabled for function declarations
- `no-mixed-operators` rule severity reduced to warning level
- `consistent-return` rule severity reduced to warning level

## [1.0.0-rc.4] - 2021-02-05
### Removes
- GPR publish workflow

## [1.0.0-rc.3] - 2021-02-05
### Added
- NPM publish workflow via Github Actions

## [1.0.0-rc.2] - 2021-02-04
### Changed
- Rule `max-len` was turned off
- Rule `func-names` was turned off

## [1.0.0-rc.1] - 2021-02-03
### Changed
- Rule `no-parameter-reassign` was turned off
- Rule `no-underscore-dangle` was turned off

## [1.0.0-rc.0] - 2021-01-27
### Added
- Finalize overrides for remaining rules

## [0.4.0] - 2021-01-27
### Added
- Implement overrides for best-practices and ES6 style

## [0.3.0] - 2021-01-26
### Added
- Extend documentation on using this package

## [0.2.0] - 2021-01-26
### Added
- Documentation on installation and usage

## [0.1.0] - 2021-01-26
### Added
- Basic implementation based on AirBnB ESLint configuration

[Unreleased]: https://github.com/kellerkinderDE/eslint-config/compare/3.2.0...HEAD
[3.2.0]: https://github.com/kellerkinderDE/eslint-config/compare/3.1.0...3.2.0
[3.1.0]: https://github.com/kellerkinderDE/eslint-config/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/kellerkinderDE/eslint-config/compare/3.0.0-beta.1...3.0.0
[3.0.0-beta.1]: https://github.com/kellerkinderDE/eslint-config/compare/2.2.0...3.0.0-beta.1
[2.2.0]: https://github.com/kellerkinderDE/eslint-config/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/kellerkinderDE/eslint-config/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/kellerkinderDE/eslint-config/compare/1.1.0...2.0.0
[1.1.0]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0-rc.4...1.0.0
[1.0.0-rc.4]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0-rc.3...1.0.0-rc.4
[1.0.0-rc.3]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0-rc.2...1.0.0-rc.3
[1.0.0-rc.2]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0-rc.1...1.0.0-rc.2
[1.0.0-rc.1]: https://github.com/kellerkinderDE/eslint-config/compare/1.0.0-rc.0...1.0.0-rc.1
[1.0.0-rc.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.4.0...1.0.0-rc.0
[0.4.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.3.0...0.4.0
[0.3.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/kellerkinderDE/eslint-config/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/kellerkinderDE/eslint-config/releases/tag/0.1.0
