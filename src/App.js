import * as React from 'react'
import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './components/Products';
import Logout from './components/Logout';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Jira from './components/Jira';
import Backlog from './components/Backlog';
import Board from './components/Board';


function App(ok) {
      // 1-layer el soda
      // 2-javascript of the navbar
  let islogged = ok.logged
  return (
  
    // 1- npm init
    // lazem el package.json takon mawgoda abl ay package hat7mlha
    //2- npm i -g nodemon to install this module that updated the server automatically when server updated(keda baynzl 3al pc koolooo bas law m4 globall haynzel fel dependincy )
    //3- wnta bat run akteb nodemon (esm el filee) 

    
    <Fragment>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/jira' element={<Jira/>}>

            <Route path='' element={<Board/>}/>
            <Route path='backlog' element={<Backlog/>}/>
          </Route>

          <Route path='/backlog' element={<Backlog/>}/>
      </Routes>
      {/* <Footer/> */}
    </Fragment>
  );
}
export default App;