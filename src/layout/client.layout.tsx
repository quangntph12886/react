
import { Outlet, Link } from "react-router-dom";
import Header from "../component/header";


export default function ClientLayout() {

  return (
    <div>
    <Header/>
    <Outlet/>
    </div>
  );
}

