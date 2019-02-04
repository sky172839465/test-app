const codecept = require('codeceptjs')
const { Eyes, Target } = require('@applitools/eyes.webdriverio')
const Helper = codecept.helper
const {
  EYES_KEY,
  PROJECT_NAME
} = require('../commonData')

class EyesHelper extends Helper {
  constructor (config) {
    super(config)
    this.eyes = new Eyes()
    this.eyes.setApiKey(EYES_KEY)
    this.browser = null
    this.suiteTitle = null
    this.scenarioTitle = null
    this.isNewTest = true
    this.isEyesOpen = false
    this.step = 0
  }

  _getBrowser () {
    return this.helpers['WebDriverIO'].browser
  }

  _beforeSuite ({ title }) {
    this.suiteTitle = title
  }

  _before ({ title }) {
    this.scenarioTitle = title
    this.isNewTest = true
    this.step = 0
  }

  _afterSuite () {
    this.suiteTitle = null
  }

  async _after () {
    this.scenarioTitle = null
    if (this.isEyesOpen) {
      this.isEyesOpen = false
      try {
        await this.eyes.close()
      } finally {
        await this.eyes.abortIfNotClosed()
      }
    }
  }

  async screenShotForVisualTest (appName = `${this.suiteTitle}:${this.scenarioTitle}`, stepName = `Step:${this.step}`) {
    if (this.isNewTest) {
      this.browser = this._getBrowser()
      await this.eyes.open(
        this.browser,
        appName,
        PROJECT_NAME
      )
      this.isEyesOpen = true
      this.isNewTest = false
    }
    await this.eyes.check(stepName, Target.window())
    this.step += 1
  }
}

module.exports = EyesHelper
