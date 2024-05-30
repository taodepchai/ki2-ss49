import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Bt1 from './components/Bt1';
import Bt2 from './components/Bt2';
import Bt3 from './components/Bt3';
import Bt4 from './components/Bt4';
import Bt5 from './components/Bt5';
import Account from './components/account';
import Admin from './components/admin';
import Product from './components/product';
import CustomLink from './components/CustomLink';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import ListUser from './components/ListUser';
import UserDetail from './components/UserDetail';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        {/* Nav for bt6 */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-1 active1' : 'nav-link-1')}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link-1 active1' : 'nav-link-1')}>Contact</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link-1 active1' : 'nav-link-1')}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? 'nav-link-1 active1' : 'nav-link-1')}>Register</NavLink>

        {/* Nav for bt7 */}
        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link-2 active2' : 'nav-link-2')}>Admin</NavLink>
        <NavLink to="/account" className={({ isActive }) => (isActive ? 'nav-link-2 active2' : 'nav-link-2')}>Account</NavLink>
        <NavLink to="/product" className={({ isActive }) => (isActive ? 'nav-link-2 active2' : 'nav-link-2')}>Product</NavLink> 
      </nav>

      <Routes>
        
        <Route path="/" element={<Bt1 />} />
        <Route path="/contact" element={<Bt2 />} />
        <Route path="/login" element={<Bt3 />} />
        <Route path="/register" element={<Bt4 />} />
        <Route path="*" element={<Bt5 />} />
        {/* Routes for bt6 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
        

        {/* Routes for bt9 */}
        <Route path="/custom-link" element={<CustomLink />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />

        {/* Routes for bt10 */}
        <Route path="/user-list" element={<ListUser />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
