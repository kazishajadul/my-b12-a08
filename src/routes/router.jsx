import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import AllApps from '../pages/AllApps'
import AppDetails from '../pages/AppDetails'
import MyInstallation from '../pages/MyInstallation'
import NotFound from '../pages/NotFound'


export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/apps', element: <AllApps /> },
    { path: '/apps/:id', element: <AppDetails /> },
    { path: '/my-installation', element: <MyInstallation /> },
    { path: '*', element: <NotFound /> }
])