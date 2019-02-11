import React from "react";
import {Button} from 'antd'
export default class Life extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }
  handleClick=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render(h) {
    let style = {
      textAlign:'center'
    }
    return (
      <div style={style}>
        <p>React生命周期介绍</p>
        <p>{this.state.count}</p>
        <Button type='primary' onClick={this.handleClick}>点击加1</Button>
      </div>
    )
  }
}
