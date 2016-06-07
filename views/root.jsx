const React = require('react')

module.exports = ({ title, children }) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>{children}</body>
  </html>
)
