
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Suspense } from './components/suspense/suspense';
import { useEffect } from 'react';

import { checkUserSession, setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { onAuthStateListener, createUserDocFromAuth, getCurrentUser } from './util/firebase/firebase.utils';
import { fetchCategoriesStart } from './store/categories/category.reducer';
// import Home from "./routes/home/home.component"
// import Navigation from './routes/navigation/navigation.component';
// import Auth from './routes/auth/auth'
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout'
// import ContactPage from './routes/contact/contact';
const ContactPage = React.lazy(() => import('./routes/contact/contact'))
const Home = React.lazy(() => import("./routes/home/home.component"))
const Navigation = React.lazy(() => import('./routes/navigation/navigation.component'))
const Auth = React.lazy(() => import('./routes/auth/auth'))
const Shop = React.lazy(() => import('./routes/shop/shop.component'))
const Checkout = React.lazy(() => import('./routes/checkout/checkout'))

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
    dispatch(fetchCategoriesStart())
  }, [])
  return (
    <React.Suspense fallback={<Suspense />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
