
// 1.引入模块
import React from 'react'
import ReactDOM from 'react-dom'
// 引入样式文件
import './index.css'
// 引入单独文件中创建的组件
// import Hello from './Hello'
import Aloha from './Aloha'
// 2.创建元素
// const title = React.createElement('h1', null, 'HelloWorld react脚手架')

// 使用JSX创建元素
// const title = (
//   <h1 className='title'> 我是一个标题 <span></span> </h1>
// )

// 嵌入js表达式
// let name = 'Joey'
// let age = 15
// let dv = <div>我是div</div>

// 但括号中不能写对象，不能写语句

// const title = (
//   <h1 className='title'> 我是{name},我今年{age},{dv} <span></span> </h1>
// )

// 条件渲染
// const isLoading = true
// // const isLoading = false
// const loadData = () => {
//   if(isLoading) {
//     return (<span>正在获取数据</span>)
//   }
//   return (<span>数据获取成功</span>)
// }
// const title = (<h1>数据：{loadData()}</h1>)

// 列表渲染
// const songs = [
//   {id: 1, name: 'say'},
//   {id: 2, name: 'sing'}
// ]
// const title = (
//     <ul>
//       {songs.map(item => <li key={item.id}>{item.name}</li>)}
//     </ul>
// )

// 样式处理
// const title = (
//   <h1 className='title' style={{color: 'red',backgroundColor: 'blue'}}> 我是一个标题 <span></span> </h1>
// )

// 使用函数创建组件
// const Title = () => (<h1 className='title' style={{color: 'red',backgroundColor: 'blue'}}> 我是一个标题 <span></span> </h1>)

// 使用类创建组件
// class Title extends React.Component {
//   render () {
//     return (
//       <h1 className='title' style={{color: 'red',backgroundColor: 'blue'}}> 我是一个标题 <span></span> </h1>
//     )
//   }
// }

// 3.渲染元素
// ReactDOM.render(<Title />, document.getElementById('root'))
// ReactDOM.render(<Hello />, document.getElementById('root'))
ReactDOM.render(<Aloha />, document.getElementById('root'))
