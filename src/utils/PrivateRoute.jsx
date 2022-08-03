import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {Layout} from '../pages/Layout'

export const PrivateRoute = () => {
    const isLogged =  JSON.parse(localStorage.getItem('signin'))
    return isLogged?.AccessToken ? 
        <Layout>
            <Outlet/>
        </Layout>
    : <Navigate to="/login"/>
}