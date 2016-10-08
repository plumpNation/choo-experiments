const html = require('choo/html')

module.exports = function testView(state, prev, send) {
  return html`
    <test>
      <h1>Test view</h1>
    </test>
  `
}
