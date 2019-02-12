import React from 'react'
import { Row,Col } from 'antd'
import moment from 'moment'
import './index.less'
import Fetch from '../../scripts/fetch'
export default class Header extends React.Component{
  state= {
    name:'王誉翔',
    time:''
  }
  componentWillMount(){
    setInterval(()=>{
          this.setState({
          time: moment().format('MMMM Do YYYY, h:mm:ss')
    })
    },1000)
    this.getWecher()
  }
  getWecher=()=>{
    Fetch.Jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location=zhengzhou&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then(res=>{
      let wether = res.results[0].weather_data[0]
      console.log(wether)
      this.setState({
        wether_pic: wether.dayPictureUrl,
        wether_detail: wether.weather
      })
    })
  }
  render(){
    return (
      <div>
        <Row>
          <Col span={24} className='header-title'>
          <span className='header-name'>
            你好，{this.state.name}
          </span>
          <a href='#' className='header-out'>退出</a>
          </Col>
        </Row>
        <Row>
          <div className='crumbs'>
          <Col span={4}  className='crumbs-title'>首页</Col>
          <Col span={20} className='wecher'>
           <span className='crumbs-date'>{this.state.time}</span>
           <img src={this.state.wether_pic} className='wecher-pic'/>
           <span className='wether-detail'>{this.state.wether_detail}</span>
          </Col>
          </div>
        </Row>
      </div>
    )
  }
}