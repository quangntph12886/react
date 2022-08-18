import React ,{useState, useEffect} from 'react'
import Category from '../../../model/category'
import type { ColumnsType } from 'antd/es/table';
import { listCategory } from '../../../api/category';
import { Space, Table, Tag, Switch } from 'antd';

const categoryList = () => {
    const [category, setCategory] = useState<Category[]>([])
    const columns: ColumnsType<Category> = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
          },
    ]
    useEffect(() => {
        const getCategories = async () => {
          const { data } = await listCategory();
          console.log(data)
          setCategory(data);
        }
        getCategories();
      }, [])
    return (
        <Table
      columns={columns}
      dataSource={category}
      rowKey={category => category.id}
    />
    )
}

export default categoryList
