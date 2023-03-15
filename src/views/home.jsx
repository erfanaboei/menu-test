import React from "react";
import {Breadcrumb} from "antd";
import {NavLink} from "react-router-dom";

const {Item} = Breadcrumb;

const Home = () => {
    return (
        <>
            <Breadcrumb className='my-[16px]'>
                <Item>داشبورد</Item>
            </Breadcrumb>
            <div className='p-[24px]'>
                <NavLink to={'/MaterialEntryToWorkStation'}>داشبورد</NavLink>
            </div>
        </>
    );
}

export default Home;