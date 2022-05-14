const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello SLIIT!')
})

app.listen(port, () => {
  console.log(`Port is running on ${port}`)
})