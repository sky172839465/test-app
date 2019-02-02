const now = new Date()
const startDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
const startTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
const {
  PROJECT_NAME = 'Test app',
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  BASE_URL = 'https://sky172839465.github.io/test-app',
  TRAVIS_BUILD_NUMBER = `local ${startDate} ${startTime}`,
  TRAVIS_JOB_NUMBER = ''
} = process.env

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
            platform: 'Windows 10',
            ...getBrowserConfig('Windows Chrome')
          }
        }
      ]
    }
  },
  helpers: {
    SauceHelper: {
      require: './helper/sauceHelper.js'
    },
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
