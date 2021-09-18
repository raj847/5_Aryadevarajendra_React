import React from "react";
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact";
import News from "../pages/News/News";
import Review from "../pages/Review/Review";
import {Route,Switch} from "react-router-dom"


function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact/" exact component={Contact}/>
                <Route path="/news/" exact component={News}/>
                <Route path="/review/" exact component={Review}/>
            </Switch>
        </>
    );
}

export default Routes