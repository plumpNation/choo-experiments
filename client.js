const choo = require('choo')
const app = choo()
const mainView = require('./pages/main')

app.router((route) => [
  route('/', mainView)
])

const model = {
  'state': {
    'name': 'My main view',
    'myTreeModel': {
      'data': {
        'name': 'Tree view',
        'nodes': [
          {
            'name': 'A thing 1'
          },
          {
            'name': 'A thing 2',
            'nodes': [
              {
                'name': 'Getting nested',
                'nodes': [
                  {'name': 'Really really nested'}
                ]
              }
            ]
          }
        ]
      }
    }
  },
  'reducers': {
    'update': (action, state) => {
      console.log('sweet');
      return {'title': action.value}
    }
  }
}

app.model(model)

const application = app.start()

document.body.appendChild(application)
