/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Grid } from "@mui/material";
import choose1 from "../../../public/Group 181.png";
import choose2 from "../../../public/noun_payment_2281176.png";
import choose3 from "../../../public/noun_materials_308312.png";
import choose4 from "../../../public/noun_materials_308312.png";
import PrimaryTitle from "../title/PrimaryTitle";

const ChooseUs = () => {
  return (
    <div className="container">
      <div className="choose_us_container">
        <PrimaryTitle text="Why should you choose us?" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3} lg={3} data-aos="flip-up" data-aos-offset="100">
            <div className="choose_us_item">
              <div className="choose_img">
                <img src={choose1.src} />
              </div>
              <div className="choose_text_container">
                <div className="item_title">
                  <h3>Free Shipping</h3>
                </div>
                <div className="item_discription">
                  <p>
                    All purchases over $199 are eligible for free shipping via
                    USPS First Class Mail.
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3} data-aos="flip-up" data-aos-offset="100">
            <div className="choose_us_item">
              <div className="choose_img">
                <img src={choose2.src} />
              </div>
              <div className="choose_text_container">
                <div className="item_title">
                  <h3>Easy Payments</h3>
                </div>
                <div className="item_discription">
                  <p>
                    All payments are processed instantly over a secure payment
                    protocol.
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3} data-aos="flip-up" data-aos-offset="100">
            <div className="choose_us_item">
              <div className="choose_img">
                <img src={choose3.src} />
              </div>
              <div className="choose_text_container">
                <div className="item_title">
                  <h3>Money-Back Guarantee</h3>
                </div>
                <div className="item_discription">
                  <p>
                    If an item arrived damaged or you've changed your mind, you
                    can send it back for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3} data-aos="flip-up" data-aos-offset="100">
            <div className="choose_us_item"> 
              <div className="choose_img">
                <img src={choose4.src} />
              </div>
              <div className="choose_text_container">
                <div className="item_title">
                  <h3>Finest Quality</h3>
                </div>
                <div className="item_discription">
                  <p>
                    Designed to last, each of our products has been crafted with
                    the finest materials.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};


export default ChooseUs;