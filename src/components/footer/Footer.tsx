/* eslint-disable react/jsx-no-target-blank */
import { Grid } from '@mui/material'
import React, { FC } from 'react'
import logo1 from '../../../public/002-facebook-logo.png'
import { FaLinkedin, FaFacebook, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa"


const Footer: FC = () => {
  return (
    <div>
      <div className="footer_container">
        <Grid container>
          <Grid item xs={10} sm={10} md={4} lg={4} xl={4}>
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
                    <li><a href="https://www.linkedin.com/in/mhdkashif07/" target="_blank"><FaLinkedin size={35} /></a></li>
                    <li><a href="https://www.facebook.com/mhdkashif07" target="_blank"><FaFacebook size={35} /></a></li>
                    <li><a href="https://github.com/mhdkashif07" target="_blank"><FaGithub size={35} /></a></li>
                    <li><a href=" https://discord.com/users/736952462245888071" target="_blank"><FaDiscord size={35} /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCZOsZHCD3ffoKBHptvBcy2g" target="_blank" ><FaYoutube size={35} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={10} sm={10} md={2} lg={2} className="right_side_footer">
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

          <Grid item xs={10} sm={10} md={2} lg={2} className="right_side_footer">
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

          <Grid item xs={10} sm={10} md={2} lg={2} className="right_side_footer">
            <div>
              <div className="right_side_title"><p>Contact</p></div>
              <div className="right_side_options">
                <ul>
                  <li><a href="mailto:mhdkashif07@gmail.com">mhdkashif07@gmail.com</a></li>
                  {/* <li><a href="">Hotline: +1 131 138 138</a></li> */}
                </ul>
              </div>
            </div>
          </Grid>

        </Grid>


      </div>

      <div className="copy_right_container">
        <div className="copy_text">
          DEVELOPE BY M.KASHIF - © 2022. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  )
}

export default Footer