import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Proptypes from 'prop-types'
import img from './logo512.png'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    // this.forceUpdate()
  }
  componentDidMount () {
    // console.log(document.getElementById('id'))
  }
  render () {
    console.warn('render')
    return (
      <div>
        {
          this.state.count > 4
          ? (<h3>计数结束</h3>)
          : (<Counter count={this.state.count}/>)
        }
        <button id='id' onClick={this.handleClick}>点击+1</button>
      </div>
    )
  }
}


class Counter extends React.Component {
  componentDidMount () {
    // console.log(document.getElementById('ha'))
    this.timer = setInterval(()=> {
      console.log('哈哈哈')
    },666)
  }
  componentDidUpdate () {
    console.warn('componentDidUpdate')
  }
  render () {
    console.warn('---子组件render')
    return (
      <div>
        <p id='ha'>计数器：{this.props.count}</p>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
}

Counter.propTypes = {
  counter: Proptypes.array
}

// 使用组件属性render复用数据

// class Mouse extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       x: 0,
//       y: 0
//     }
//   }
//   handleMouseMove  = e => {
//     this.setState({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   componentDidMount () {
//     window.addEventListener('mousemove', this.handleMouseMove)
//   }
//   render () {
//     return (
//       this.props.render(this.state)
//     )
//   }
// }

// class Mou extends React.Component {
//   render () {
//     return (
//       <div>
//         <Mouse render={ mouse => (<p>{mouse.x}</p>)}/>
//         <Mouse render={ mouse => (
//           <img src={img} alt='logo' style={{
//             position: 'absolute',
//             top: mouse.y -50,
//             left: mouse.x -50,
//             width: 100,
//             height: 100
//           }} />
//         )} />
//       </div>
//     )
//   }
// }

// 使用组件children 复用数据

class Mouse extends React.Component {
  constructor () {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove  = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount () {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  render () {
    return (
      this.props.children(this.state)
    )
  }
}
Mouse.propType = {
  children: Proptypes.func.isRequired
}

class Mou extends React.Component {
  render () {
    return (
      <div>
        <Mouse>
        {
          mouse => (<p>{mouse.x}</p>)
        }
        </Mouse>
        <Mouse>
          {
            mouse => (
              <img src={img} alt='logo' style={{
                position: 'absolute',
                top: mouse.y -50,
                left: mouse.x -50,
                width: 100,
                height: 100
            }}/>)
          }
        </Mouse>
      </div>
    )
  }
}

// 使用高阶组件
function withMouse (WrapperedComponent) {
  class Mouse extends React.Component {
    constructor () {
      super ()
      this.state = {
        x: 0,
        y: 0
      }
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount () {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount () {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
    render () {
      return <WrapperedComponent {...this.state}></WrapperedComponent>
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrapperedComponent)}`
  return Mouse
}

function getDisplayName (WrapperedComponent) {
  return WrapperedComponent.displayName || WrapperedComponent.name || 'component'
}

class Info extends React.Component {
  render () {
    return (
      <div>
        <p>位置信息：</p>
        <h2>{this.props.x}</h2>
        <h2>{this.props.y}</h2>
      </div>
    )
  }
}

class Cat extends React.Component {
  render () {
    return (
      <div>
        <img src={img} alt='猫图片' style={{
          position: 'absolute',
          top: this.props.y -50,
          left: this.props.x -50,
          height: 100,
          width: 100
        }}/>
      </div>
    )
  }
}

const MousemoveInfo = withMouse(Info)
const CatImg = withMouse(Cat)

class HOC extends React.Component {
  render () {
    return (
      <div>
        <MousemoveInfo />
        <CatImg />
      </div>
    )
  }
}

// setState 推荐语法
class Num extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    console.log('dianji')
    this.setState((state,props) => {
      return {
        number: state.number + 1
      }
    })
  }
  render () {
    return (
      <div>
        <p>计数器: {this.state.number}</p>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

ReactDOM.render(<Num />, document.getElementById('root'))