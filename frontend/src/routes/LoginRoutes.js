import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing
// tweetsy auth
const Login3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
// const Register3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));
const RegisterWithOTP = Loadable(lazy(() => import('views/pages/authentication3/RegisterWithOTP')));
const ForgetPassword = Loadable(lazy(() => import('views/pages/authentication3/ForgotPassword3')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/login',
            element: <Login3 />
        },
        {
            path: '/register',
            element: <RegisterWithOTP />
            // element: <Register3 />
        },
        {
            path: '/forgot-password',
            element: <ForgetPassword />
            // element: <Register3 />
        }
    ]
};

export default LoginRoutes;
