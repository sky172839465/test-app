const {
  PROJECT_NAME,
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  BASE_URL,
  TRAVIS_JOB_NUMBER,
  WINDOW_SIZE
} = require('./commonData')
const getBrowserConfig = browserName => ({
  'tunnel-identifier': TRAVIS_JOB_NUMBER,
  name: PROJECT_NAME,
  build: TRAVIS_JOB_NUMBER ? `build-${TRAVIS_JOB_NUMBER}` : `local-${Date.now()}`
})

exports.config = {
  name: 'test-app',
  tests: '../src/__e2e__/src/**/**.js',
  output: '../report',
  multiple: {
    // mac: {
    //   browsers: [
    //     {
    //       browser: 'safari',
    //       desiredCapabilities: {
    //         platform: 'macOS 10.13',
    //         ...getBrowserConfig('Mac Safari')
    //       }
    //     },
    //     {
    //       browser: 'chrome',
    //       desiredCapabilities: {
    //         platform: 'macOS 10.13',
    //         ...getBrowserConfig('Mac Chrome')
    //       }
    //     }
    //   ]
    // },
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
      browser: 'chrome',
      desiredCapabilities: {
        platform: 'Windows 10',
        ...getBrowserConfig('Windows Chrome')
      },
      windowSize: WINDOW_SIZE,
      waitForTimeout: 30000
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
