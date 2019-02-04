Feature('NotFound page')

const {
  brandLink,
  notFound
} = require('../../pageObject')
const route = '/test-app'

Scenario('default page', async (I) => {
  I.amOnPage(`${route}/#/THIS_IS_INVAILD_ROUTE`)
  I.waitForVisible(brandLink)
  I.see('Test App', brandLink)
  I.seeElement(notFound)
  I.see('Oops! Not found page.', notFound)
  I.screenShotForVisualTest()
})
