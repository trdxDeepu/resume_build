import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Resources/defaultlayout.css";
import { UserOutlined  } from "@ant-design/icons";


const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("resume-build-user"));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
      <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
    <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("resume-build-user");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Resume Builder</h1>
         <Dropdown overlay={menu} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;

