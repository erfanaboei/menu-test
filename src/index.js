import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from "./error-page";
import MaterialEntryToWorkStationList from "./views/marerialEntryToWorkStation/list";
import CustomMenu from "./layout/menu";
import {ConfigProvider} from "antd";
import Home from "./views/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/materialEntryToWorkStation',
                element: <MaterialEntryToWorkStationList/>,
                errorElement: <ErrorPage/>
            }
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider direction='rtl' theme={{
            token: {
                fontFamily: 'IRANSans'
            }
        }}>
            <CustomMenu>
                <RouterProvider router={router}/>
            </CustomMenu>
        </ConfigProvider>
    </React.StrictMode>
);