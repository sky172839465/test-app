Feature('Search page')

const {
  brandLink,
  userNameInput,
  userNameInputMsg,
  searchBtn,
  disabled,
  loading,
  notification
} = require('../../pageObject')
const USER_NAME = {
  EXIST: 'sky172839465',
  NOT_EXIST: 'NOT_EXIST'
}
const disabledBtn = `${searchBtn}${disabled}`
const loadingBtn = `${searchBtn}${loading}`

Scenario('default page', (I) => {
  I.amOnPage('/test-app')
  I.waitForVisible(brandLink)
  I.see('Test App', brandLink)
  I.seeElement(userNameInput)
  I.seeElement(userNameInputMsg)
  I.seeElement(disabledBtn)
  I.see('This field is required', userNameInputMsg)
  I.seeInCurrentUrl('/search')
})

Scenario('page with userName param', (I) => {
  I.amOnPage(`test-app/#/search?userName=${USER_NAME.EXIST}`)
  I.waitForVisible(userNameInput)
  I.seeInField(userNameInput, USER_NAME.EXIST)
  I.dontSeeElement(userNameInputMsg)
})

Scenario('page search not exist user', (I) => {
  I.amOnPage('/test-app')
  I.waitForVisible(userNameInput)
  I.fillField(userNameInput, USER_NAME.NOT_EXIST)
  I.click(searchBtn)
  I.waitForVisible(notification)
})
