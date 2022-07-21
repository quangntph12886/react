import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
import { add } from '../../api/product';
import { Navigate, useNavigate } from 'react-router-dom';


const ProductCreate = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        add(values).then(res =>{
            navigate("/admin/product/list")
        })
    }

    return (

        <div>
            <Row>
                <Col span={8}><Form.Item valuePropName="fileList">
                    <Upload
                        maxCount={1}
                        beforeUpload={() => false}
                        listType="picture-card" >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 16 }}>Thêm ảnh</div>
                        </div>
                    </Upload>
                </Form.Item></Col>


                <Col span={16}>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Ten sp"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="gia"
                            name="price"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Danh muc"
                            name="categories"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="mo ta dai"
                            name="desc"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                them
                            </Button>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>
        </div>

    )
}

export default ProductCreate
