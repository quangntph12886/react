import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
} from 'antd';
import { add } from '../../../api/category';
import { Navigate, useNavigate } from 'react-router-dom';


const categoryCreate = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        add(values).then(res =>{
            navigate("/admin/category/list")
        })
    }

    return (

        <div>
            <Row>
                <Col span={16}>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Ten danh muc"
                            name="name"
                            rules={[{ required: true, message: 'Please input your danh muc!' }]}
                        >
                            <Input />
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

export default categoryCreate
