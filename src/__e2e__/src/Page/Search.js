Feature('Search page')

const {
  brandLink,
  userNameInput,
  userNameInputMsg,
  searchBtn,
  disabled,
  notification
} = require('../../pageObject')
const USER_NAME = {
  EXIST: 'sky172839465',
  NOT_EXIST: 'NOT_EXIST'
}
const disabledBtn = `${searchBtn}${disabled}`
const route = '/test-app'

Scenario('default page', (I) => {
  I.amOnPage(route)
  I.waitForVisible(brandLink)
  I.see('Test App', brandLink)
  I.seeElement(userNameInput)
  I.seeElement(userNameInputMsg)
  I.seeElement(disabledBtn)
  I.see('This field is required', userNameInputMsg)
  I.seeInCurrentUrl('/search')
})

Scenario('page with userName param', (I) => {
  I.amOnPage(`${route}/#/search?userName=${USER_NAME.EXIST}`)
  I.waitForVisible(userNameInput)
  I.seeInField(userNameInput, USER_NAME.EXIST)
  I.dontSeeElement(userNameInputMsg)
})

Scenario('page search not exist user', (I) => {
  I.amOnPage(route)
  I.waitForVisible(userNameInput)
  I.screenShotForVisualTest()
  I.fillField(userNameInput, USER_NAME.NOT_EXIST)
  I.screenShotForVisualTest()
  I.click(searchBtn)
  I.waitForVisible(notification)
})
