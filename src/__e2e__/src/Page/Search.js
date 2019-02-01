Feature('Search page')

const pageObject = require('../../pageObject')

Scenario('default page', (I) => {
  I.amOnPage('/')
  I.waitForVisible(pageObject.appLink)
  I.see('Test App', pageObject.appLink)
  I.seeElement(pageObject.userNameInput)
  I.seeElement(pageObject.userNameInputMsg)
  I.seeElement(`${pageObject.searchBtn}:disabled`)
  I.see('This field is required', pageObject.userNameInputMsg)
  I.seeInCurrentUrl('/search')
})
