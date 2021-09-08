import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import React from 'react';
import { VisitDetails } from '../pages/VisitDetails/VisitDetails';
import { SelectSpecialist } from '../pages/SelectSpecialist/SelectSpecialist';
import { SelectServices } from '../pages/SelectServices/SelectServices';
import { SelectDate } from '../pages/SelectDate/SelectDate';
import { SpecialistDetail } from '../pages/SpecialistDetail/SpecialistDetail';
import { UserRegistration } from '../pages/UserRegistration/UserRegistration';
import { Checkout } from '../pages/Chekout/Chekout';
import { Verification } from '../pages/Verification/Verification';
import { User } from '../pages/User/User';

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/userRegistration">
        <UserRegistration/>
      </Route>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
      <Route path="/services" component={SelectServices}/>
      <Route exact path="/visitDetail" component={VisitDetails}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/selectDate" component={SelectDate}/>
      <Route exact path="/selectSpecialist" component={SelectSpecialist}/>
      <Route exact path="/specialistDetail" component={SpecialistDetail}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/verification" component={Verification}/>
    </Switch>
  );
};
