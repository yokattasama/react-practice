import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import './index.css'

class App extends React.Component {
  state = {
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ],
    userName: '',
    userComments: ''
  }
  handleState = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  addComment = () => {
    const { userName, userComments, comments } = this.state
    if(userName.trim() === '' || userComments.trim() === '') {
      alert('请输入用户名或者评论内容')
      return
    }
    const newComments = 
    [
      {
      id: Math.random(),
      name: userName,
      content: userComments
      },
      ...comments
    ]
    this.setState({
      comments: newComments,
      userName: '',
      userComments: ''
    })
  }
  renderList = () => {
    if(this.state.comments.length === 0) {
      return (
        <div className="no-comment">暂无评论，快去评论吧~</div>
      )
    }
    return (
      <ul>
        {this.state.comments.map(item => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" name='userName' value={this.state.userName} onChange={this.handleState} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name='userComments' value={this.state.userComments} onChange={this.handleState}
          />
          <br />
          <button onClick={this.addComment}>发表评论</button>
        </div>
        {this.renderList()}
        {/* {
          this.state.comments.length === 0 
          ? (<div className="no-comment">暂无评论，快去评论吧~</div>)
          : (
          <ul>
          {this.state.comments.map(item => (
            <li key={item.id}>
              <h3>评论人：{item.name}</h3>
              <p>评论内容：{item.content}</p>
            </li>
          ))}
        </ul>)
        } */}
        
        
      </div>
    )
  }
}

// 组件基础及props
class Title extends React.Component {
  render () {
    return (
      <div>
  <p>props: {this.props.name}</p>
      </div>
    )
  }
}

// 函数组件props
const Title2 = (props) => {
  return (
    <div>
    <p>props:{props.name}</p>
      </div>
  )
}

// 组件传值
// 子组件向父组件传值

class Father extends React.Component {
  state = {
    sth: ''
  }
  handleSon = a => {
    console.log(a)
    this.setState({
      sth: a
    })
  }
  render () {
    return (
      <div>
        <p>父组件接收到的值:{this.state.sth}</p>
        <Child good={this.handleSon}/>
      </div>
    )
  }
}

class Child extends React.Component {
  state = {
    good: 'Money'
  }
  handleClick = () => {
    this.props.good(this.state.good)
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>点击向父组件传值</button>
      </div>
    )
  }
}

// 兄弟组件传值
class Mother extends React.Component {
  state = {
    money: 0
  }
  handleMoney = (a) => {
    this.setState({
      money: this.state.money + a
    })
  }
  render () {
    return (
      <div>
        <Child1 money={this.state.money}/>
        <Child2 comsume={this.handleMoney}/>
      </div>
    )
  }
}

class Child1 extends React.Component {
  render() {
    return (
      <div>
        <p>钱的数量：{this.props.money}</p>
      </div>
    )
  }
}

class Child2 extends React.Component {
  state = {
    money: 100
  }
  handleMoney = () => {
    this.props.comsume(this.state.money)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleMoney}>点击改变钱的数量</button>
      </div>
    )
  }
}

const { Provider, Consumer } = React.createContext()

// context 基础使用
class Granpa extends React.Component {

  render () {
    return (
      <Provider value='pink'>
        <div>
        <Uncle />
        </div>
      </Provider>
    )
  }
}

class Uncle extends React.Component {
  render () {
    return (
      <div>
        <Bro />
      </div>
    )
  }
}

class Bro extends React.Component {
  render () {
    return (
      <div>
        <Consumer>
        
        {data =>(
          <span>{data}</span>
        )}
            
          </Consumer>
      </div>
    )
  }
}

// props深入之children属性
class App1 extends React.Component {
  handle = () => {
    this.props.children()
  }
  render () {
    return (
      <div>
        <button onClick={this.handle}>点击执行props里的函数</button>
      </div>
    )
  }
}

// props 校验
class Measure extends React.Component {
  render () {
    return (
      <div>
      <ul>
        {this.props.colors.map( item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    )
  }
}
Measure.propTypes = {
  colors: PropTypes.array,
  a: PropTypes.number,
  // fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: PropTypes.shape({
    area: PropTypes.string
  })
}

Measure.defaultProps = {
  colors: [
    'green',
    'yellow'
  ]
}


// ReactDOM.render(<Title2 name='Jack' age={19} />, document.getElementById('root'))
// ReactDOM.render(<Granpa />, document.getElementById('root'))
// ReactDOM.render(<App1>
//   {()=> console.log('我是一个函数子节点')}
// </App1>, document.getElementById('root'))
ReactDOM.render(<Measure />, document.getElementById('root'))
// colors={['red','blue']}
