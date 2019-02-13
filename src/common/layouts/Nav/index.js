import React from 'react'
import './index.less'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import MenuConfig from '../../../config/menu.config'
const SubMenu = Menu.SubMenu
export default class Nav extends React.Component{
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  // 渲染菜单
  renderMenu=(data)=>{
    return data.map(item=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
      <Menu.Item key={item.key}>
      <Link to={item.key}>
       {item.title}
      </Link>
      </Menu.Item>
      )
    })
  }
  render(){
    return (
      <div>
        <div className='logo'>
          <img src='http://react-china.org/uploads/default/38/c4b96a594bd352e0.png' className='img-logo'/>
        </div>
        <Menu theme='dark'>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}