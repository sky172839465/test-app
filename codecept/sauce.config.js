const {
  PROJECT_NAME,
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  BASE_URL,
  TRAVIS_BUILD_NUMBER,
  TRAVIS_JOB_NUMBER
} = require('./commonData')
const getBrowserConfig = browserName => ({
  'tunnel-identifier': TRAVIS_JOB_NUMBER,
  name: PROJECT_NAME,
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
            platform: 'macOS 10.14',
            browserName: 'safari',
            ...getBrowserConfig('Mac Safari')
          }
        },
        {
          browser: 'chrome',
          desiredCapabilities: {
            platform: 'macOS 10.14',
            browserName: 'chrome',
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
            platform: 'Windows 10',
            ...getBrowserConfig('Windows Chrome')
          }
        },
        {
          browser: 'firefox',
          desiredCapabilities: {
            platform: 'Windows 10',
            ...getBrowserConfig('Windows FireFox')
          }
        }
      ]
    }
  },
  helpers: {
    SauceHelper: { require: './helper/sauceHelper.js' },
    EyesHelper: { require: './helper/eyesHelper.js' },
    WebDriverIO: {
      url: BASE_URL,
      user: SAUCE_USERNAME,
      key: SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        platform: 'Windows 10',
        ...getBrowserConfig('Windows Chrome')
      },
      browser: 'chrome',
      windowSize: 'maximize',
      waitForTimeout: 30000,
      connectionRetryTimeout: 180000,
      connectionRetryCount: 3,
      smartWait: 5000,
      timeouts: {
        script: 10000,
        'page load': 10000
      }
    }
  },
  include: {
    I: './actor/steps_file.js'
  },
  bootstrap: false,
  coloredLogs: true,
  timeout: 10000,
  smartWait: true
}
