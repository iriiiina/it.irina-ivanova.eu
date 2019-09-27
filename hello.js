'use strict';

const e = React.createElement;

class HelloMessage extends React.Component {
  render() {
    return 'Hello, React!';
  }
}

ReactDOM.render(
  e(HelloMessage),
  document.getElementById('hello_react')
);