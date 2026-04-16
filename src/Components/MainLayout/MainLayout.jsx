import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;