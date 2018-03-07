const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.send({
    msg: 'Hello from your API!'
  })
})

const PORT = process.env.port || 3000
// eslint-disable-next-line
app.listen(3000, () => console.log(`Starting app on port ${PORT}`))
