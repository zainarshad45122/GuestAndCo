import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Login from './views/Login/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import Signup from './views/Signup/Signup';
import Dashboard from './views/Dashbaord/Dashboard';
import UserProfile from './views/Profile/UserProfile';
import Agents from './views/Agents/Agents';
import RecentTransactions from './views/RecentTrasactions/RecentTransactions';
import RegisterProperty from './views/Property/RegisterProperty/RegisterProperty';
import PropertyDetail from './views/Property/PropertyDetail/PropertyDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Route exact path="/"  />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/transactions" component={RecentTransactions} />
          <Route exact path="/property/register" component={RegisterProperty} />
          <Route exact path="/property/detail" component={PropertyDetail} />
         
        </div>
      </Router>
    </ThemeProvider>
   
  );
}

export default App;
