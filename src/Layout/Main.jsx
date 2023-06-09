import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '../pages/NavigationMenu/NavigationMenu';

const Main = () => {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;