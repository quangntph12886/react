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
import { listCategory } from '../../api/category';
import Category from '../../model/category';
import { upload } from '../../api/image';
import parse from 'html-react-parser';
import TextArea from 'antd/lib/input/TextArea';
import ReactQuill from 'react-quill';
import IProduct from '../../model/product';

const ProductUpdate = () => {
    const [editor, setEditor] = useState<string>()
    const { Option } = Select
    const [category, setCategory] = useState<Category[]>([])
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>()

    const onFinish = async (values: any) => {
        const {data} = await upload(values.image.fileList[0].thumbUrl)
        const newProduct = {...values,image:data.url,longDesc:editor}
        update(id,newProduct).then(res=>{
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
                longDesc:data.longDesc,
                image:data.image,
                categoryId:data.categoryId
            })
            setEditor(data.longDesc)
            
        })
        const getCategory = async () => {
            const { data: category } = await listCategory();
            console.log(category)
            setCategory(category)
        }
        getCategory();
    },[])

    return (
        <div>
        <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
                autoComplete="off"
                form={form}
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
                            rules={[{ required: true, message: 'Please input your ten san pham!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="gia"
                            name="price"
                            rules={[{ required: true, message: 'Please input your gia!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Danh muc"
                            name="categoryId"
                        >
                            <Select>
                                {category.map(item => (
                                    <Option value={item.id}>
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
                            <ReactQuill  theme="snow" value={editor} onChange={setEditor} />
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

export default ProductUpdate
