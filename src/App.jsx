import React from 'react'
import './App.css'
import { AuthProvider } from "./contexts/Auth"
import SignUpForm from './Components/SignUpForm'
import  manager from './Components/manager'
import Dashboard from "./Components/Dashboard"
import LoginForm from './Components/LoginForm'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Components/home'
import ResetPass from './Components/ResetPass'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {    
    return (
                <Router>
                    <AuthProvider> 
                        <Switch>
                            <PrivateRoute exact path ='/' component={Home} />
                            <Route path='/Signup' component={SignUpForm}/>
                            <Route path='/manager' component={manager} />
                            <Route path='Dashboard' component={Dashboard} />
                            <Route path='/Login' component={LoginForm} />
                            <Route path='/Reset_password' component={ResetPass} />
                        </Switch>
                    </AuthProvider>
                </Router>
     );
}
 
export default App
