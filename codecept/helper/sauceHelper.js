const codecept = require('codeceptjs')
const Helper = codecept.helper
const _ = require('lodash')

class SauceHelper extends Helper {
  steps = 0

  _before () {
    this.steps = 0
  }

  _beforeStep (step) {
    const browser = _.get(this.helpers, 'WebDriverIO', {})
    const sessionID = _.get(browser, 'requestHandler.sessionID', '')
    if (this.steps === 0 && !_.isEmpty(sessionID)) {
      console.log(`⚡️ Saucelabs Feature Log: https://saucelabs.com/beta/tests/${sessionID}`)
      this.steps = 0
    }
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = SauceHelper
