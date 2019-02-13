import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Nomatch from './pages/Nomatch/index'
import Admin from './Admin'
import Button from  './pages/ui/button/button'
import App from './App'
export default class Router extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <App>
          <Route path='/' exact component={App} />
          <Route path='/admin' render={()=>
            <Admin>
              <Route path='/admin/ui/buttons' component={Button}></Route>
              <Route component={Nomatch}></Route>
            </Admin>
          } />
        </App>
      </BrowserRouter>
    )
  }
}