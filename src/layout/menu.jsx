import {
    PieChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FundProjectionScreenOutlined,
} from '@ant-design/icons';
import {MdOutlineWarehouse , MdOutlineInfo , MdOutlineSettings} from 'react-icons/md';
import {Button, Layout, Menu} from 'antd';
import {useState} from 'react';

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('داشبورد', 'dashboard', <PieChartOutlined/>),
    getItem('تولید', 'production', <FundProjectionScreenOutlined/>),
    getItem('انبار', 'warehouse', <MdOutlineWarehouse/>, [
        getItem('مواد', 'warehouse-material'),
        getItem('اقلام مصرفی', 'warehouse-accessory'),
        getItem('اطلاعات پایه', 'warehouse-baseInfo', null, []),
    ]),
    getItem('سفارش', 'order'),
    getItem('دستگاه', 'machine'),
    getItem('اطلاعات پایه', 'baseInfo', <MdOutlineInfo/>, [
        getItem('طراحی', 'baseInfo-design', null, [
            getItem('بارکد', 'baseInfo-design-barCode'),
            getItem('لیبل', 'baseInfo-design-label')
        ]),
        getItem('پارامتر', 'parameter'),
        getItem('گروه', 'group'),
        getItem('واحد', 'unit'),
        getItem('شیفت', 'shift'),
        getItem('زبان', 'language'),
        getItem('ناحیه کاربری', 'userRange', null, [
            getItem('کاربران', 'useRange-users'),
            getItem('دپارتمان', 'useRange-departman'),
            getItem('سطح دسترسی', 'useRange-permission')
        ]),
        getItem('اپراتور', 'operator'),
        getItem('ترازو', 'scale'),
    ]),
    getItem('تنظیمات', 'setting',<MdOutlineSettings/>),

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
                        <Button type='ghost' className='' onClick={toggleCollapse}>
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