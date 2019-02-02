Feature('NotFound page')

const pageObject = require('../../pageObject')

Scenario('default page', (I) => {
  I.amOnPage('/test-app/#/THIS_IS_INVAILD_ROUTE')
  I.waitForVisible(pageObject.appLink)
  I.see('Test App1', pageObject.appLink)
  I.seeElement(pageObject.notFound)
  I.see('Oops! Not found page.', pageObject.notFound)
})
