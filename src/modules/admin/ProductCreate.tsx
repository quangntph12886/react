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
import { useEffect } from 'react';
import { listCategory } from '../../api/category';
import Category from '../../model/category';
import { upload } from '../../api/image';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select

const ProductCreate = () => {
    const [editor, setEditor] = useState<string>()
    const [category, setCategory] = useState<Category[]>([])
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        const { data } = await upload(values.image.fileList[0].thumbUrl)
        const newProduct = { ...values, image: data.url, longDesc: editor }

        await add(newProduct)
        navigate("/admin/product/list")

    }
    useEffect(() => {
        const getCategory = async () => {
            const { data: category } = await listCategory();
            console.log(category)
            setCategory(category)
        }
        getCategory();
    }, [])

    return (

        <div>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Row>

                    <Col span={8}>
                        <Form.Item name="image" >
                            <Upload
                                maxCount={1}
                                beforeUpload={() => false}
                                listType="picture-card" >
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 16 }}>Thêm ảnh</div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Col>

                    <Col span={16}>
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
                            <InputNumber />
                        </Form.Item>

                        <Form.Item
                            label="Danh muc"
                            name="categoryId"
                        >
                            <Select>
                                {category.map(item => (
                                    <Option key={item.id} value={item.id}>
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="mo ta ngan"
                            name="desc"
                        >
                            <TextArea />
                        </Form.Item>

                        <Form.Item
                            label="mo ta dai"
                        >
                            <ReactQuill theme="snow" value={editor} onChange={setEditor} />
                        </Form.Item>

                        <Form.Item
                            label="trang thai"
                            name="isVisible"
                        >
                            <Switch defaultChecked />

                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                them
                            </Button>
                        </Form.Item>


                    </Col>
                </Row>
            </Form>
        </div>

    )
}

export default ProductCreate
