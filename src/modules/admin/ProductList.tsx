import { Space, Table, Tag, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState, useEffect } from 'react';
import { list, remove, update } from '../../api/product'
import { useNavigate, Link } from 'react-router-dom';
import IProduct from '../../model/product';
import { listCategory } from '../../api/category';
import { upload } from '../../api/image';

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const columns: ColumnsType<IProduct> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Ảnh',
      key: 'image',
      render: (text, record) => (
        <img src={record.image} alt="" width={100} />
      )
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Mô tả',
      key: 'desc',
      dataIndex: 'desc',
    },
    {
      title: 'Danh mục',
      key: 'categoryId',
      dataIndex: 'categoryId',
      render: (_, record) => (
        <span>{record.category?.name}</span>
      ),
    },
    {
      title: 'Ẩn/hiện ',
      key: 'hide',
      render: (_, record) => (
        <Space size="middle">
          <Switch checked={record.isVisible} onChange={() => handleChangeState(record.id)} />
        </Space>
      ),
    },
    {
      title: 'Cập nhật',
      key: 'update',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/product/update/${record.id}`}>Update</Link>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data)
      setProducts(data);
    }
    getProducts();
  }, [])

  const handleChangeState = async (id: number) => {

    const index = products.findIndex(item => item.id === id)
    await update(id,{
      isVisible: !products[index].isVisible
    })
    const newProduct = products.map(product => {
      if (product.id === id) {
        return { ...product, isVisible: !product.isVisible }
      } else {
        return product
      }
    })
    setProducts(newProduct);
  }



  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey={products => products.id}
    />


  )
}

export default ProductList
