import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

export default App





























// export default class App extends Component {
//   a = "Hello!";
//   render() {
//     let c = "Xero";
//     return (
//       <div>
//         {this.a} Mr.{c} this is your first Class based component in react.
//         {/* Here we can access variable c without "this" keyword because we declare c inside function method render() but if we declare it outside it then we have to use "this"
//         keyword because outside the method, it will be global c. */}
//       </div>
//     )
//   }
// }
