const CommonHelper = require('./commonHelper')
const SauceLabs = require('saucelabs')
const {
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY
} = require('../commonData')
const Acct = new SauceLabs({
  username: SAUCE_USERNAME,
  password: SAUCE_ACCESS_KEY
})

// https://github.com/puneet0191/codeceptjs-saucehelpe
class SauceHelper extends CommonHelper {
  _updateSauceJob (sessionId, data) {
    const sauceUrl = `⚡️ Test finished. Link to job: https://saucelabs.com/jobs/${sessionId} ⚡️\n\n`
    const {
      platform = 'unknown',
      version = 'unknown',
      browserName = 'unknown'
    } = this.helpers['WebDriver'].browser.capabilities
    const newData = {
      ...data,
      name: `(${platform} v${version}:${browserName}) ${data.name}`,
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
    this._updateSauceJob(sessionId, { 'passed': true, 'name': test.title })
  }

  _failed (test, error) {
    console.log('Test has failed')
    const sessionId = this._getSessionId()
    this._updateSauceJob(sessionId, { 'passed': false, 'name': test.title })
  }
}

module.exports = SauceHelper
