const html = require('choo/html')

const treeItem = (node) => html`
  <treeitem>
    <li>
      ${node.name}
      ${node.nodes && node.nodes.length ? treeItems(node.nodes) : ''}
    </li>
  </treeitem>
`

const treeItems = (nodes) => html`
  <treeitems>
    <ul>
      ${nodes.map(node => treeItem(node))}
    </ul>
  </treeitems>
`

const mainView = (state, prev, send) => html`
  <foldertree>
    ${state.name}
    ${state.nodes && state.nodes.length ? treeItems(state.nodes) : ''}
  </foldertree>
`

const state = {
  name: 'Tree view',
  nodes: [
    {
      name: 'A thing 1'
    },
    {
      name: 'A thing 2',
      nodes: [
        {
          name: 'Getting nested'
        }
      ]
    }
  ]
}

module.exports = app => {
    app.model({
      'state': state,
      'reducers': {
        'update': (action, state) => {
          console.log('sweet');
          return {title: action.value}
        }
      }
    })

    return mainView
}
