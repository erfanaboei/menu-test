import {Breadcrumb, Button, Col, Collapse, DatePicker, Form, Input, Radio, Row, Select} from 'antd';
import React, {useState} from "react";
import {CaretRightOutlined} from '@ant-design/icons';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const MaterialEntryToWorkStationCreate = () => {
    const [detailType, setDetailType] = useState('barCode');
    const [barCodeSelected, setBarCodeSelected] = useState();
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
                            <Input placeholder='لطفا شماره سند را وارد کنید'/>
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
                            label='تاریخ ورود'
                            name="entryDateTime"
                            className='mx-2'
                        >
                            <DatePicker className='w-full' placeholder='لطفا تاریخ ورود را وارد کنید'/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label='شرح سند'
                            name="description"
                            className='mx-2'
                        >
                            <Input.TextArea
                                showCount
                                maxLength={100}
                                placeholder="شرح شند"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <div className='text-center'>
                    <Radio.Group
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
                        value={detailType}/>
                </div>
                {detailType === 'barCode' ? (<Collapse
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
                                <Input placeholder='لطفا بارکد را وارد کنید'/>
                            </Form.Item>
                        </Collapse.Panel>
                        <Collapse.Panel header="جستجو" key="2" className='mb-[12px] bg-gray-200 border-0 rounded-3xl'>
                            <Form.Item
                                label='بارکد'
                                name="barCode"
                                className='mx-2'
                            >
                                <Select
                                    placeholder='لطفا انتخاب کنید'
                                    options={[{value: '0', label: 'لطفا انتخاب کنید'}, {
                                        value: '1',
                                        label: 'بارکد 1'
                                    }, {value: '2', label: 'باکد 2'}, {value: '3', label: 'بارکد 3', disabled: true},]}
                                    className='w-full'
                                    onChange={(value, option) => {
                                        setBarCodeSelected(option);

                                    }}
                                />
                            </Form.Item>

                        </Collapse.Panel>
                    </Collapse>) : (<>
                        <Col span={24}>
                            <Form.Item
                                label='بارکد'
                                name="barCode"
                                className='mx-2'
                            >
                                <Select
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
                                <Row className='mx-2'>
                                    <Col span={6} className='my-auto'>
                                        <span>
                                            واحد اصلی : کیلوگرم
                                        </span>
                                    </Col>
                                    <Col span={18}>
                                        <Input placeholder='لطفا مقدار واحد اصلی را وارد کنید'/>
                                    </Col>
                                </Row>
                                <div className='text-center'>
                                    <Row className='mx-2'>
                                        <Col span={6}></Col>
                                        <Col span={18} className=''>
                                            <Radio.Group
                                                options={[{
                                                    label: <FaArrowDown className='mt-2'/>, value: 'unitToSecondUnit',
                                                }, {
                                                    label: <FaArrowUp className='mt-2'/>, value: 'secondUnitToUnit',
                                                },]}
                                                onChange={(e) => {
                                                    setDetailType(e.target.value)
                                                }}
                                                optionType="button"
                                                buttonStyle='outline'
                                                value={detailType}
                                                className='my-5'
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <Row className='mx-2'>
                                    <Col span={6} className='my-auto'>
                                        <span>
                                            واحد دوم : گرم
                                        </span>
                                    </Col>
                                    <Col span={18}>
                                        <Input placeholder='لطفا مقدار واحد دوم را وارد کنید'/>
                                    </Col>
                                </Row>
                            </>) : null}
                    </>)}
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
