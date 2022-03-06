import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import PieChart from "./components/charts/pieChart";
import BarChart from "./components/charts/barchart";

import { Switch, Button } from "antd";
import {
  CheckCircleOutlined,
  ArrowRightOutlined,
  LeftCircleOutlined,
  CodepenCircleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <Container fluid>
      <Header />

      <section className="second_section">
        <p className="label">They Trust Easypay</p>

        <div className="second_section_fortrust">
          <div>
            <span>
              <img src={require("./asset/images/fonts.png")} alt="font" />
            </span>
            <p>Font</p>
          </div>

          <div className="section_fortrust_item">
            <span>
              <img src={require("./asset/images/lattice.png")} alt="font" />
            </span>
            <p>Lattice</p>
          </div>

          <div className="section_fortrust_item">
            <span>
              <img
                src={require("./asset/images/productboard.png")}
                alt="font"
              />
            </span>
            <p>productboard</p>
          </div>

          <div className="section_fortrust_item">
            <span>
              <img src={require("./asset/images/triplebyte.png")} alt="font" />
            </span>
            <p>Triplebyte</p>
          </div>

          <div className="section_fortrust_item">
            <span>
              <img src={require("./asset/images/adikteev.png")} alt="font" />
            </span>
            <p>adikteev</p>
          </div>

          <div className="section_fortrust_item">
            <span>
              <img src={require("./asset/images/side.png")} alt="font" />
            </span>
          </div>
        </div>
      </section>

      <section className="section_experience">
        <div className="section_header">
          <h3>Experience Easypay</h3>
          <span id="section_header_subtitle">
            Discover Upflow through our virtual Product Tour
          </span>

          <div className="experience_nav">
            <div className="experience_navItem experience_navItem_active">
              <span>
                <img src={require('./asset/images/liqudity.jpg')} alt="liquidity"/>
              </span>
              <p>Secure Liquidity</p>
            </div>

            <div className="experience_navItem">
              <span>
                <img src={require('./asset/images/digital_payment.jpg')} alt="liquidity"/>
              </span>

              <p>Digital Payments</p>
            </div>

            <div className="experience_navItem">
              <span>
                <img src={require('./asset/images/automated.jpg')} alt="liquidity"/>
              </span>
              <p>Automated Processes</p>
            </div>
          </div>
        </div>

        {/* billing details */}
        <Dashboard />
      </section>

      <section className="section_reusable_component">
        <Row>
          <Col md={6} className="reusable_component_textSection">
            <p className="reusable_component_title">
              Understanding your cash flow
            </p>
            <span className="reusable_component_subTitle">
              Make better business decisions through a deep, real-time view of
              your accounts recieveable
            </span>

            <div className="reusable_component_listcheck">
              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Dashboard</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Financial projections</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Days sales outstanding</p>
              </div>
            </div>

            <span className="reusable_component_bottomNav">
              Learn about insights{" "}
              <ArrowRightOutlined className="listcheck_icon icon_arrow" />
            </span>
          </Col>

          <Col md={6}>
            <div className="reusable_card_bg card_bg_cashflow">
              <div className="card_bg_item">
                <p>Expenses instead</p>

                {/* charts here */}
                <PieChart />

                <div className="card_bg_item_floating card_bg_item_floating_width">
                  <p>
                    <span style={{ marginRight: "8px" }}>
                      <img
                        src={require("./asset/images/corporate_header.jpg")}
                        alt="corporate_card"
                      />
                    </span>
                    Corporate
                  </p>

                  <div id="card_bg_item_bottom">
                    <div>
                      <p>471.99 USD</p>
                      <span>****8756</span>
                    </div>

                    <span>
                      <img
                        src={require("./asset/images/corporate_btm.jpg")}
                        alt="corporate_card"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="section_reusable_component">
        <Row>
          <Col md={6}>
            <div className="reusable_card_bg card_bg_systematic">
              <div className="card_bg_systematic_item">
                <div className="card_bg_systematic_item_header">
                  <LeftCircleOutlined />
                  <p>Checkout</p>
                </div>

                <div className="card_bg_systematic_item_text">
                  <div className="card_bg_systematic_item_text_left">
                    <span className="plan_subText_icon">
                      <CodepenCircleOutlined />
                    </span>

                    <div>
                      <p>Premium plan</p>
                      <span className="plan_subText">
                        $8/month-Billed monthly
                      </span>
                    </div>
                  </div>

                  <span>$12</span>
                </div>

                <div className="card_bg_systematic_item_text align-base">
                  <div className="card_bg_systematic_item_text_left">
                    <div className="card_bg_systematic_item_text_left">
                      <span className="plan_subText_icon">
                        <CodepenCircleOutlined />
                      </span>

                      <div>
                        <p>Friends Addons</p>
                        <span className="plan_subText">
                          $5/month-Billed monthly
                        </span>
                      </div>
                    </div>

                    <span>$8</span>
                  </div>

                  <div className="input">Coupon code</div>
                </div>

                <div className="card_bg_systematic_item_text">
                  <div
                    className="card_bg_systematic_item_text_left"
                    style={{ flexDirection: "column", alignItems: "baseline" }}
                  >
                    <p>Subtotal</p>
                    <span className="plan_subText">Tax(if applicable)</span>
                  </div>

                  <span>$12</span>
                </div>

                <div className="card_bg_systematic_item_text card_bg_systematic_item_text-last">
                  <div className="card_bg_systematic_item_text_left">
                    <p>Total</p>
                  </div>

                  <span>$12</span>
                </div>

                <div className="card_bg_systematic_floating">
                  <p>Amount Due(USD)</p>

                  <div className="card_bg_systematic_middle">
                    <span>
                      $7,417.85 <span>(Tax Incl.)</span>
                    </span>

                    <div id="button_dueDate">Due on Jan 20, 2022</div>
                  </div>

                  <div id="card_bg_systematic_bottom">
                    <p>Also attach PDF in mail</p>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            style={{ paddingLeft: "5rem" }}
            className="reusable_component_textSection"
          >
            <p className="reusable_component_title">Systematic collection</p>
            <span className="reusable_component_subTitle">
              Never forget to follow up on an unpaid invoice by setting up
              systematic collection schedules
            </span>

            <div className="reusable_component_listcheck">
              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Keep clients happy using personalised reminders</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Send emails and registered letters</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Keep the right stakeholders in the loop</p>
              </div>
            </div>

            <span className="reusable_component_bottomNav">
              Apply industry best practices
              <ArrowRightOutlined className="listcheck_icon icon_arrow" />
            </span>
          </Col>
        </Row>
      </section>

      <section className="section_reusable_component">
        <Row>
          <Col md={6} className="reusable_component_textSection">
            <p className="reusable_component_title">Streamlined payments</p>
            <span className="reusable_component_subTitle">
              Offer new payment methods that better suit your customer's needs
              and reduce your time to get paid
            </span>

            <div className="reusable_component_listcheck">
              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Simplified payment experience for your customers</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Offer new payment methods</p>
              </div>

              <div>
                <CheckCircleOutlined className="listcheck_icon" />
                <p>Automatic reconcilliation</p>
              </div>
            </div>

            <span className="reusable_component_bottomNav">
              Discover our payment platform
              <ArrowRightOutlined className="listcheck_icon icon_arrow" />
            </span>
          </Col>

          <Col md={6}>
            <div className="reusable_card_bg card_bg_streamlined">
              <div className="card_bg_streamlined_item">
                <div className="card_bg_streamlined_item_header">
                  <div id="card_bg_streamlined_item_first">
                    <p>My spendings</p>
                    <span>
                      <img
                        src={require("./asset/images/spendings.jpg")}
                        alt="icon"
                      />
                    </span>
                  </div>

                  <div id="card_bg_streamlined_item_second">
                    <h3>$5,648.59</h3>
                    <div>
                      <p>USD/EUR</p>
                      <p>1,46471/2,48574</p>
                    </div>
                  </div>
                </div>

                {/* bar chart here */}
                <BarChart />

                <div className="card_bg_streamlined_floating">
                  <p>Last transaction</p>

                  <div className="card_bg_streamlined_floating_itemWrap">
                    <div className="card_bg_streamlined_floating_item">
                      <div id="card_bg_streamlined_floating_item_left">
                        <div className="transaction_icon">
                          <img
                            src={require("./asset/images/spotify.jpg")}
                            alt="spotify"
                          />
                        </div>

                        <div id="card_bg_streamlined_floating_item_left_text">
                          <p>Soptify</p>
                          <span>Debit card</span>
                        </div>
                      </div>

                      <div>
                        <span className="amt">$78.69</span>
                      </div>
                    </div>

                    <div className="card_bg_streamlined_floating_item">
                      <div id="card_bg_streamlined_floating_item_left">
                        <div className="transaction_icon">
                          <img
                            src={require("./asset/images/nike.jpg")}
                            alt="spotify"
                          />
                        </div>

                        <div id="card_bg_streamlined_floating_item_left_text">
                          <p>Nike</p>
                          <span>Debit card</span>
                        </div>
                      </div>

                      <div>
                        <span className="amt">$78.99</span>
                      </div>
                    </div>

                    <div className="card_bg_streamlined_floating_item">
                      <div id="card_bg_streamlined_floating_item_left">
                        <div className="transaction_icon">
                          <img
                            src={require("./asset/images/apple.jpg")}
                            alt="apple"
                          />
                        </div>

                        <div id="card_bg_streamlined_floating_item_left_text">
                          <p>Apple store</p>
                          <span>Debit card</span>
                        </div>
                      </div>

                      <div>
                        <span className="amt">$426.57</span>
                      </div>
                    </div>

                    <div className="card_bg_streamlined_floating_item">
                      <div id="card_bg_streamlined_floating_item_left">
                        <div className="transaction_icon">
                          <img
                            src={require("./asset/images/paypal_BigIcon.jpg")}
                            alt="paypal_BigIcon"
                          />
                        </div>

                        <div id="card_bg_streamlined_floating_item_left_text">
                          <p>Paypal</p>
                          <span>Debit card</span>
                        </div>
                      </div>

                      <div>
                        <span className="amt">$413.57</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* let's try our service */}
      <section className="service_section">
        <Row>
          <Col className="service_container">
            <div className="service_left_content">
              <h2>Let's try our service now!</h2>
              <p>
                Easy-to-use API that allow you to get up and running with a
                powerful payments infrastructure in under five minutes.
              </p>
            </div>
            <Button>Learn more</Button>
          </Col>
        </Row>
      </section>

      {/* connecting with your existing tools */}
      <section className="connecting_tools_section">
        <Row>
          <Col className="">
            <div className="section_header">
              <h3>Connecting to your existing tools</h3>
              <span id="section_header_subtitle">
                upflow seamlessly integrates with the way you work today. Keep
                your existing invoicing and accounting tools and leverage the
                power of Upflow within a few minute.
              </span>

              <span className="reusable_component_bottomNav">
                Discover our API
                <ArrowRightOutlined className="listcheck_icon icon_arrow" />
              </span>
            </div>

            {/* concentric circle */}
            <div class="concentric_container">
              <div class="circle first">
                <div className="circle_rel">
                  <div className="icon_first">
                    <img
                      src={require("./asset/images/floating_mastercard.jpg")}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>

              <div class="circle second">
                <div className="circle_rel">
                  <div className="icon_second">
                    <img src={require("./asset/images/opay.jpg")} alt="icon" />
                  </div>
                </div>
              </div>

              <div class="circle third">
                <div className="circle_rel">
                  <div className="icon_third_1">
                    <img
                      src={require("./asset/images/square.jpg")}
                      alt="icon"
                    />
                  </div>
                </div>

                <div className="circle_rel">
                  <div className="icon_third_2">
                    <img src={require("./asset/images/gpay.jpg")} alt="icon" />
                  </div>
                </div>
              </div>
              <div class="circle fourth">
                <div className="circle_rel">
                  <div className="icon_fourth_1">
                    <img
                      src={require("./asset/images/nearAws.jpg")}
                      alt="icon"
                    />
                  </div>
                </div>

                <div className="circle_rel">
                  <div className="icon_fourth_2">
                    <img src={require("./asset/images/aws.jpg")} alt="icon" />
                  </div>
                </div>
              </div>

              <div class="circle fifth">
                <div className="circle_rel">
                  <div className="icon_fifth_1">
                    <img src={require("./asset/images/visa.jpg")} alt="icon" />
                  </div>
                </div>

                <div className="circle_rel">
                  <div className="icon_fifth_2">
                    <img
                      src={require("./asset/images/paypal.jpg")}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* people matter */}
      <section className="people_matters_section">
        <Row className="people_matters_section_inner">
          <Col md={5}>
            <p id="title">People matter, not paper</p>

            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p className="quote_text">
                "Upflow had a drastic impact on our cash collection strategy at
                Front and makes it easy to reach all of our customers, whelther
                they're an SMB or Enterprise!"
              </p>
            </blockquote>
          </Col>
          <Col md={7}>
            <div className="ceo_continaer">
              <div className="ceo_img">
                <img src={require("./asset/images/ceo.jpg")} alt="ceo" />
              </div>

              {/* circle */}
              <div className="ceo_floating_circle"></div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="openAccount_section">
        <Row className="openAccount_section_inner">
          <Col md={8}>
            <h3>Join 8755+ Shopify merchants who trust Carson</h3>
          </Col>

          <Col md={4}>
            <Button className="btn btn_primary ">Open a free account</Button>
          </Col>
        </Row>
      </section>

      {/* footer here */}
      <footer className="footer_section">
        <div className="footer_item_top">
          <div id="footer_item_top_first">
            <span>
              <img
                src={require("./asset/images/footer_logo.jpg")}
                alt="logo"
                id="footer_logo"
              />
            </span>

            <p>
              Easypay is the highest rated Shopify expert team in the world.
            </p>

            <div id="footer_item_groupIcons">
              <span>
                <img src={require("./asset/images/visa.jpg")} alt="icon" />
              </span>
              <span>
                <img
                  src={require("./asset/images/floating_mastercard.jpg")}
                  alt="icon"
                />
              </span>
              <span>
                <img src={require("./asset/images/opay.jpg")} alt="icon" />
              </span>
              <span>
                <img src={require("./asset/images/gpay.jpg")} alt="icon" />
              </span>
              <span>
                <img src={require("./asset/images/paypal.jpg")} alt="icon" />
              </span>
            </div>
          </div>

          <div className="footer_item_top_listWrap">
            <ul className="footer_item_top_list">
              <li>Community</li>
              <li>About</li>
              <li>Blog</li>
            </ul>

            <ul className="footer_item_top_list">
              <li>Careers</li>
              <li>Partner with us</li>
              <li>FAQ</li>
            </ul>

            <ul className="footer_item_top_list">
              <li>Sign up</li>
              <li>Login</li>
            </ul>
          </div>

          <div className="footer_item_top_iconWrap">
            <div className="footer_item_top_icon">
              <FacebookOutlined />
            </div>
            <div className="footer_item_top_icon">
              <InstagramOutlined />
            </div>
            <div className="footer_item_top_icon">
              <TwitterOutlined />
            </div>
            <div className="footer_item_top_icon">
              <YoutubeOutlined />
            </div>
          </div>
        </div>

        <div className="footer_item_bottom">
          <p>©2022 Easypay. All rights reserved</p>

          <div>
            <ul className="footer_item_bottom_list">
              <li>Help</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default App;
