
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Suspense } from './components/suspense/suspense';
import { useEffect } from 'react';

import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { onAuthStateListener, createUserDocFromAuth } from './util/firebase/firebase.utils';
const Home = React.lazy(() => import("./routes/home/home.component"))
const Navigation = React.lazy(() => import('./routes/navigation/navigation.component'))
const Auth = React.lazy(() => import('./routes/auth/auth'))
const Shop = React.lazy(() => import('./routes/shop/shop.component'))
const Checkout = React.lazy(() => import('./routes/checkout/checkout'))
// import Home from "./routes/home/home.component"
// import Navigation from './routes/navigation/navigation.component';
// import Auth from './routes/auth/auth'
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      if (user) {
        createUserDocFromAuth(user)
      }
      dispatch(setCurrentUser(user))

    })
    return unsubscribe
  }, [])
  return (
    <React.Suspense fallback={<Suspense />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </React.Suspense >
  );
}

export default App;
