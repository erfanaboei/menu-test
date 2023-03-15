//icons
import {
    PieChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FundProjectionScreenOutlined,
} from '@ant-design/icons';
import {
    MdOutlineWarehouse, MdOutlineInfo, MdOutlineSettings,
    MdReceiptLong, MdOutlineDesignServices, MdLabelOutline,
    MdOutlineGroupWork, MdOutlineScale, MdOutlineTimer, MdOutlineLanguage, MdSupportAgent
} from 'react-icons/md';
import {BsDeviceSsd} from 'react-icons/bs';
import {FaBarcode, FaUsers} from "react-icons/fa";
import {GoSettings} from 'react-icons/go';
import {TbRulerMeasure} from "react-icons/tb";
import {SiOpenaccess} from "react-icons/si";
import {AiOutlineApartment} from "react-icons/ai";
//icons
import logo from '../assets/image/logo.png';
import {Button, Layout, Menu} from 'antd';
import {useState} from 'react';
import {NavLink} from "react-router-dom";

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, link, children) {
    return {
        key,
        icon,
        children,
        label: <NavLink to={link}>{label}</NavLink>,
    };
}

const items = [
    getItem('داشبورد', 'dashboard', <PieChartOutlined className='text-[20px]'/>, '/'),
    getItem('تولید', 'production', <FundProjectionScreenOutlined className='text-[20px]'/>, '/production'),
    getItem('انبار', 'warehouse', <MdOutlineWarehouse className='text-[20px]'/>, null, [
        getItem('اطلاعات پایه', 'warehouse-baseInfo', null, null, []),
        getItem('مواد', 'warehouse-material', null, null, [
            getItem('ورود مواد به انبار', 'warehouse-material-entryToWarehouse',
                <MdReceiptLong className='text-[20px]'/>, '/Material/MaterialEntryToWarehouse/list'),
            getItem('ورود مواد به ایستگاه کاری', 'warehouse-material-entryToWorkStation',
                <MdReceiptLong className='text-[20px]'/>, '/Material/MaterialEntryToWorkStation/list'),
            getItem('برگشت مواد از انبار', 'warehouse-material-returnFromWarehouse',
                <MdReceiptLong className='text-[20px]'/>, '/Material/ReturnMaterialFromWarehouse/list'),
            getItem('برگشت مواد از ایستگاه کاری', 'warehouse-material-returnFromWorkStation',
                <MdReceiptLong className='text-[20px]'/>, '/Material/ReturnMaterialFromWorkStation/list'),
        ]),
        getItem('اقلام مصرفی', 'warehouse-accessory', null, null, []),
    ]),
    getItem('سفارش', 'order', <MdReceiptLong className='text-[20px]'/>),
    getItem('دستگاه', 'machine', <BsDeviceSsd className='text-[20px]'/>),
    getItem('اطلاعات پایه', 'baseInfo', <MdOutlineInfo className='text-[20px]'/>, null, [
        getItem('طراحی', 'baseInfo-design', <MdOutlineDesignServices className='text-[20px]'/>, null, [
            getItem('بارکد', 'baseInfo-design-barCode', <FaBarcode className='text-[20px]'/>),
            getItem('لیبل', 'baseInfo-design-label', <MdLabelOutline className='text-[20px]'/>)
        ]),
        getItem('پارامتر', 'parameter', <GoSettings className='text-[20px]'/>),
        getItem('گروه', 'group', <MdOutlineGroupWork className='text-[20px]'/>),
        getItem('واحد', 'unit', <TbRulerMeasure className='text-[20px]'/>),
        getItem('شیفت', 'shift', <MdOutlineTimer className='text-[20px]'/>),
        getItem('زبان', 'language', <MdOutlineLanguage className='text-[20px]'/>),
        getItem('ناحیه کاربری', 'userRange', <FaUsers className='text-[20px]'/>, null, [
            getItem('کاربران', 'useRange-users', <UserOutlined className='text-[20px]'/>),
            getItem('دپارتمان', 'useRange-departman', <AiOutlineApartment className='text-[20px]'/>),
            getItem('سطح دسترسی', 'useRange-permission', <SiOpenaccess className='text-[20px]'/>)
        ]),
        getItem('اپراتور', 'operator', <MdSupportAgent className='text-[20px]'/>),
        getItem('ترازو', 'scale', <MdOutlineScale className='text-[20px]'/>),
    ]),
    getItem('تنظیمات', 'setting', <MdOutlineSettings className='text-[20px]'/>),

];
const CustomMenu = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }
    return (
        <>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='overflow-y-auto'>
                <img src={logo} alt=""/>
                <Menu
                    className='h-[calc(100vh-74px)] border-0'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items}
                />
            </Sider>
            <Layout className={collapsed ? "mr-[95px]" : "mr-[256px]"}>
                <Header className='p-0 bg-white'>
                    <Button type='link' className='text-black' onClick={toggleCollapse}>
                        {collapsed ? <MenuUnfoldOutlined className='text-2xl'/> :
                            <MenuFoldOutlined className='text-2xl'/>}
                    </Button>
                </Header>
                <Content
                    className='bg-white my-[24px] mx-[16px] p-[24px] min-h-[calc(100vh-100px)] rounded-lg'>
                    {children}
                </Content>
            </Layout>
        </>
    );
}

export default CustomMenu;