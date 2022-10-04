import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
// import styles from '../styles/Home.module.css'
import arrow  from "../../public/noun_Arrow Left_2682937.png"
import { Grid } from "@mui/material"
import { ChooseUs, Feature, Sale, SelectedProducts, Title, TodayProducts } from '../components'
import { data } from '../shared/constants'
import { allDataTypes } from '../shared/types'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/auth-context'
// import  AOS  from "aos"


interface HomeProps{
  data: allDataTypes
}

const Home: NextPage<HomeProps> = ({data}) => {
  const useAuth = useContext(AuthContext)
  console.log(useAuth.authState);
  
  return (
    <div>
      <div className="home_container">
        <Grid container>
          <div className="hero_container">
            <Grid item xs={12} sm={12} md={12} lg={12}  >
              <div className="home_text aos-item" 
              //data-scroll data-scroll-direction="horizontal" data-scroll-speed="3"
             
              //data-aos-mirror="true"
              //data-aos-once="false"
              >
                <p  data-aos="fade-right">Sale of the </p>
                <p  data-aos="fade-left">summer</p>
                <p  data-aos="fade-right">collection</p>

                <div className="shop_now">
                  <div className="shop_button">
                    <a href="">
                      <img src={arrow.src} alt="" />
                    </a>
                  </div>
                  <div className="shop_text">
                    <div>
                      <h3>Shop now</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
        <Feature />
      </div>
      <div >
      <Sale />
      </div>
      
      <SelectedProducts selected={data.mens} />
      <ChooseUs />
      <TodayProducts newProducts={data.mens} />
    </div>
  )
}

export const getStaticProps = async() => {
  return {
    props:{
      data: data
    }
  }
}

export default Home
