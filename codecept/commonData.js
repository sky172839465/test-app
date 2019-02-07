const now = new Date()
const startDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
const startTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
const {
  PROJECT_NAME = 'Test app',
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  EYES_KEY,
  BASE_URL = 'https://sky172839465.github.io/test-app',
  TRAVIS_BUILD_NUMBER = `local ${startDate} ${startTime}`,
  TRAVIS_JOB_NUMBER = ''
} = process.env
const WINDOW_SIZE = '1024x768'

module.exports = {
  PROJECT_NAME,
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  EYES_KEY,
  BASE_URL,
  TRAVIS_BUILD_NUMBER,
  TRAVIS_JOB_NUMBER,
  WINDOW_SIZE
}
