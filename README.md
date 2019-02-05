# test app

[![FOSSA Status][fossa-status-image]][fossa-status-url]
[![Build Status][travis-image]][travis-url]
[![Saucelabs Ststus][sauce-labs-status-image]][sauce-labs-status-url]
[![Coverage Status][codecov-image]][codecov-url]
[![JavaScript Style Guide][standard-image]][standard-url]  

[![Dependency Status][david-dm-image]][david-dm-url]
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]
<!--[![HitCount][hit-count-image]][hit-count-url]-->

This repo have been wrote some test for front end develop easlier to learn how to test and test with CI/CD.

- Unit test
- Functional test
- Visual test
- Run test on TravisCI

### Start
#### Clone this repo & make sure you have been install [nodejs][].
#### 👇 Then run these script to setup website. 👇

```zsh
# install dependency
$ npm install

# launch website
$ npm start
```

### Table of Contents
- [Unit test]
- [Functional test]
- [Environment Variables]
- [Compatibility]

### Unit test
```zsh
# test all unit test
$ npm run test

# test single unit test
$ npm run test::single <path/to/test-file>
```

### Functional test
```zsh
# test all functional test local (make sure website has been launch on https://localhost:3000 or run `npm start` first)
$ npm run functional::local

# test all functional test on saucelabs
$ npm run functional::online

# test all functional test on saucelabs with multiple platform
$ npm run functional::online:multiple
```

### Environment Variables
```
# for coverage badge
- CODECOV_TOKEN
# for visual test
- EYES_KEY
# for deploy github page
- GH_REF
- GH_TOKEN
# for functional test on Saucelabs
- SAUCE_ACCESS_KEY
- SAUCE_USERNAME
```

### Compatibility
[![Saucelab Compatibility][compatibility-image]][compatibility-url]


<!-- badge -->
[fossa-status-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsky172839465%2Ftest-app.svg?type=shield
[fossa-status-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fsky172839465%2Ftest-app?ref=badge_shield
[travis-image]: https://img.shields.io/travis/sky172839465/test-app.svg
[travis-url]: https://travis-ci.org/sky172839465/test-app
[sauce-labs-status-image]: https://saucelabs.com/buildstatus/sky810684?auth=2ba1bc713e96348bdc016376a5c28b9c
[sauce-labs-status-url]: https://saucelabs.com/u/sky810684
[codecov-image]: https://img.shields.io/codecov/c/github/sky172839465/test-app.svg
[codecov-url]: https://codecov.io/gh/sky172839465/test-app
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[david-dm-image]: https://david-dm.org/sky172839465/test-app.svg
[david-dm-url]: https://david-dm.org/sky172839465/test-app
[david-dm-dev-image]: https://david-dm.org/sky172839465/test-app/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/sky172839465/test-app#info=devDependencies
[hit-count-image]: http://hits.dwyl.io/sky172839465/test-app.svg
[hit-count-url]: http://hits.dwyl.io/sky172839465/test-app
[compatibility-image]: https://saucelabs.com/browser-matrix/sky810684.svg
[compatibility-url]: https://saucelabs.com/u/sky810684

<!-- install -->
[nodejs]: https://nodejs.org

<!-- table of contents -->
[Unit Test]: https://github.com/sky172839465/test-app#unit-test
[Functional Test]: https://github.com/sky172839465/test-app#functional-test
[Environment Variables]: https://github.com/sky172839465/test-app#environment-variables
[Compatibility]: https://github.com/sky172839465/test-app#compatibility
