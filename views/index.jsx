const React = require('react')

module.exports = React.createClass({
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <p>Welcome to {this.props.title}</p>
        </body>
      </html>
    )
  }
})
