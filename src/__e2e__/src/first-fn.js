Feature('My First Test')

Scenario('test something', (I) => {
  I.amOnPage('/')
  I.see('Hello world')
  I.wait(1)
})
