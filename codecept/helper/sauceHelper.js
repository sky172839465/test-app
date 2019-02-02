const codecept = require('codeceptjs')
const Helper = codecept.helper
const _ = require('lodash')

class SauceHelper extends Helper {
  _beforeStep (step) {
    const browser = _.get(this.helpers, 'WebDriverIO', {})
    const sessionReported = _.get(browser, 'sessionReported', true)
    const sessionID = _.get(browser, 'requestHandler.sessionID', '')
    if (!sessionReported && !_.isEmpty(sessionID)) {
      console.log(`⚡️ Saucelabs Feature Log: https://saucelabs.com/beta/tests/${sessionID}`)
    }
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = SauceHelper
