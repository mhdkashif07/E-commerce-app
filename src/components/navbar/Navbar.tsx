import React from "react";


import { Grid } from "@mui/material";
// import { Link } from 'react-router-dom';

import { SearchOutlined } from "@mui/icons-material";
// import PersonIcon from '@material-ui/icons/Person';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from '../../../public/noun_cloth_2129414.png'
import Link from "next/link";


// import { useSelector } from "react-redux";

const Navbar = () => {
//   const { cartTotalQuantity } = useSelector((state) => state.cart)
  return (
    <div className="contai">
      <div className="navbar_container">
        <Grid container alignItems="center">
          <Grid item xs={4} sm={4}  md={4} lg={4} xl={4}>
            <div className="nav_logo">
              <Link href="/"><img src={Logo.src} alt="" /></Link>
              <Link href="/"><span className="logo__name"> <span className="e">E</span>-Shop</span></Link>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="nav_options">
              <div>
                <ul>
                  <li><Link href='/men-products'>Men</Link></li>
                  <li><Link href='/women-products'>Women</Link></li>
                  <li><Link href='/kids-products'>Kids</Link></li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="nav_icons">
              <div>
                <ul>
                  <li>
                    <a href=" "><SearchOutlined /></a>
                  </li>
                  {/* <li className="cart__logo"><Link href="/cart"><ShoppingCartIcon /></Link><span className="total__items">hello</span></li>
                  <li><Link href="/login"><PersonIcon /></Link></li> */}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;
