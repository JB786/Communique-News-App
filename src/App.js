import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { HashRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {

  // apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <Router>
        <NavBar />
        <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App

// Added a top loading bar using npm install react-top-loading-bar in our application and the necessary components like state, setProgress, <LoadingBar/> then we can pass it as a props in news.js updateNews().


// We use HashRouter instead of BrowerRouter so that github-pages will handle it through hashRouting not throw error 404.



























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
