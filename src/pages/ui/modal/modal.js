import React from 'react';
import {Card,Modal,Button} from 'antd'
import './modal.less'
const confirm = Modal.confirm;
export default class Modals extends React.Component{
  state={
    openVisible:false,
    topVisible:false,
    bottomVisible:false,
    centerVisible:false
  }
  handleOk=()=>{
    this.setState({
      openVisible:!this.state.openVisible
    })
  }
  handleBottom=()=>{
    this.setState({
      bottomVisible:!this.state.bottomVisible
    })
  }
  handleTop=()=>{
    this.setState({
      topVisible:!this.state.topVisible
    })
  }
  handleCenter=()=>{
    this.setState({
      centerVisible:!this.state.centerVisible
    })
  }
  confirm=()=>{
    confirm({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  info=()=>{
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  success=()=>{
    Modal.success({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  error=()=>{
    Modal.error({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  warning=()=>{
    Modal.warning({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  render(){
    return(
      <div>
        <Card title='基础模态框' className='modal-card'>
          <Button type='primary' onClick={this.handleOk}>Open</Button>
          <Button type='primary' onClick={this.handleBottom}>自定义页脚</Button>
          <Button type='primary' onClick={this.handleTop}>顶部20px弹窗</Button>
          <Button type='primary' onClick={this.handleCenter}>水平居中</Button>
        </Card>
        <Card title='信息确认框' className='modal-card'>
          <Button type='primary' onClick={this.confirm}>Confirm</Button>
          <Button type='primary' onClick={this.info}>Info</Button>
          <Button type='primary' onClick={this.success}>Success</Button>
          <Button type='primary' onClick={this.error}>Error</Button>
          <Button type='primary' onClick={this.warning}>Warning</Button>
        </Card>
        {/* open Modal */}
        <Modal
          title="普通模态框"
          visible={this.state.openVisible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <p>open内容部分</p>
        </Modal>
        {/* 20px modal */}
        <Modal
          style={{top:20}}
          title="顶部20px"
          visible={this.state.topVisible}
          onOk={this.handleTop}
          onCancel={this.handleTop}
        >
          <p>open内容部分</p>
        </Modal>
        {/* 自定义 modal */}

        <Modal
          title="自定义页脚"
          visible={this.state.bottomVisible}
          onOk={this.handleBottom}
          onCancel={this.handleBottom}
          okText='确定'
          cancelText='取消'
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>open内容部分</p>
        </Modal>
        {/* 水平居中 modal */}
        <Modal
          title="水平垂直居中"
          centered
          visible={this.state.centerVisible}
          onOk={this.handleCenter}
          onCancel={this.handleCenter}
        >
          <p>open内容部分</p>
        </Modal>
      </div>
    )
  }
}