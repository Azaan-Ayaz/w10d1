import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Policy from './Pages/Policy'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Category from './Pages/Category'
import Dashboard from './User/Dashboard'



const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/category' element = {<Category/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/policy' element = {<Policy/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='*' element = {<Error/>}/>
      </Routes>
    </>
  )
}

export default Router
