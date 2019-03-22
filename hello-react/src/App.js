import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header' // 引入Header
import Body from './components/body'
import Home from './components/home' // 引入Home
class App extends Component {
  constructor () {
    super()
    this.state = {
      homeLink: 'homeLink',
      stateMount: true
    }
  }
  onchangeMount () {
    this.setState({
      stateMount: !this.state.stateMount
    })
  }
  changeHomeLink (newName) {
    this.setState({
      homeLink: newName
    })
  }
  onGreat (age) { // 接收子组件传递过来的值
    console.log('子组件向父组件传值', age);
  }
  render() {
    let user = {
      name: 'Augus',
      hobby: ['badminton', 'music']
    };
    let cm = '';
    if (this.state.stateMount) {
      cm = (
        <Body changeLink={this.changeHomeLink.bind(this)}/>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Header name={'lee'} age={25} user={user} great={this.onGreat}>
            <p>
              I am child
              <span>里面还有一项内容</span>
            </p>
          </Header>
          {this.state.inputChange}
          <Home homeLink={this.state.homeLink}/>
          {cm}
          <button onClick={this.onchangeMount.bind(this)}>mount状态切换</button>
        </header>
      </div>
    );
  }
}

export default App;
