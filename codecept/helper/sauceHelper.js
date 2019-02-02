const codecept = require('codeceptjs')
const fetch = require('isomorphic-fetch')
const Helper = codecept.helper

// https://github.com/puneet0191/codeceptjs-saucehelpe
class SauceHelper extends Helper {
  _updateSauceJob (sessionId, data) {
    let sauceUrl = 'Test finished. Link to job: https://saucelabs.com/jobs/'
    sauceUrl = sauceUrl.concat(sessionId)
    console.log(sauceUrl)
    let statusUrl = 'https://saucelabs.com/rest/v1/'
    statusUrl = statusUrl.concat(this.config.user)
    statusUrl = statusUrl.concat('/jobs/')
    statusUrl = statusUrl.concat(sessionId)

    console.log(this.config.user)
    fetch(statusUrl, {
      method: 'PUT',
      json: data,
      auth: {
        'user': this.config.user,
        'pass': this.config.key
      }
    })
      .then(this._callback)
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
