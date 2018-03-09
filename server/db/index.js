const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to the DB!')
})

module.exports = {
  db,
  mongoose
}
