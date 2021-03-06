import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Home from '../Home/home';
import RegistrationPage from '../RegistrationPage/registration-page';
import Dashboard from '../Dashboard/dashboard';
import ChildWrapper from '../ChildWrapper/child-wrapper';
import Parent from '../Parent/parent';
import ParentSetup from '../Parent/parent-setup';
import Privacy from '../Privacy/privacy';
import AddChildWrapper from '../AddChildWrapper/add-child-wrapper';
import Authorization from '../Authorization/authorization';
import NotFound from '../ErrorScreens/not-found';
import ServerError from '../ErrorScreens/server-error';
import Forbidden from '../ErrorScreens/forbidden';
import Loading from '../Loading/loading';
import PrivateRoute from '../PrivateRoute/private-route';
import Alert from '../Alert/alert';

export class App extends React.Component {

  render() {
    return (
        <div className="app">
          <Navbar />       
          <main role="main">
            <Loading 
              loading={this.props.appState.isFetchingUserInfo}
            />
            {this.props.appState.serverErrorMessage && 
              <div>
              <Alert 
                  hasError={this.props.appState.serverErrorMessage.hasError}
                  message={this.props.appState.serverErrorMessage.message}
                />
              </div>
              }
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/register' component={RegistrationPage} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/child' component={ChildWrapper} />
              <PrivateRoute exact path='/parent' component={Parent} />
              <PrivateRoute exact path='/setup' component={ParentSetup} />
              <PrivateRoute path='/authorization' component={Authorization} />
              <PrivateRoute path='/register-child' component={AddChildWrapper} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/no-access' component={Forbidden} />
              <Route exact path='/not-found' component={NotFound} />
              <Route exact path='/server-error' component={ServerError} />
            </Switch>
          </main>          
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.appState
});

export default withRouter(connect(mapStateToProps)(App));


