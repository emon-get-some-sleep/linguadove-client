import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavigationMenu from '../pages/NavigationMenu/NavigationMenu';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Main;