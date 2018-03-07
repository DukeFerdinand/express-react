const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, 'dist/public')))
app.use(cors())

app.get('/api', (req, res) => {
  res.send({
    msg: 'Hello from your API!'
  })
})

// Useful if your hosting site uses a non-standard port
const PORT = process.env.port || 3000

// eslint-disable-next-line
app.listen(3000, () => console.log(`Starting app on port ${PORT}`))
