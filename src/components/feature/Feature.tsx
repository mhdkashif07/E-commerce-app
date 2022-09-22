import React, { FC } from "react";
import { Grid } from "@mui/material";
import feature1 from "../../../public/Group 179.png";
import feature2 from "../../../public/noun_Happy_1563582.png";
import feature3 from "../../../public/noun_guarantee_2519048.png";
import Image from "next/image";

type image = {
    //   image: HTMLImageElement;
    src: string ;
    className?: string;
  }

const Feature: FC = () => {
  return (
    <div className="features__section">
      <div className="features_container">
        <Grid container >
          
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="feature_item_container">
              <div className="feature_img">
                <img src={feature1.src} alt="" />
              </div>
              <div className="feature_text">
                <h3>Free shipping</h3>
                <p>on purchase over $199</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="feature_item_container">
              <div className="feature_img">
                <img src={feature2.src} alt="" />
              </div>
              <div className="feature_text">
                <h3>99% Satisfied Customers</h3>
                <p>Our clients' opinions </p>
                <p>speak for themselves</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="feature_item_container">
              <div className="feature_img">
                <img src={feature3.src} alt="" />
              </div>
              <div className="feature_text">
                <h3>Originality Guaranteed</h3>
                <p>30 days warranty for each</p>
                <p>product from our store</p>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Feature;