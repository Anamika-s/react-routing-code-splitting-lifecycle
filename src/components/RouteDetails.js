import React, {lazy, Suspense} from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
// import { AboutUs } from './AboutUs'
import { Login } from './Login'
import { Links } from './Links'
import { Search } from './Search'
const AboutUs = lazy(()=> import ('./AboutUs'));

// import { ContactUs } from './ContactUs'
const ContactUs = lazy(()=> import ('./ContactUs'))

// import { ContactUs } from './ContactUs';
export const RouteDetails = () => {
  return (
    <div>
     <BrowserRouter>
     <Links/>
     <Suspense fallback={<h1> Page is Loading </h1>}>
    <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path='/search/:para' element={<Search/>}></Route> */}
  <Route path='*' element={<h1> This page do not exist </h1>}></Route>
    </Routes>
    </Suspense>
     </BrowserRouter>

    </div>
  )
}
