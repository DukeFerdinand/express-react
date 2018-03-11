const express = require('express')
const path = require('path')

const { Note } = require('./server/db/models/Note')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
  res.send({ msg: 'Hello from your API!' })
})

app.post('/api/new/note', (req, res) => {
  const newNote = new Note({ msg: req.body.msg })
  newNote.save((error) => {
    if (error) return error
    Note.find().exec((err, notes) => {
      console.log(notes)
      res.send(notes)
    })
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Useful if your hosting site uses a non-standard port
const PORT = process.env.port || 3000

// eslint-disable-next-line
app.listen(PORT, () => console.log(`Starting app on port ${PORT}`))
