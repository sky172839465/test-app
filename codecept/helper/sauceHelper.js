const codecept = require('codeceptjs')
const Helper = codecept.helper
const SauceLabs = require('saucelabs')
const _ = require('lodash')
const {
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY
} = require('../commonData')
const Acct = new SauceLabs({
  username: SAUCE_USERNAME,
  password: SAUCE_ACCESS_KEY
})

// https://github.com/puneet0191/codeceptjs-saucehelpe
class SauceHelper extends Helper {
  _updateSauceJob (sessionId, data) {
    const sauceUrl = `⚡️ Test finished. Link to job: https://saucelabs.com/jobs/${sessionId} ⚡️\n\n`
    const {
      platform = '',
      browserName = ''
    } = this.helpers['WebDriverIO'].browser
    const newData = {
      ...data,
      name: `(${platform}:${browserName}) ${data.name}`,
      public: 'public'
    }
    console.log(sauceUrl)
    Acct.updateJob(sessionId, newData, this._callback)
  }

  _callback (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body)
    }
  }

  _passed (test) {
    console.log('Test has Passed')
    const sessionId = this._getSessionId()
    this._updateSauceJob(sessionId, {'passed': true, 'name': test.title})
  }

  _failed (test, error) {
    console.log('Test has failed')
    const sessionId = this._getSessionId()
    this._updateSauceJob(sessionId, {'passed': false, 'name': test.title})
  }

  _getSessionId () {
    if (this.helpers['WebDriver']) {
      return this.helpers['WebDriver'].browser.sessionId
    }
    if (this.helpers['Appium']) {
      return this.helpers['Appium'].browser.sessionId
    }
    if (this.helpers['WebDriverIO']) {
      return this.helpers['WebDriverIO'].browser.requestHandler.sessionID
    }
    throw new Error('No matching helper found. Supported helpers: WebDriver/Appium/WebDriverIO')
  }
}

module.exports = SauceHelper
