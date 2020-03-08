import React from 'react'

// 函数组件事件绑定
// const Hello = function () {
//   let handleClick = function () {
//     console.log('点击事件被触发了')
//   }
//   return (
//     <h1 onClick={handleClick} className='title' style={{color: 'red',backgroundColor: 'blue'}}> 我是一个标题 <span></span> </h1>
//   )
// }

// 类组件事件绑定
class Hello extends React.Component {
  handleClick () {
    console.log('类组件绑定的点击事件被触发了')
  }
  prevent (e) {
    e.preventDefault()
    console.log('跳转失败，因为默认行为被阻止了')
  }
  render () {
    return (
      <h1 onClick={this.handleClick} className='title' style={{color: 'red',backgroundColor: '#eee'}}> 我是一个标题 <a onClick={this.prevent} href='https://baidu.com' >我是一个链接</a> </h1>
    )
  }
}
export default Hello