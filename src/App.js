import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
//import SingleRecipe from './components/sidebar-components/SingleRecipe';


class App extends React.Component{
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className='components-parent'>
            <Sidebar/>
            <Switch>
              <Route path="/" component={Landing}/>
            </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App