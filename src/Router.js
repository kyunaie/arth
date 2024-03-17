import React from 'react'
import { Routes,Route } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import Blog from './pages/Blog'

const Router = () => {
  return (
    <div className='font-sans'>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Router;
