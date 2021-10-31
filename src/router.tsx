import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home/home';
import { AboutMe } from './pages/about-me/about-me';
import { Projects } from './pages/Projects/projetcs';

export const Routing = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/inicio" />
                <Route path="/inicio" component={Home} />
                <Route path="/acerca-de-mi" component={AboutMe} />
                <Route path="/proyectos" component={Projects} />
            </Switch>
        </BrowserRouter>
    );

};

