const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.get('/api', (req, res) => {
  res.send({ msg: 'Hello from your API!' })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Useful if your hosting site uses a non-standard port
const PORT = process.env.port || 3000

// eslint-disable-next-line
app.listen(PORT, () => console.log(`Starting app on port ${PORT}`))
