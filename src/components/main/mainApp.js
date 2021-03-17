import {Route,Switch,BrowserRouter} from 'react-router-dom'
import React from 'react'
import Main from './main' 
import AppState from '../../context/app/appState'

export default function MainApp() {
    return (
      <BrowserRouter>
      <Switch>
      <AppState>
      <Route exact path='/' component={Main}></Route>
      </AppState>
      </Switch>
     </BrowserRouter>
    )
}
