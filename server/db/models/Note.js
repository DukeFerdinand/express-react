const { mongoose } = require('../index')

const schema = mongoose.Schema({
  date: { type: Date, default: Date.now},
  msg: String
})
const Note = mongoose.model('Note', schema)

module.exports = {
  Note
}
