import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Nomatch from './pages/Nomatch/index'
import Admin from './Admin'
import Button from  './pages/ui/button/button'
import Modal from  './pages/ui/modal/modal'
import Spin from  './pages/ui/spin/spin'
import Notification from  './pages/ui/notification/notification'
import App from './App'
export default class Router extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <App>
          <Route path='/' exact component={App} />
          <Route path='/admin' render={()=>
            <Admin>
              <Switch>
              <Route path='/admin/ui/buttons' component={Button}></Route>
              <Route path='/admin/ui/modals' component={Modal}></Route>
              <Route path='/admin/ui/loading' component={Spin}></Route>
              <Route path='/admin/ui/notifications' component={Notification}></Route>
              <Route component={Nomatch}></Route>
              </Switch>
            </Admin>
          } />
        </App>
      </BrowserRouter>
    )
  }
}