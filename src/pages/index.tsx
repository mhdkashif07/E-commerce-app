import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
// import styles from '../styles/Home.module.css'
import arrow from "../../public/noun_Arrow Left_2682937.png"
import { Grid } from "@mui/material"
import { ChooseUs, Feature, Sale, SelectedProducts, Title, TodayProducts } from '../components'
import { data } from '../shared/constants'
import { allDataTypes, GetLayout, Result } from '../shared/types'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ReactElement, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/auth-context'
import PrimaryLayout from '../components/layout/PrimaryLayout'
// import  AOS  from "aos"
import axios from "axios";


interface HomeProps {
  data: Result[]
}

const Home: NextPage<HomeProps> & GetLayout = ({ data }) => {
  const useAuth = useContext(AuthContext)
  console.log(useAuth.authState);
  console.log(data);
  

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
                <p data-aos="fade-right">Sale of the </p>
                <p data-aos="fade-left">summer</p>
                <p data-aos="fade-right">collection</p>

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

      <SelectedProducts selected={data} />
      <ChooseUs />
      <TodayProducts newProducts={data} />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
    params: {
      country: 'us',
      lang: 'en',
      currentpage: '0',
      pagesize: '30',
      categories: 'giftguide',
      //concepts: 'H&M MAN'
    },
    headers: {
      'X-RapidAPI-Key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);

  console.log(response);
  

  const results  = await response?.data?.results
  console.log("This is the result", results);
  
  
  return {
    props: {
      data: results
    }
  }
}

export default Home
