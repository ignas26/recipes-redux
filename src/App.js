import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';


class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Sidebar/>
            <Switch>
              <Route path="/" component={Landing}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App