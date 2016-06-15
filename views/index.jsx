const React = require('react')

const Root = require('./root')

module.exports = ({ title }) => (
  <Root>
    <h1>{title}</h1>
    <p>Welcome to {title}</p>
    <script src="/javascripts/main.js"></script>
  </Root>
)
