import React, { useState, useEffect } from "react";


import { Grid } from "@mui/material";
// import { Link } from 'react-router-dom';

import { SearchOutlined } from "@mui/icons-material";
import { BsFillPersonFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md'
import Logo from '../../../public/noun_cloth_2129414.png'
import Link from "next/link";
import { useRouter } from "next/router";


// import { useSelector } from "react-redux";

const Navbar = () => {
//   const { cartTotalQuantity } = useSelector((state) => state.cart)
const router = useRouter()
console.log(router.route);


const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [scroll, setScroll] = useState(false)



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
      let boxShadowVar = backgroundTransparacyVar * 0.3;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
      setScroll(true)
    }
  }, [clientWindowHeight]);
  return (
    <div className="navbar__list">
      <div className={ router.route != "/" ?  `navbar_container color-black`: "navbar_container"}   style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding} 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        color: "black"
      }}

      >
        <Grid container alignItems="center" >
          <Grid item xs={3} sm={3}  md={4} lg={4} xl={4}>
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
                  <li className="cart__logo"><Link href="/cart"><a href=""><MdShoppingCart /></a></Link><span className="total__items">2</span></li>
                  <li><Link href="/login"><a href=""><BsFillPersonFill /></a></Link></li> 
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
