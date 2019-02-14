import React from 'react';
import {Card,Button,Icon,Radio} from 'antd'
import './button.less'
const ButtonGroup = Button.Group
const RadioGroup = Radio.Group
export default class Buttons extends React.Component{
  state={
    loading:false,
    size:'default'
  }
  enterLoading=()=>{
    this.setState({
      loading:true
    })
  }
  changeSize=(e)=>{
    this.setState({
      size:e.target.value
    })
  }
  render(){
    return(
      <div>
        <Card title='基础按钮' className='button-card'>
          <Button type="primary">主按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">删除按钮</Button>
        </Card>
        <Card title='图形按钮' className='button-card'>
          <Button type="primary"icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button type="danger" icon='delete'>删除</Button>
          <Button type="primary"  icon="search">搜索</Button>
          <Button icon='download'>下载</Button>
        </Card>
        <Card title='loading按钮' className='button-card'>
          <Button type="primary" loading>确定</Button>
          <Button type="primary" shape="circle" loading />
          <Button loading>点击加载</Button>
          <Button shape="circle" loading />
          <Button loading={this.state.loading} onClick={this.enterLoading}>
          关闭
          </Button>
        </Card>
        <Card title='按钮组' className='button-card'>
         <ButtonGroup>
           <Button type="primary" style={{marginRight:0}}>
              <Icon type="left" />Go back
           </Button>
           <Button type="primary">
              <Icon type="right" />Go back
           </Button>
         </ButtonGroup>
        </Card>
        <Card title='按钮尺寸' className='button-card'>
         <RadioGroup onChange={this.changeSize} defaultValue='default'>
          <Radio value='small'>小</Radio>
          <Radio value='default'>中</Radio>
          <Radio value='large'>大</Radio>
          <Button type="primary" size={this.state.size}>主按钮</Button>
          <Button size={this.state.size}>默认按钮</Button>
          <Button type="dashed" size={this.state.size}>虚线按钮</Button>
          <Button type="danger" size={this.state.size}>删除按钮</Button>
         </RadioGroup>
        </Card>
      </div>
    )
  }
}