const now = new Date()
const startDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
const startTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
const {
  PROJECT_NAME = 'Test app',
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  BASE_URL = 'https://sky172839465.github.io/test-app',
  TRAVIS_BUILD_NUMBER = `local ${startDate} ${startTime}`,
  TRAVIS_JOB_NUMBER = '',
  IS_TEST_LOCAL = false
} = process.env

const getBrowserConfig = browserName => ({
  'browserstack.local': IS_TEST_LOCAL,
  'browserstack.debug': true,
  'browserstack.networkLogs': true,
  project: `${PROJECT_NAME}`,
  build: `${PROJECT_NAME} in ${browserName} ${TRAVIS_BUILD_NUMBER} ${TRAVIS_JOB_NUMBER}`
})

exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  multiple: {
    mac: {
      browsers: [
        {
          browser: 'safari',
          desiredCapabilities: {
            os: 'OS X',
            os_version: 'High Sierra',
            ...getBrowserConfig('Mac Safari')
          }
        },
        {
          browser: 'chrome',
          desiredCapabilities: {
            os: 'OS X',
            os_version: 'High Sierra',
            ...getBrowserConfig('Mac Chrome')
          }
        }
      ]
    },
    windows: {
      browsers: [
        {
          browser: 'chrome',
          desiredCapabilities: {
            os: 'Windows',
            os_version: '10',
            ...getBrowserConfig('Windows Chrome')
          }
        }
      ]
    }
  },
  helpers: {
    WebDriverIO: {
      url: BASE_URL,
      user: SAUCE_USERNAME,
      key: SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        ...getBrowserConfig('Windows Chrome')
      },
      browser: 'chrome',
      windowSize: 'maximize'
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
