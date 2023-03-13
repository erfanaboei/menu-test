import React from "react";
import {Breadcrumb} from "antd";

const Home=()=>{
    return(
        <>
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className='p-[24px] min-h-[360px]'
            >
                Hello User
            </div>
        </>
    );
}

export default Home;