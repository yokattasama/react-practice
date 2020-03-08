import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App1 extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((state,props) => {
      return {
        count: state.count + 1
      }
    })
  }
  shouldComponentUpdate () {
    return true
  }
  render () {
    console.log('组件更新了')
    return (
      <div>
        <p>计数器: {this.state.count}</p>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

// 随机数案例，避免不必要的组件更新
class Ran extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }
  shouldComponentUpdate (nextProps,nextState) {
    console.log(nextState.number,this.state.number)
    return nextState.number !== this.state.number
    // if(nextState.number === this.state.number) {
    //   return false
    // }
    // return true
  }
  render () {
    console.log('组件更新了')
    return (
      <div>
        <RanChild number={this.state.number}/>
        <button onClick={this.handleClick}>点击生成随机数</button>
      </div>
    )
  }
}

class RanChild extends React.Component {
  shouldComponentUpdate(nextProps,nextState) {
    console.log(nextProps.number, this.props.number)
    return nextProps.number !== this.props.number
  }
  render () {
    console.log('子组件更新了')
    return (
      <div>
        <p>随机数： {this.props.number}</p>
      </div>
    )
  }
}

// 使用纯组件避免比较
class Pure extends React.PureComponent {
  state = {
    obj: {
      number: 0
    }
  }
  handleClick = () => {
    console.log(this.state)
    const newObj = {...this.state.obj, number: Math.floor(Math.random() * 3) }
    this.setState(() => {
      return {
        obj: newObj
      }
    }, () => {
      console.log(this.state)
    })
  }
  render () {
    console.log('组件更新了')
    return (
      <div>
        {/* <p>随机数： {this.state.number}</p> */}
        <PureChild number={this.state.obj.number}/>
        <button onClick={this.handleClick}>点击生成随机数</button>
      </div>
    )
  }
}

class PureChild extends React.PureComponent {

  render () {
    console.log('子组件更新了')
    return (
      <p>随机数： {this.props.number}</p>
    )
  }
}

// 路由的基础使用

const RouterFirst = () => {
  return (
    <div>这是页面一的内容</div>
  )
}
const RouterSecond = () => {
  return (
    <div>这是页面二的内容</div>
  )
}

class App2 extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h3>React路由</h3>
          <Link to='/first'>点击显示页面1</Link>
          <Link to='/second'>点击显示页面2</Link>
          <Route path='/first' component={RouterFirst}></Route>
          <Route path='/second' component={RouterSecond}></Route>
        </div>
      </Router>
    )
  }
}

// 编程式导航

class Login extends React.Component {
  handleClick = () => {
    this.props.history.push('/home')
  }
  render () {
    return (
      <div>
        <p>登录页面：</p>
        <button onClick={this.handleClick}>点击登录</button>
      </div>
    )
  }
}

class Home extends React.Component {
  goBack = () => {
    console.log('1')
    this.props.history.go(-1)
  }
  render () {
    return (
      <div>
        <p>Home页面内容</p>
        <button onClick={this.goBack}>点击后退到上一个页面</button>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h3>编程式导航</h3>
          <Link to='/login'>前往登录页面</Link>
          <br />
          {/* <Link to='/'>前往首页</Link> */}
          <Route path='/login' component={Login}></Route>
          <Route exact path='/' component={Home}></Route>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

