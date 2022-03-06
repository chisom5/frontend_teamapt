import {
  RightOutlined,
  CreditCardOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Row, Col, Button } from "react-bootstrap";
import { Dropdown, Menu } from "antd";

const Header = () => {
  const menuFeature = (
    <Menu>
      <Menu.Item key="0">
        <p>1st menu item</p>
      </Menu.Item>
      <Menu.Item key="1">
        <p>2nd menu item</p>
      </Menu.Item>
    </Menu>
  );
  const menuResource = (
    <Menu>
      <Menu.Item key="0">
        <p>first dropdown</p>
      </Menu.Item>
      <Menu.Item key="1">
        <p>second dropdown</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="page_header_wrapper">
      <nav className="page_header_nav">
        <div className="d_flex page_header_nav_left">
          <span>
            <img src={require("../../asset/images/logo.jpg")} alt="logo" />
          </span>

          <div>
            <ul className="page_header_nav_itemsWrap">
              <li>Customers</li>
              <Dropdown overlay={menuFeature} trigger={["click"]} arrow={true}>
                <li>
                  Features
                  <DownOutlined className="link_arrow" />
                </li>
              </Dropdown>
              <li>Partners</li>

              <Dropdown overlay={menuResource} trigger={["click"]} arrow={true}>
                <li>
                  Resources
                  <DownOutlined className="link_arrow" />
                </li>
              </Dropdown>
            </ul>
          </div>
        </div>

        <div className="d_flex">
          <p id="nav_login">Login</p>
          <Button className="btn btn_primary">Register</Button>
        </div>
      </nav>

      <Row>
        <Col md={6} className="header_col">
          <h2 id="page_header_title">The new standard in spend management</h2>

          <p>
            Easypay settles your open invoices immediately and takes over your
            accounts receivable - for optimal cash and workflow
          </p>

          <div className="d_flex">
            <Button className="btn btn_primary btn_width">
              For online stores
            </Button>
            <Button className="btn btn_default btn_width">For SMEs</Button>
          </div>
        </Col>

        <Col md={6} className="header_col_invoice">
          <div className="invoice_container">
            <p id="invoice_title">Pay this invoice</p>
            <span id="invoice_desc">
              Make payment for this invoice by filling in the details
            </span>

            <form id="form_container">
              <div className="input">
                <CreditCardOutlined />
                <p>Card number</p>
              </div>
              <div className="input">
                <p>0021763289</p>
              </div>

              <span>More Payment Method</span>
              <Button id="form_invoice_btn">
                Pay $1400 <RightOutlined id="btn_icon" />
              </Button>
            </form>

            {/* floating card */}
            <div className="floating_card">
              <div id="floating_card_left">
                <p className="title">Total Recieved</p>
                <p id="amount">
                  $74,568<span className="amount_decmial">.71</span>
                </p>
              </div>

              <div id="floating_card_right">
                <p className="title">
                  <div className="floating_card_right_dot"></div>
                  pending
                </p>
                <p id="floating_card_right_amt">
                  $7476<span className="amount_decmial">.41</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
