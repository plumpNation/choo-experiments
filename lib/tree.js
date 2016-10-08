const html = require('choo/html')

const treeItem = (node) => html`
  <li>
    ${node.name}
    ${node.nodes && node.nodes.length ? treeItems(node.nodes) : ''}
  </li>
`

const treeItems = (nodes) => html`
  <ul>
    ${nodes.map(node => treeItem(node))}
  </ul>
`

const tree = (treeData) => html`
  <tree>
    ${treeData.name}
    ${treeData.nodes && treeData.nodes.length ? treeItems(treeData.nodes) : ''}
  </tree>
`
module.exports = tree;
