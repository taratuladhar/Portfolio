import React from 'react';
import Home from './(routes)/home/home';
import About from './(routes)/about/about';
import Portfolio from './(routes)/portfolio/portfolio';
import Contact from './(routes)/contact/contact';


export default function page() {
  return (
   <>
   <Home/>
   <About/>
   <Portfolio/>
   <Contact/>
   </>
  )
}
