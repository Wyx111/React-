import React from 'react'
import { Row, Col} from 'antd'
import Header from './common/layouts/Header'
import Footer from './common/layouts/Footer'
import Nav from './common/layouts/Nav'
import './common/style/common.less'
export default class App extends React.Component {
  render() {
    return (
      <Row className='container'>
         <Col span= {3} className='nav-left'>
          <Nav></Nav>
         </Col>
         <Col span= {21} className='main'>
         <Header></Header>
          <Row className='content'>内容</Row>
          <Footer></Footer>
         </Col>
      </Row>
    )
  }
}