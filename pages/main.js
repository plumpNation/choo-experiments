const html = require('choo/html')
const Tree = require('../lib/tree')

function mainView(state, prev, send) {
  const tree = Tree(state.mainView.myTreeModel.data)

  function onClick() {
    addChildTo(state.mainView.myTreeModel.data);
    send('mainView:update', state);
  }

  return html`
    <main>
      <a href="test">Test route</a>
      <button onclick=${onClick}>Add child</button>
      ${tree}
    </main>
  `
}


mainView.model = {
  'namespace': 'mainView',
  'state': {
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

module.exports = mainView

let i = 0;
function addChildTo(tree) {
  tree.nodes.push({name: 'I just got added ' + ++i})
}
