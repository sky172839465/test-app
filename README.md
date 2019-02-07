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

- Lint test
- Unit test
- Functional test
- Visual test
- Run test on TravisCI

### Quick Start
1. `Fork` this repo & make sure you have been install [nodejs][].
2. `clone` repo from your account
```zsh
$ git clone https://github.com/<YOUR_GITHUB_ACCOUNT>/test-app.git
```
3. Then run these script to setup website. 👇

```zsh
# move to test-app dir
$ cd test-app

# install dependency
$ npm install

# launch website
$ npm start
```
3. Sign in [Travis CI][] with github account
4. Open `test-app` from `Repositories`
  ![Launch Travis CI][launch-image]
5. Set environment variables on [Travis CI][]
  - [CODECOV_TOKEN][]: Use for coverage badge
  - [EYES_KEY][]: Use for visual test
  - [GH_REF][], [GH_TOKEN][]: Use for deploy github page, GH_REF is `github.com/<YOUR_GITHUB_ACCOUNT>/test-app.git`
  - [SAUCE_ACCESS_KEY][], [SAUCE_USERNAME][]: Use for functional test on Saucelabs
  ![Env Variables][env-var-image]
6. `Push` a commit to master branch, it will trigger Travis CI to build you CI!
  

### Table of Contents
- [Lint test]
- [Unit test]
- [Functional test]
- [Compatibility]

### Lint test
```zsh
$ npm run lint
```

### Unit test

Test all unit test
```zsh
$ npm run test
```

Test single unit test
```zsh
$ npm run test::single <path/to/test/file>
```

### Functional test

👉 [[Issue][]]: No Java runtime present 👈  Please follow the link install Java.

Test functional test local

👉 Before start the script, make sure website has been launch on https://localhost:3000 or run `npm start` first
```zsh
$ npm run functional::local
```

Test functional test on saucelabs with localhost

👉 Before start the script, make sure you have been download [sauce connect], and extract sc file to `bin/sc`
```zsh
$ npm run start::sauce_connect
# wait for visible `Sauce Connect is up, you may start your tests.`
$ npm run functional::online:localhost
```

Test all functional test on saucelabs
```zsh
$ npm run functional::online
```

Test all functional test on saucelabs with multiple platform
```zsh
$ npm run functional::online:multiple
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
[Travis CI]: https://travis-ci.org/
[launch-image]: https://user-images.githubusercontent.com/9082423/52385822-50d80d00-2abe-11e9-97ce-acf44ac642f3.png
[env-var-image]: https://user-images.githubusercontent.com/9082423/52385867-8250d880-2abe-11e9-9a5f-613d8ac5cc89.png
[CODECOV_TOKEN]: https://codecov.io
[EYES_KEY]: https://applitools.com
[GH_TOKEN]: https://github.com/settings/tokens
[SAUCE_ACCESS_KEY]: https://saucelabs.com/
[SAUCE_USERNAME]: https://saucelabs.com/

<!-- table of contents -->
[Lint test]: https://github.com/sky172839465/test-app#lint-test
[Unit Test]: https://github.com/sky172839465/test-app#unit-test
[Functional Test]: https://github.com/sky172839465/test-app#functional-test
[Environment Variables]: https://github.com/sky172839465/test-app#environment-variables
[Compatibility]: https://github.com/sky172839465/test-app#compatibility

<!-- Functional Test -->
[Issue]: https://github.com/vvo/selenium-standalone/issues/140#issuecomment-151254279
[sauce connect]: https://wiki.saucelabs.com/display/DOCS/Basic+Sauce+Connect+Proxy+Setup#BasicSauceConnectProxySetup-SettingUpSauceConnect