const express = require('express')
const path = require('path')

const app = express()
const PORT = 8800


app.use(express.static('./'))
app.use(express.static(__dirname))
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

// Export the Express API
module.exports = app
