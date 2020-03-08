import React from 'react'

class Aloha extends React.Component {
  // constructor () {
  //   super() 
  //   this.state = {
  //     count: 0
  //   }
  // }
  state = {
    count: 10
  }


  //  bind方法改变this指向
  // constructor () {
  //   super()
  //   this.state = {
  //     count: 0
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick () {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
    <div>
      <h1>计数器：{this.state.count}</h1>
    {/* <button onClick={() => this.handleClick()}>+1</button> */}
    {/* 箭头函数方法改变this指向 */}

    {/* <button onClick={this.handleClick}>+1</button> */}
    {/* bind方法改变this指向 */}

    <button onClick={this.handleClick}>+1</button>
    {/* class实例方法改变this指向 */}
    </div>
    )
  }
}

export default Aloha