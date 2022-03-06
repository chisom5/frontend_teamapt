import {
  HomeOutlined,
  MoneyCollectOutlined,
  UserOutlined,
  NotificationOutlined,
  SettingOutlined
} from "@ant-design/icons";

import { Avatar, Image } from "antd";

const Sidebar = () => {
  return (
    <aside className="sidebar_container">
      <div className="sidebar_inner">
        <div className="sidebar_top">
          <span className="logo">
            <img
              src={require("../../asset/images/cash_money.png")}
              alt="cash money"
            />
          </span>

          <span className="">
            <img
              src={require("../../asset/images/logo_dashboard.png")}
              alt="logo"
            />
          </span>
        </div>

        {/* menu list here */}
        <div className="sidebar_menu">
          <div className="nav_item">
            <HomeOutlined className="menu_icon" />
            <p>Home</p>
          </div>

          <div className="nav_item">
            <HomeOutlined className="menu_icon" />
            <p>Company</p>
          </div>
          <div className="nav_item">
            <MoneyCollectOutlined className="menu_icon" />
            <p>Payment</p>
          </div>

          <div className="nav_item">
            <UserOutlined className="menu_icon" />
            <p>Clients</p>
          </div>

          <div className="nav_item">
            <SettingOutlined  className="menu_icon" />
            <p>Settings</p>
          </div>

          <div className="nav_item">
            <NotificationOutlined className="menu_icon" />
            <p>Notifications</p>
          </div>
        </div>

        <div className="sidebar_bottom">
          <Avatar
            src={
              <Image
                // src="https://joeschmoe.io/api/v1/random"
                src={require("../../asset/images/profile.jpg")}
                style={{ width: 30, backgroundColor: "#7fcdf9" }}
              />
            }
          />
          <div className="sidebar_bottom_profileText">
            <p>Thomas Moret</p>
            <span>mthomas@rotty.io</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
