import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componente con JSX
class HelloWorldConJSX extends React.Component {
  render() {
    return(
      <h1>Hello World! con JSX</h1>
    )
  }
}
ReactDOM.render(<HelloWorldConJSX />, document.getElementById('root'));


// Componenete sin JSX
// class HelloWorldSinJSX extends React.Component {
//   render() {
//     return React.createElement(
//       "h1", 
//       null, 
//       "Hello World! sin JSX");
//   }
// }
// ReactDOM.render(
//   React.createElement(HelloWorld),
//   document.getElementById('root')
// );
