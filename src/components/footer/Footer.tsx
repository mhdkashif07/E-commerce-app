import { Grid } from '@mui/material'
import React, { FC } from 'react'
import logo1 from '../../../public/002-facebook-logo.png'


const Footer: FC = () => {
  return (
    <div>
      <div className="footer_container">
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <div className="first_item">
              <div className="footer_logo">E-shop</div>
              <div className="footer_text">
                <p>
                  House My Brand designs clothing for the young, the old &
                  everyone in between – but most importantly, for the
                  fashionable
                </p>
              </div>
              <div className="social_icons_container">
                  <div className="icons">
                      <ul>
                          <li><a href=" "><img src={logo1.src} alt="" /></a></li>
                          <li><a href=" "><img src={logo1.src} alt="" /></a></li>
                          <li><a href=" "><img src={logo1.src} alt="" /></a></li>
                          <li><a href=" "><img src={logo1.src} alt="" /></a></li>
                          <li><a href=" "><img src={logo1.src} alt="" /></a></li>
                      </ul>
                  </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} className="right_side_footer">
            <div>
              <div className="right_side_title"><p>Shooping online</p></div>
              <div className="right_side_options">
                <ul>
                  <li><a href="">Order Status</a></li>
                  <li><a href="">Shipping and Delivery</a></li>
                  <li><a href="">Returns</a></li>
                  <li><a href="">Payment Options</a></li>
                  <li><a href="">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} className="right_side_footer">
            <div>
              <div className="right_side_title"><p>Information</p></div>
              <div className="right_side_options">
                <ul>
                  <li><a href="">Gift Cards</a></li>
                  <li><a href="">Find a Store</a></li>
                  <li><a href="">Newsletter</a></li>
                  <li><a href="">Become a member</a></li>
                  <li><a href="">Site feedback</a></li>
                </ul>
              </div>
            </div>
          </Grid>
          
          <Grid item xs={2} sm={2} md={2} lg={2} className="right_side_footer">
            <div>
              <div className="right_side_title"><p>Contact</p></div>
              <div className="right_side_options">
                <ul>
                  <li><a href="">mhdkashif07@gmail.com</a></li>
                  <li><a href="">Hotline: +1 131 138 138</a></li>
                </ul>
              </div>
            </div>
          </Grid>

        </Grid>

        
      </div>

      <div className="copy_right_container">
          <div className="copy_text">
            DEVELOPE BY M.KASHIF - © 2021. ALL RIGHTS RESERVED.
          </div>
        </div>
    </div>
  )
}

export default Footer