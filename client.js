const choo = require('choo')
const app = choo()
const mainView = require('./pages/main')
const testView = require('./pages/test')

app.model(mainView.model)

app.router((route) => [
  route('/', mainView),
  route('/test', testView)
])

const application = app.start()

document.body.appendChild(application)
