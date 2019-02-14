import React from 'react'
import './notification.less'
import {Card,Button,notification,Icon} from 'antd'
const openNotification = () => {
  notification.open({
    message: 'Loading Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="loading" style={{ color: '#108ee9' }} />,
  });
};
export default class Notifications extends React.Component{
  notificationTip=(type)=>{
    notification[type]({
      message: `${type} title`,
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }
  render(){
    return(
      <div>
        <Card title='全局提示框' className='notifications-card'>
          <Button type='primary' onClick={()=>{this.notificationTip('success')}}>Success</Button>
          <Button type='primary' onClick={()=>{this.notificationTip('info')}}>Info</Button>
          <Button type='primary' onClick={()=>{this.notificationTip('warning')}}>Warning</Button>
          <Button type='primary' onClick={()=>{this.notificationTip('error')}}>Error</Button>
          <Button type='primary' onClick={openNotification}>Loading</Button>
        </Card>
      </div>
    )
  }
}