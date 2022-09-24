import React, { useState, useEffect } from "react";


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

const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <div className="navbar__list">
      <div className="navbar_container " style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
      >
        <Grid container alignItems="center" justifyContent="space-around" >
          <Grid item xs={3} sm={3}  md={3} lg={3} xl={3}>
            <div className="nav_logo">
              <Link href="/"><img src={Logo.src} alt="" /></Link>
              <Link href="/"><span className="logo__name"> <span className="e">E</span>-Shop</span></Link>
            </div>
          </Grid>
          <Grid item md={3}>
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
          <Grid item md={3}>
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
