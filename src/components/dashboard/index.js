import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar";
import { Button, Timeline, Image } from "antd";
import { BellOutlined, FlagOutlined } from "@ant-design/icons";
import AreaSmallChart from "../charts/areaChart";
import AreaFullChart from "../charts/fullAreaChart";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Sidebar />
      <div className="main_content">
        <section className="billing_details">
          <p id="billing_details_title">Billing details</p>

          <Row>
            <Col md={6} xs={12}>
              <div className="card_container card_billingDetails">
                <div className="card_billingDetails_top">
                  <div className="card_payment_profile_1">
                    <span>
                      <img
                        src={require("../../asset/images/atm_chip.jpg")}
                        alt="atm_chip"
                      />
                    </span>

                    <span>
                      <img
                        src={require("../../asset/images/network.jpg")}
                        alt="network"
                      />
                    </span>
                  </div>

                  <div className="card_payment_profile_2">
                    <div className="card_payment_profile_2_name">
                      <p>Name</p>
                      <span>Barly Vallendito</span>
                    </div>

                    <div className="card_payment_profile_2_name">
                      <p style={{ textAlign: "right" }}>Number</p>
                      <span>**** **** 4832</span>
                    </div>
                  </div>
                </div>

                <div className="card_payment_history_bottom">
                  <span>$452,841</span>
                  <span>
                    <img
                      src={require("../../asset/images/master_card.jpg")}
                      alt="master_card"
                    />
                  </span>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12}>
              <div className="card_container chart_container">
                <p>Invoice</p>

                <AreaSmallChart />
              </div>
            </Col>
          </Row>

          <Row>
            <p>Payment history</p>
            <Col md={6} xs={12}>
              <div className="card_container card_payment_history">
                <div className="card_payment_history_top">
                  <p>Invoice</p>
                  <span>Where a payment provider offers multiple types.</span>
                </div>

                <div className="card_payment_history_bottom">
                  <span>$99.0/mo</span>
                  <Button className="btn_experience">Detail</Button>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="card_container card_payment_history">
                <div className="card_payment_history_top">
                  <p>Subscription</p>
                  <span>To fully understand how online payment work.</span>
                </div>

                <div className="card_payment_history_bottom">
                  <span>$39.0/mo</span>
                  <Button className="btn_experience">Detail</Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <AreaFullChart />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="card_container">
                <span>
                  <img
                    src={require("../../asset/images/stripe.jpg")}
                    alt="stripe"
                  />
                </span>

                <div className="card_payment_container">
                  <div>
                    <p className="payment_label">Stripe</p>
                    <span className="payment_desc">
                      Accept Payment with Stripe
                    </span>
                  </div>

                  <Button className="btn_connect">Connect</Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="card_container">
                <span>
                  <img
                    src={require("../../asset/images/razorpay.jpg")}
                    alt="razorpay"
                  />
                </span>

                <div className="card_payment_container">
                  <div>
                    <p className="payment_label">Razorpay</p>
                    <span className="payment_desc">
                      Accept Payment with Razorpay
                    </span>
                  </div>

                  <Button className="btn_connect">Connect</Button>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="activities_section">
          <Row>
            <Col>
              <div className="card_container timeline_wrapper">
                <p id="timeline_wrapper_title">Activities</p>

                <Timeline className="timeline">
                  <Timeline.Item
                    dot={
                      <Image
                        // src="https://joeschmoe.io/api/v1/random"
                        src={require("../../asset/images/profile.jpg")}
                        style={{
                          width: 32,
                          backgroundColor: "#7fcdf9",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  >
                    <p className="timeline_newInvoice">
                      <FlagOutlined /> New Invoice
                    </p>
                    <p className="timeline_task">
                      <span className="timeline_profile_name">
                        Franciso Gibbs
                      </span>
                      created Invoice UT-75f54
                    </p>
                    <span>Just Now</span>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      <BellOutlined
                        style={{
                          fontSize: "16px",
                          backgroundColor: "#ffad0e",
                          borderRadius: "50px",
                          color: "#ffffff",
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    }
                  >
                    <p className="timeline_task">
                      <span className="timeline_profile_name">
                        Invoice KF-48v8
                      </span>
                      reminder was sent to Chester Corp
                    </p>

                    <span>Friday, 05:45pm</span>
                  </Timeline.Item>

                  <Timeline.Item
                    dot={
                      <Image
                        // src="https://joeschmoe.io/api/v1/random"
                        src={require("../../asset/images/profile.jpg")}
                        style={{
                          width: 32,
                          backgroundColor: "#7fcdf9",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  >
                    <p className="timeline_newInvoice">
                      <FlagOutlined /> New Invoice
                    </p>
                    <p className="timeline_task">
                      <span className="timeline_profile_name">
                        Franciso Gibbs
                      </span>
                      created Invoice UT-75f54
                    </p>
                    <span>Just Now</span>
                  </Timeline.Item>

                  <Timeline></Timeline>
                </Timeline>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="card_container transaction_details_wrapper">
                <div className="transaction_details_top">
                  <div id="icon_starbuck">
                    <img
                      src={require("../../asset/images/starbuck.jpg")}
                      alt="starbuck"
                    />
                  </div>
                  <p>Starbuck Inc</p>
                  <span id="send_money">send money</span>
                  <p id="transaction_details_top_amt">7854 USD</p>
                  <span id="transaction_details_top_desc">
                    Starbuck - Carament Latte Grande & Espresso Macchiatc
                    Grande.
                  </span>
                </div>

                <div className="transaction_details_bottom">
                  <p>Transaction Details</p>

                  <div className="transaction_item">
                    <span>Date</span>
                    <span>15 Aug 2022 - 08.20</span>
                  </div>

                  <div className="transaction_item">
                    <span>Category</span>
                    <span>Food & Beverage</span>
                  </div>

                  <div className="transaction_item">
                    <span>Transaction ID</span>
                    <span>#89563409</span>
                  </div>

                  <div className="transaction_item">
                    <span>
                      <img
                        src={require("../../asset/images/mastercard_logo.jpg")}
                        alt="master_card"
                      />
                      Mastercard-Debit
                    </span>
                    <span>****5217</span>
                  </div>
                </div>
                <Button className="btn_experience btn_easyBill">
                  Easypay bill
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
