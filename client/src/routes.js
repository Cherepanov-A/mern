import React from "react";

import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {Redirect, Route, Switch} from "react-router-dom";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path={'/links'} >
                    <LinksPage/>`
                </Route>
                <Route path={'/create'} exact>
                    <CreatePage/>
                </Route>
                <Route path={'/detail/:id'}>
                    <DetailPage/>
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path="/" >

                <AuthPage/>
            </Route>
            <Redirect to={'/'}/>
        </Switch>
    )
}