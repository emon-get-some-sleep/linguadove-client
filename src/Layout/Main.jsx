import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '../pages/NavigationMenu/NavigationMenu';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;