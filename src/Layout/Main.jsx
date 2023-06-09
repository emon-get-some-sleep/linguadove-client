import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2 className="text-xl">Main Page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;