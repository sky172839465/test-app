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
    1. Signin [Codecov][]
      [![SignIn Codecov][signin-codecov-image]][signin-codecov-url]
    2. Accept Codecov access github account
      ![Accept Codecov][accept-codecov-image]
    3. Select test-app repo
      ![Select Repo][select-repo]
    4. Get `CODECOV_TOKEN`
      ![Get Token][get-token]
  - [EYES_KEY][]: Use for visual test
    1. Signin [Applitools][]
      ![Accept Eyes][accept-eyes]
    2. Get `EYES_KEY`
      ![Get Eyes Token][get-eyes-token]
  - GH_REF, [GH_TOKEN][]: Use for deploy github page, `GH_REF` is `github.com/<YOUR_GITHUB_ACCOUNT>/test-app.git`
    1. Go to [Personal access tokens][] page
      ![Generator Github Token][generator-github-token]
    2. Create `GH_TOKEN` can access repo
      ![Create Github Token][create-github-token]
    3. Get `GH_TOKEN`
      ![Get Github Token][get-github-token]
  - [SAUCE_ACCESS_KEY][], [SAUCE_USERNAME][]: Use for functional test on Saucelabs
    1. Signin [Sauce Labs][]
      ![Accept Sauce Labs][accept-sauce-labs]
    2. Go to [User Settings][] page
      ![Get Sauce Labs][get-sauce-labs-token]
    3. Get `SAUCE_ACCESS_KEY` & `SAUCE_USERNAME`
  - All environment variables
    ![Env Variables][env-var-image]
6. `Push` a commit to master branch, it will trigger Travis CI to build you CI!
  ![Build Start][build-start-image]
  ![Build Passed][build-passed-image]


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
[signin-codecov-image]: https://user-images.githubusercontent.com/9082423/52392435-c357e580-2adc-11e9-86ff-d2fdb69836d8.png
[signin-codecov-url]: https://codecov.io/gh
[Codecov]: https://codecov.io/gh
[accept-codecov-image]: https://user-images.githubusercontent.com/9082423/52392611-9eb03d80-2add-11e9-88df-0574fdcf8999.png
[select-repo]: https://user-images.githubusercontent.com/9082423/52393227-28f9a100-2ae0-11e9-8495-b5b9ecf2adaa.png
[get-token]: https://user-images.githubusercontent.com/9082423/52392961-16cb3300-2adf-11e9-941c-dde1b5ae800d.png
[EYES_KEY]: https://applitools.com
[Applitools]: https://applitools.com/users/register
[accept-eyes]: https://user-images.githubusercontent.com/9082423/52393467-1cc21380-2ae1-11e9-9dfc-ec48021e25c2.png
[get-eyes-token]: https://user-images.githubusercontent.com/9082423/52393507-4bd88500-2ae1-11e9-8a9e-bd9efb84e81f.png
[GH_TOKEN]: https://github.com/settings/tokens
[Personal access tokens]: https://github.com/settings/tokens
[generator-github-token]: https://user-images.githubusercontent.com/9082423/52393622-f18bf400-2ae1-11e9-9600-f157b132b7e0.png
[create-github-token]: https://user-images.githubusercontent.com/9082423/52393632-049ec400-2ae2-11e9-934f-72376092a722.png
[get-github-token]: https://user-images.githubusercontent.com/9082423/52393660-2009cf00-2ae2-11e9-8fb6-54b7cc5280dc.png
[SAUCE_ACCESS_KEY]: https://saucelabs.com/oauth/login/github
[SAUCE_USERNAME]: https://saucelabs.com/oauth/login/github
[Sauce Labs]: https://saucelabs.com/oauth/login/github
[accept-sauce-labs]: https://user-images.githubusercontent.com/9082423/52394056-f0f45d00-2ae3-11e9-9d46-9a9ae115b62c.png
[User Settings]: https://app.saucelabs.com/user-settings
[get-sauce-labs-token]: https://user-images.githubusercontent.com/9082423/52394055-f05bc680-2ae3-11e9-8f4f-985b2ca8e1d4.png
[build-start-image]: https://user-images.githubusercontent.com/9082423/52386407-f3918b00-2ac0-11e9-821a-4f0123cd0d85.png
[build-passed-image]: https://user-images.githubusercontent.com/9082423/52386440-22a7fc80-2ac1-11e9-97dd-b81cb975085a.png

<!-- table of contents -->
[Lint test]: https://github.com/sky172839465/test-app#lint-test
[Unit Test]: https://github.com/sky172839465/test-app#unit-test
[Functional Test]: https://github.com/sky172839465/test-app#functional-test
[Environment Variables]: https://github.com/sky172839465/test-app#environment-variables
[Compatibility]: https://github.com/sky172839465/test-app#compatibility

<!-- Functional Test -->
[Issue]: https://github.com/vvo/selenium-standalone/issues/140#issuecomment-151254279
[sauce connect]: https://wiki.saucelabs.com/display/DOCS/Basic+Sauce+Connect+Proxy+Setup#BasicSauceConnectProxySetup-SettingUpSauceConnect