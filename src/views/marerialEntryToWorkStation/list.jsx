import React from 'react';
import {Breadcrumb, Button, Table, Tag} from 'antd';
import {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";

const data = [
    {
        key: '1',
        index: '1',
        docNumber: 32,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '2',
        index: '2',
        docNumber: 42,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
    {
        key: '3',
        index: '3',
        docNumber: 85,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '4',
        index: '4',
        docNumber: 12,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
    {
        key: '5',
        index: '5',
        docNumber: 10,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '6',
        index: '6',
        docNumber: 83,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
    {
        key: '7',
        index: '7',
        docNumber: 38,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '8',
        index: '8',
        docNumber: 25,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
    {
        key: '9',
        index: '9',
        docNumber: 24,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '10',
        index: '10',
        docNumber:45,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
    {
        key: '11',
        index: '11',
        docNumber: 32,
        transferee: 'عرفان ابوئی',
        delivery: 'محمد زارع',
        deliveryWarehouse: 'انبار پایه',
        originWarehouse: 'انبار تست',
        userName: 'مجتبی محمدی',
        entryDateTime: '1401/12/12'
    },
    {
        key: '12',
        index: '12',
        docNumber: 42,
        transferee: 'هاتف خرمی',
        delivery: 'حمیدرضا ناظم',
        deliveryWarehouse: 'انبار مواد',
        originWarehouse: 'انبار تست',
        userName: 'هانیه توکلی',
        entryDateTime: '1401/11/19'
    },
];

const MaterialEntryToWorkStationList = () => {
    const location = useLocation();
    console.log(location)
    // const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        // setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const columns = [
        {
            title: 'ردیف',
            dataIndex: 'index',
            key: 'index',
            // filters: [
            //     {
            //         text: 'Joe',
            //         value: 'Joe',
            //     },
            //     {
            //         text: 'Jim',
            //         value: 'Jim',
            //     },
            // ],
            // filteredValue: filteredInfo.name || null,
            // onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.index - b.index,
            sortOrder: sortedInfo.columnKey === "index" ? sortedInfo.order : null,
            ellipsis: true,
            // fixed: 'left',
        },
        {
            title: 'شماره سند',
            dataIndex: 'docNumber',
            key: 'docNumber',
            sorter: (a, b) => a.docNumber - b.docNumber,
            sortOrder: sortedInfo.columnKey === 'docNumber' ? sortedInfo.order : null,
            ellipsis: true,
            // fixed: 'left',
        },
        {
            title: 'تحویل گیرنده',
            dataIndex: 'transferee',
            key: 'transferee',
            sorter: (a, b) => a.transferee.length - b.transferee.length,
            sortOrder: sortedInfo.columnKey === 'transferee' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'تحویل دهنده',
            dataIndex: 'delivery',
            key: 'delivery',
            sorter: (a, b) => a.delivery.length - b.delivery.length,
            sortOrder: sortedInfo.columnKey === 'delivery' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'انبار مقصد',
            dataIndex: 'deliveryWarehouse',
            key: 'deliveryWarehouse',
            sorter: (a, b) => a.deliveryWarehouse.length - b.deliveryWarehouse.length,
            sortOrder: sortedInfo.columnKey === 'deliveryWarehouse' ? sortedInfo.order : null,
            ellipsis: true,
            render: (_, {deliveryWarehouse}) => (
                <>
                    <Tag color='green' key={deliveryWarehouse}>
                        {deliveryWarehouse.toUpperCase()}
                    </Tag>
                </>
            ),
        },
        {
            title: 'انبار اصلی',
            dataIndex: 'originWarehouse',
            key: 'originWarehouse',
            sorter: (a, b) => a.originWarehouse.length - b.originWarehouse.length,
            sortOrder: sortedInfo.columnKey === 'originWarehouse' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'ثبت کننده',
            dataIndex: 'userName',
            key: 'userName',
            sorter: (a, b) => a.userName.length - b.userName.length,
            sortOrder: sortedInfo.columnKey === 'userName' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'تاریخ تحویل',
            dataIndex: 'entryDateTime',
            key: 'entryDateTime',
            sorter: (a, b) => a.entryDateTime - b.entryDateTime,
            sortOrder: sortedInfo.columnKey === 'entryDateTime' ? sortedInfo.order : null,
            ellipsis: true,
        },
    ];
    return (
        <>
            <Breadcrumb className='' separator='>'>
                <Breadcrumb.Item>انبار</Breadcrumb.Item>
                <Breadcrumb.Item>مواد</Breadcrumb.Item>
                <Breadcrumb.Item>رسید ورود مواد به ایستگاه کاری</Breadcrumb.Item>
            </Breadcrumb>
            <Button
                type="primary"
                size='large'
                className='my-5 bg-sky-700 px-6 rounded-3xl hover:bg-sky-400'>
                <NavLink to={location.pathname.replace('/list' , '/create')}>
                    افزودن
                </NavLink>
            </Button>
            <Table
                showSorterTooltip={false}
                columns={columns}
                dataSource={data}
                onChange={handleChange}
                scroll={{x: 1300}}
            />
        </>
    );
}

export default MaterialEntryToWorkStationList