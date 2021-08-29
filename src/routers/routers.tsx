import {Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {IonRouterOutlet} from "@ionic/react";
import React from "react";
import {VisitDetails} from "../pages/VisitDetails/VisitDetails";
import {SelectSpecialist} from "../pages/SelectSpecialist/SelectSpecialist";


export const Routers = () => {
    return (
        <Switch>
            <Route exact path="/home">
                <Home/>
            </Route>
            <Route exact path="/tab2">
                <Home/>
            </Route>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route exact path="/visitDetail" component={VisitDetails}/>
            <Route exact path="/selectSpecialist" component={SelectSpecialist}/>
        </Switch>
    )
}
