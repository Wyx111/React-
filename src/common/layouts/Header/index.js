import React from 'react'
import { Row,Col } from 'antd'
import './index.less'
export default class Header extends React.Component{
  render(){
    return (
      <div>
        <Row>
          <Col span={24} className='header-title'>
          <span className='header-name'>
            你好，王誉翔
          </span>
          <a href='#' className='header-out'>退出</a>
          </Col>
        </Row>
        <Row>
          <div className='crumbs'>
          <Col span={4}  className='crumbs-title'>首页</Col>
          <Col span={20} className='wecher'>
           <span className='crumbs-date'>2019年02月12日</span>
           <span className='wether-detail'>晴转多云</span>
          </Col>
          </div>
        </Row>
      </div>
    )
  }
}