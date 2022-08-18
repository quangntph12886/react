
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import icon1 from '../assets/1.png'
import Logo from '../assets/logo.png'
import "./adminlayout.style.css"

const { Content, Sider } = Layout;

const items = [
  {
    label: "Product",
    key: "product",
    children: [
      { label: <Link to="/admin/product">List</Link>, key: "product-list" },
      { label: <Link to="/admin/product/create">Create</Link>, key: "product-create" }
    ]
  },
  {
    label: <Link to="/admin/category">Category</Link>,
    key: "category"
  },
  {
    label: <Link to="/admin/order">Order</Link>,
    key: "order"
  },
  {
    label: <Link to="/shop">Back to Shop</Link>,
    key: "Shop"
  }
];

export default function AdminLayout() {

  return (
    <Layout>
      <div>
            <div className="header-admin">
                <div className="container header-container">
                <Link to="/admin/product/list"> <img src={Logo} alt="" />  </Link>  

                    <div className="header-right">
                        <div className="header-search">
                            <img src={icon1} alt="" />
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Content style={{ margin: "24px 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Outlet />
          </div>
        </Content>
    </Layout>
  );
}
