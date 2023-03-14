import React from "react";
import {Breadcrumb} from "antd";

const {Item} = Breadcrumb;

const Home = () => {
    return (
        <>
            <Breadcrumb className='my-[16px]'>
                <Item>داشبورد</Item>
            </Breadcrumb>
            <div className='p-[24px]'>
                <h1>خوش آمدید</h1>
            </div>
        </>
    );
}

export default Home;