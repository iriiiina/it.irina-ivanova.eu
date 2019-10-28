'use strict';

const e = React.createElement;

function HelloMessage() {
    return e(
      'h1',
      null,
      'Hello, React!');
}

ReactDOM.render(
  e(HelloMessage),
  document.getElementById('hello_react')
);