import {Breadcrumb, Button, Col, Collapse, DatePicker, Form, Input, Radio, Row, Select, Table} from 'antd';
import React, {useState} from "react";
import {CaretRightOutlined} from '@ant-design/icons';
import {FaArrowCircleDown, FaArrowDown, FaArrowUp, FaPlusCircle} from 'react-icons/fa'


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const MaterialEntryToWorkStationCreate = () => {
    const [detailType, setDetailType] = useState('barCode');
    const [barCodeSelected, setBarCodeSelected] = useState();
    const TableColumns = [
        {
            title: 'ردیف',
            dataIndex: 'index',
            key: 'index',
            ellipsis: true,
        },
        {
            title: 'ماده',
            dataIndex: 'material',
            key: 'material',
            ellipsis: true,
        },
        {
            title: 'مقدار با واحد اصلی',
            dataIndex: 'unitvalue',
            key: 'unitvalue',
            ellipsis: true,
        },
        {
            title: 'مقدار با واحد دوم',
            dataIndex: 'secondUnitValue',
            key: 'secondUnitValue',
            ellipsis: true,
        },
        {
            title: 'عملیات',
            dataIndex: 'operation',
            key: 'operation',
            ellipsis: true,
        },
    ]
    return (<>
        <Breadcrumb className='mb-10' separator='>'>
            <Breadcrumb.Item>انبار</Breadcrumb.Item>
            <Breadcrumb.Item>مواد</Breadcrumb.Item>
            <Breadcrumb.Item>رسید ورود مواد به ایستگاه کاری</Breadcrumb.Item>
            <Breadcrumb.Item>افزودن</Breadcrumb.Item>
        </Breadcrumb>
        <Form
            name="basic"
            // labelCol={{span: 8,}}
            // wrapperCol={{span: 16,}}
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Row>
                <Col span={12}>
                    <Form.Item
                        label='شماره سند'
                        name="docNumber"
                        rules={[{
                            required: true, message: 'لطفا شماره سند را وارد کنید!',
                        },]}
                        className='mx-2'
                    >
                        <Input placeholder='لطفا شماره سند را وارد کنید' size='large'/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='تحویل دهنده'
                        name="delivery"
                        rules={[{
                            required: true, message: 'لطفا تحویل دهنده را انتخاب کنید!',
                        },]}
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            // onChange={handleChange}
                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                value: '1',
                                label: 'عرفان ابوئی'
                            }, {value: '2', label: 'مجتبی رمضانی'}, {
                                value: '3',
                                label: 'محسن جعفری',
                                disabled: true
                            },]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="تحویل گیرنده"
                        name="transferee"
                        rules={[{
                            required: true, message: 'لطفا تحویل گیرنده را انتخاب کنید!',
                        },]}
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                value: '1',
                                label: 'عرفان ابوئی'
                            }, {value: '2', label: 'مجتبی رمضانی'}, {
                                value: '3',
                                label: 'محسن جعفری',
                                disabled: true
                            },]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='انبار مبدا'
                        name="delivery"
                        rules={[{
                            required: true, message: 'لطفا انبار مبدا را انتخاب کنید!',
                        },]}
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                value: '1',
                                label: 'انبار پایه'
                            }, {value: '2', label: 'انبار مواد'}, {
                                value: '3',
                                label: 'انبار اقلام مصرفی',
                                disabled: true
                            },]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='انبار ایستگاه کاری'
                        name="originWarehouse"
                        rules={[{
                            required: true, message: 'لطفا انبار ایستگاه کاری را انتخاب کنید!',
                        },]}
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                value: '1',
                                label: 'انبار پایه'
                            }, {value: '2', label: 'انبار مواد'}, {
                                value: '3',
                                label: 'انبار اقلام مصرفی',
                                disabled: true
                            },]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='ترازو'
                        name="scale"
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            options={[
                                {value: '0', label: 'لطفا انتخاب کنید'},
                                {value: '1', label: 'انبار پایه'},
                                {value: '2', label: 'انبار مواد'},
                                {value: '3', label: 'انبار اقلام مصرفی', disabled: true},
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='تاریخ ورود'
                        name="entryDateTime"
                        className='mx-2'
                    >
                        <DatePicker size='large' className='w-full' placeholder='لطفا تاریخ ورود را وارد کنید'/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label='شرح سند'
                        name="description"
                        className='mx-2'
                    >
                        <Input.TextArea
                            size='large'
                            showCount
                            maxLength={100}
                            placeholder="شرح سند"
                        />
                    </Form.Item>
                </Col>
            </Row>

            <div className='text-center'>
                <Radio.Group
                    size='large'
                    name='detailType'
                    options={[{
                        label: 'بارکدی', value: 'barCode',
                    }, {
                        label: 'دستی', value: 'static',
                    },]}
                    onChange={(e) => {
                        setDetailType(e.target.value)
                    }}
                    optionType="button"
                    buttonStyle='solid'
                    value={detailType}
                />
            </div>
            {detailType === 'barCode' ? (
                <>
                    <Collapse
                        bordered={false}
                        expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
                        className='mt-4 bg-white'
                    >
                        <Collapse.Panel header="جستجو بر اساس بارکد" key="1"
                                        className='mb-[12px] bg-gray-200 border-0 rounded-3xl'>
                            <Form.Item
                                label='بارکد'
                                name="barCode"
                                className='mx-2'
                            >
                                <Input size='large' placeholder='لطفا بارکد را وارد کنید'/>
                            </Form.Item>
                        </Collapse.Panel>
                        <Collapse.Panel header="جستجو" key="2" className='mb-[12px] bg-gray-200 border-0 rounded-3xl'>
                            <Form.Item
                                label='بارکد'
                                name="barCode"
                                className='mx-2 '
                            >
                                <Row>
                                    <Col span={22}>
                                        <Select
                                            size='large'
                                            placeholder='لطفا انتخاب کنید'
                                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                                value: '1',
                                                label: 'بارکد 1'
                                            }, {value: '2', label: 'باکد 2'}, {
                                                value: '3',
                                                label: 'بارکد 3',
                                                disabled: true
                                            },]}
                                            className='w-full'
                                            onChange={(value, option) => {
                                                setBarCodeSelected(option);

                                            }}
                                        />
                                    </Col>
                                    <Col span={2}>
                                        <div className='text-center'>
                                            <Button
                                                type='link'
                                                className=''>
                                                <FaPlusCircle className='text-3xl text-emerald-500'/>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Collapse.Panel>
                    </Collapse>
                </>
            ) : (<>
                <Col span={24}>
                    <Form.Item
                        label='بارکد'
                        name="barCode"
                        className='mx-2'
                    >
                        <Select
                            size='large'
                            placeholder='لطفا انتخاب کنید'
                            options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                value: '1',
                                label: 'بارکد 1'
                            }, {value: '2', label: 'باکد 2'}, {value: '3', label: 'بارکد 3', disabled: true},]}
                            className='w-full'
                            onChange={(value, option) => {
                                console.log(option)
                                setBarCodeSelected(option);
                            }}
                        />
                    </Form.Item>
                </Col>
                {barCodeSelected !== null && barCodeSelected !== undefined ? (<>
                    <div className='bg-gray-100 rounded-3xl py-4'>
                        <Row className='mx-5'>
                            <Col span={6} className='my-auto'>
                                        <span>
                                            واحد اصلی : کیلوگرم
                                        </span>
                            </Col>
                            <Col span={18}>
                                <Input size='large' placeholder='لطفا مقدار واحد اصلی را وارد کنید'/>
                            </Col>
                        </Row>
                        <div className='text-center'>
                            <Row className='mx-5'>
                                <Col span={6}></Col>
                                <Col span={18} className=''>
                                    <Radio.Group
                                        size='large'
                                        name='exchange'
                                        options={[{
                                            label: <FaArrowDown className='mt-3'/>, value: 'unitToSecondUnit',
                                        }, {
                                            label: <FaArrowUp className='mt-3'/>, value: 'secondUnitToUnit',
                                        },]}
                                        optionType="button"
                                        buttonStyle='outline'
                                        className='my-5'
                                    />
                                </Col>
                            </Row>
                        </div>
                        <Row className='mx-5'>
                            <Col span={6} className='my-auto'>
                                        <span>
                                            واحد دوم : گرم
                                        </span>
                            </Col>
                            <Col span={18}>
                                <Input size='large' placeholder='لطفا مقدار واحد دوم را وارد کنید'/>
                            </Col>
                        </Row>
                    </div>
                    <Col span={24}>
                        <div className='text-center mt-5'>
                            <Button
                                type='link'
                                className=''>
                                <FaArrowCircleDown className='text-3xl text-emerald-500'/>
                            </Button>
                        </div>
                    </Col>
                </>) : null}
            </>)}
            <Table
                className='mx-2'
                showSorterTooltip={false}
                columns={TableColumns}
                // dataSource={data}
                // onChange={handleChange}
                // scroll={{x: 1300}}
            />
            <Form.Item className=''>
                <Button type="primary" htmlType='submit'
                        className='float-left bg-green-700 rounded-3xl px-4 mt-5 hover:bg-green-500'>
                    ثبت
                </Button>
            </Form.Item>
        </Form>
    </>);

};
export default MaterialEntryToWorkStationCreate;
