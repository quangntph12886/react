import { Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
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
import { update,getProductById } from '../../api/product';
import { Navigate, useNavigate,useParams } from 'react-router-dom';

const ProductUpdate = () => {

    const [form] = Form.useForm()
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({
        price: null
    })
    const onFinish = (values: any) => {
        update(id,values).then(res=>{
          navigate("/admin/product/list")
        })
        
    };

    useEffect(()=>{
        console.log(id)
        getProductById(id).then(res=>{
            const {data} = res
            console.log(data)
            form.setFieldsValue({
                name:data.name,
                price:data.price,
                desc:data.desc,
                image:data.image,
                categories:data.categories
            })
            
        })
    },[])

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
                    form={form}
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

export default ProductUpdate
