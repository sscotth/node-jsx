const React = require('react')

const Root = require('./root')

module.exports = ({ message , error: { status, stack } }) => (
  <Root>
    <h1>{message}</h1>
    <h2>{status}</h2>
    <pre>{stack}</pre>
  </Root>
)
