import { Switch, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import Cadastro from "../pages/Cadastro"
import React, { useEffect, useState } from "react"
import Login from "../pages/Login"
import Home from "../pages/Home"


const Routes = () => {

    const [ authentication, setAuthentication ] = useState(false)

    useEffect(() => {

        const token = localStorage.getItem("Capstone-M2: token")

        if(token) {

            setAuthentication(true)
        }
    }, [])

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login 
                authentication={ authentication }
                setAuthentication={ setAuthentication }
                />
            </Route>
            
            <Route path="/cadastro">
                <Cadastro
                authentication={ authentication }
                />
            </Route>

            <Route path="/dashboard">
                <Dashboard
                setAuthentication={ setAuthentication }
                />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export default Routes
