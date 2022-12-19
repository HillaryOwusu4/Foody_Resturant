import './App.css';
import React from 'react';
import Navbar from './component/services/Navbar';
import Card from './component/services/card';
import Mainpage from './component/Mainpage.js/maipage';
import { Route, Switch } from 'react-router-dom';
import DetailedDescription from './component/Mainpage.js/DetailedDescription/detailedDescription';

import CartProvider from './component/store/ContextProvider';
import Userform from './component/store/UserForm';
import Authcontext from './component/store/auth-context';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import MainSignup from './component/signup/mainsignup';
import { useContext } from 'react';

import PrivateRoute from './component/store/PrivateRoute';

// import Menu from './component/Menu/menu';
// jdjfskf
import { Suspense } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Menu = React.lazy(() => import('./component/Menu/menu') )
const AboutAs = React.lazy(() => import('./component/About_as.js/AboutUs') )
const CartList  = React.lazy(() => import('./component/store/CartItems') )
const Contact  = React.lazy(() => import('./component/Contact Us/Contact_us') )

function App() {
  const Appcontext = useContext(Authcontext)




  return (
    <div className="App w-full h-[70rem] cursor-pointer flex  justify-center items-center bg-[#D6D0D0] ">
      <Card >
        <CartProvider>
          <Navbar />
          <Suspense fallback={
            <div className='w-full h-full flex justify-center items-center'>
              <MoonLoader color="#d52000" size={30} className=" mt-10  w-[50%] h-[14%]    " />
            </div>
          }>
            <Switch>
              <Route path='/' exact>
                <Mainpage />
              </Route>
              <PrivateRoute path='/menu'>
                <Menu />
              </PrivateRoute>
              <PrivateRoute path='/about'>
                <AboutAs />
              </PrivateRoute>

              <PrivateRoute path='/detailedDescription/:quoteid'>
                <DetailedDescription />
              </PrivateRoute>

              <PrivateRoute path='/cart'>
                <CartList />
              </PrivateRoute>
              <PrivateRoute path='/contact'>
                <Contact />
              </PrivateRoute>

              <Route path='/Signup'>
                <MainSignup />
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>

            </Switch>
          </Suspense>
        </CartProvider>
      </Card>

    </div>
  );
}

export default App;
