import React from 'react'
import './message.less'
import {message,Card,Button} from 'antd'
export default class Messages extends React.Component{
  messageTip=(type)=>{
    message.type('This is a normal message');
  }
  render(){
    return(
      <div>
       <Card title='全局提示框' className='message-card'>
        <Button type='primary'>Normal</Button>
        <Button type='primary'>Success</Button>
        <Button type='primary'>Error</Button>
        <Button type='primary'>Warning</Button>
       </Card>
      </div>
    )
  }
}