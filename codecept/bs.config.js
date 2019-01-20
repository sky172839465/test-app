const now = new Date()
const startDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
const startTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
const {
  BS_USER,
  BS_KEY,
  BASE_URL = 'https://sky172839465.github.io/test-app',
  TRAVIS_BUILD_NUMBER = `local ${startDate} ${startTime}`,
  TRAVIS_JOB_NUMBER = '',
  IS_TEST_LOCAL = false
} = process.env

exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  helpers: {
    WebDriverIO: {
      url: BASE_URL,
      user: BS_USER,
      key: BS_KEY,
      desiredCapabilities: {
        'browserstack.local': IS_TEST_LOCAL,
        'browserstack.debug': true,
        project: 'Test app',
        build: `Test app ${TRAVIS_BUILD_NUMBER} ${TRAVIS_JOB_NUMBER}`,
        os: 'Windows',
        os_version: '10',
        resolution: '1920x1080'
      },
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: false,
  coloredLogs: true,
  timeout: 10000,
  smartWait: true
}
