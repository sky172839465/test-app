const codecept = require('codeceptjs')
const Helper = codecept.helper

class CommonHelper extends Helper {
  _getBrowser () {
    if (this.helpers['WebDriver']) {
      return this.helpers['WebDriver'].browser || {}
    }
    throw new Error('No matching helper found. Supported helpers: WebDriver')
  }

  _getSessionId () {
    return this._getBrowser().sessionId
  }
}

module.exports = CommonHelper
