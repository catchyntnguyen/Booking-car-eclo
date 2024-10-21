import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound';
import LazyLoad from '../components/LazyLoad';

const Myhome = LazyLoad(() => import('../pages/u-home/page'));
const Myabout = LazyLoad(() => import('../pages/u-about/page'));
const Myblog = LazyLoad(() => import('../pages/u-blog/page'));
const Myservice = LazyLoad(() => import('../pages/u-service/page'));
const Myfleet = LazyLoad(() => import('../pages/u-fleet_list/page'));
const Mycontact = LazyLoad(() => import('../pages/u-contact/page'));
const Myblogdetail = LazyLoad(() => import('../pages/u-blog_single/page'));
const Myourfleet = LazyLoad(() => import('../pages/u-our_fleet/page'));
// router payment
const Mybookingvehicle = LazyLoad(() => import('../pages/u-booking_vehicle/page'));
const Mybookingpayment = LazyLoad(() => import('../pages/u-booking_payment/page'));
const Mybookingextra = LazyLoad(() => import('../pages/u-booking_extra/page'));
const Mybookingpassenger = LazyLoad(() => import('../pages/u-booking_passenger/page'));
const Mybookingreceved = LazyLoad(() => import('../pages/u-booking_receved/page'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Myhome /></MainLayout>} />
            <Route path="/about" element={<MainLayout><Myabout /></MainLayout>} />
            <Route path="/blogs" element={<MainLayout><Myblog /></MainLayout>} />
            <Route path="/blog/:content" element={<MainLayout><Myblogdetail /></MainLayout>} />
            <Route path="/services" element={<MainLayout><Myservice /></MainLayout>} />
            <Route path="/our_fleet" element={<MainLayout><Myfleet /></MainLayout>} />
            <Route path="/our_fleet/:detail" element={<MainLayout><Myourfleet /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Mycontact /></MainLayout>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
