const React = require('react')

module.exports = ({ message , error: { status, stack } }) => (
  <div>
    <h1>{message}</h1>
    <h2>{status}</h2>
    <pre>{stack}</pre>
  </div>
)
