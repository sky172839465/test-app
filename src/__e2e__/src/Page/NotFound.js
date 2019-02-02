Feature('NotFound page')

const {
  brandLink,
  notFound
} = require('../../pageObject')

Scenario('default page', (I) => {
  I.amOnPage('/test-app/#/THIS_IS_INVAILD_ROUTE')
  I.waitForVisible(brandLink)
  I.see('Test App', brandLink)
  I.seeElement(notFound)
  I.see('Oops! Not found page.', notFound)
})
