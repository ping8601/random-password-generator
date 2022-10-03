// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

// set body-parser
app.use(express.urlencoded({extended: true}))

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

// start the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})