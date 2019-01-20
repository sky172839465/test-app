module.exports = () => {
  return actor({
    say: (message) => {
      console.log(message)
    }
  })
}
