const html = require('choo/html')
const Tree = require('../lib/tree')

module.exports = function mainView(state, prev, send) {
  const tree = Tree(state.myTreeModel.data)

  function onClick() {
    addChildTo(state.myTreeModel.data);
    send('update', state);
  }

  return html`
    <main>
      <button onclick=${onClick}>Add child</button>
      ${tree}
    </main>
  `
}

let i = 0;
function addChildTo(tree) {
  tree.nodes.push({name: 'I just got added ' + ++i})
}
