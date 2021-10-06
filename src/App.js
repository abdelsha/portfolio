
import { Route, Switch} from 'react-router-dom';
import React, { Component} from 'react'
import { useEffect } from 'react';



import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import Skills from './Pages/Skills';
import Layout from './components/Layout/Layout';
import Accounts from './Pages/Accounts';
import Login from './components/Forms/Login';
import { render } from 'react-dom';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App (props){
   useEffect(() => {
     props.getUserAuth();
     
   },[]);


  return (
    <Layout> 
      <Switch>
        <Route path='/' exact={true}>
          <Homepage></Homepage>
        </Route>
        <Route path='/Contact' exact={true}>
          <Contact></Contact>
        </Route>
        <Route path='/Experience' exact={true}>
          <Experience></Experience>
        </Route>
        <Route path='/Portfolio' exact={true}>
          <Portfolio></Portfolio>
        </Route>
        <Route path='/Skills' exact={true}>
          <Skills></Skills>
        </Route>
        <Route path='/Accounts' exact={true}>
          <Accounts></Accounts>
        </Route>
        <Route path='/Login' exact={true}>
          <Login></Login>
        </Route>


      </Switch>
    </Layout>

  );
}

const mapStateToProps = (state) =>{
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default  connect(mapStateToProps,mapDispatchToProps)( App);