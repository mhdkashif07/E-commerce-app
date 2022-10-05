import React, { useState, useEffect, useContext } from "react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi"


import { Grid } from "@mui/material";
// import { Link } from 'react-router-dom';

import { SearchOutlined } from "@mui/icons-material";
import { BsFillPersonFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md'
import Logo from '../../../public/noun_cloth_2129414.png'
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { getTotals } from "../../app/slices/cartSlice";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { AuthContext } from "../../context/auth-context";
// import { MenuButton } from "../buttons/MenuButton";


const itemVariants = {
  closed: {
    opacity: 0
  },
  open: {
    opacity: 1
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};


const Navbar = () => {
  const { cartTotalQuantity } = useAppSelector((state) => state.cart)
  const [open, cycleOpen] = useCycle(false, true);
  const useAuth = useContext(AuthContext)
  

  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [])



  //change colors for navbar when scroll
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
      <div 
      className={router.route != "/" || backgroundTransparacy > 0 ? `navbar_container color-black` : "navbar_container"} style={{
        background: `rgba(245, 245, 245, ${backgroundTransparacy})`,
        padding: `${padding} 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        color: "black"
      }}
      >




        <Grid container alignItems="center" >
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="nav_logo">
              <Link href="/"><a><img src={Logo.src} alt="" /></a></Link>
              <Link href="/"><a href=""><span className="logo__name"> <span className="e">E</span>-Shop</span></a></Link>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={4} lg={4} xl={4}>
            <div className="nav_options">
              <div>
                <ul>
                  <li><Link href='/men-products'>Men</Link></li>
                  <li><Link href='/women-products'>Women</Link></li>
                  <li><Link href='/kids'>Kids</Link></li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
            <div>



              <div className="hamburger">
                <AnimatePresence>
                  {open && (
                    <motion.aside
                      initial={{ translateX: 300 }}
                      animate={{
                        width: 500,
                        //x: "-300px"
                        translateX: 0

                      }}
                      exit={{
                        //width: 0,
                        translateX: 300,
                        transition: { delay: 0.7, duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="container1"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sideVariants}
                      >
                        <div>
                          <ul>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants}><Link href='/men-products'>Men</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants}><Link href='/women-products'>Women</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants}><Link href='/kids'>Kids</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants}>
                              <Link href="/"><a href=""><SearchOutlined /></a></Link>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants} className="cart__logo"><Link href="/cart"><a href=""><MdShoppingCart /></a></Link><span className="total__items">{cartTotalQuantity}</span></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}
                              variants={itemVariants}><Link href="/login"><a href=""><BsFillPersonFill /></a></Link></motion.li>
                          </ul>
                        </div>


                      </motion.div>
                    </motion.aside>
                  )}
                </AnimatePresence>
                <button onClick={() => cycleOpen()}>{ open ? <GiTireIronCross size={22} /> : <GiHamburgerMenu size={25} />}</button>

              </div>
              <div className="nav_icons">
                <div>
                  <ul>
                    <li>
                      <Link href="/"><a href=""><SearchOutlined /></a></Link>
                    </li>
                   { useAuth.isUserAuthenticated() ? (
                     <li className="cart__logo"><Link href="/dashboard/cart"><a href=""><MdShoppingCart /></a></Link><span className="total__items">{cartTotalQuantity}</span></li>
                   ): "" }
                    <li><Link href="/login"><a href=""><BsFillPersonFill /></a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;
