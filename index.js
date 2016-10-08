const choo = require('choo')
const app = choo()
const mainView = require('./main')(app)

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()

document.body.appendChild(tree)
