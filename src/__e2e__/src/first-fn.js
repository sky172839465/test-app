Feature('My First Test')

Scenario('test something', (I) => {
  I.amOnPage('/test-app')
  I.see('Hello 2020')
  I.wait(1)
  I.say('test say api')
})
