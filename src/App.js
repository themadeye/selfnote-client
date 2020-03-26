import React, { Component }  from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MainFrame from './components/mainFrame';

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <MainFrame></MainFrame>
          </div>
        </Router>
      </MuiThemeProvider>
        
    );
  }
}

export default App;
