import React from 'react'
import {Card,Spin,Alert,Switch,Icon} from 'antd'
import './spin.less'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Spins extends React.Component{
  state={
    loading:true
  }
  switchChange=(e)=>{
    this.setState({
      loading:e
    })
  }
  render(){
    return(
      <div>
        <Card title='Spin用法' className='spin-card'>
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
        </Card>
        <Card title='内容遮罩' className='spin-card'>
        <div>
            loading State:<Switch onChange={this.switchChange} defaultChecked style={{marginLeft:10}}/>
        </div>
        <Alert
            message="React"
            description="React大法好  I like it!!!"
            type="info"
            className='spin-children'
          />
        <Spin spinning={this.state.loading}>
        <Alert
            message="React"
            description="React大法好  I like it!!!"
            type="info"
            className='spin-children'
          />
        </Spin>
        <Spin spinning={this.state.loading} tip='加载中' >
        <Alert
            message="React"
            description="React大法好  I like it!!!"
            type="info"
            className='spin-children'
          />
        </Spin>
        <Spin spinning={this.state.loading} tip='加载中' indicator={antIcon}>
        <Alert
            message="React"
            description="React大法好  I like it!!!"
            type="info"
            className='spin-children'
          />
        </Spin>
        </Card>
      </div>
    )
  }
}