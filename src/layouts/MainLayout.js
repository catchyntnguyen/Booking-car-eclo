import React from 'react';
import Myheader from '../components/header';
import Myfooter from '../components/footer';
const MainLayout = ({ children }) => {
    return (
        <>
            <Myheader />
                    {children}
            <Myfooter />
        </>
    );
};

export default MainLayout;
