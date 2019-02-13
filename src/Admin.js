import React from 'react'
import { Row, Col} from 'antd'
import Header from './common/layouts/Header'
import Footer from './common/layouts/Footer'
import Nav from './common/layouts/Nav'
import Home from './common/layouts/Home'
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
          <Row className='content'>
          {/* <Home></Home> */}
          {this.props.children}
          </Row>
          <Footer></Footer>
         </Col>
      </Row>
    )
  }
}