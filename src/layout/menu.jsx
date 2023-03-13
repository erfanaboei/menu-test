import {FileOutlined, PieChartOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {Button, Layout, Menu} from 'antd';
import {useState} from 'react';

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon = <span></span>, children) {
    if (icon === null) {
        icon = <span></span>
    }
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('داشبورد', '1', <PieChartOutlined/>),
    getItem('تولید', '2', <UserOutlined/>),
    getItem('انبار', 'sub1', <UserOutlined/>, [
        getItem('اطلاعات پایه', '3',null ,[getItem('بارکد', '6'), getItem('لیبل', '8')]),
        getItem('مواد', '4'),
        getItem('اقلام مصرفی', '5'),
    ]),
    getItem('اطلاعات پایه', 'sub2', <UserOutlined/>, [getItem('بارکد', '6'), getItem('لیبل', '8')]),
    getItem('تست', '9', <FileOutlined/>),
];
const CustomMenu = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }
    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        className='h-screen'
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header className='p-0 bg-white' style={{padding: 0}}>
                        <Button type='ghost' onClick={toggleCollapse}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        </Button>
                    </Header>
                    <Content
                        className='bg-white'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default CustomMenu;