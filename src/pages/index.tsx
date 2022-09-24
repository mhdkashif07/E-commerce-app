import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
// import styles from '../styles/Home.module.css'
import { Grid } from "@mui/material"
import { Feature, Sale, SelectedProducts, Title } from '../components'
import { data } from '../shared/constants'
import { allDataTypes } from '../shared/types'

interface HomeProps{
  data: allDataTypes
}

const Home: NextPage<HomeProps> = ({data}) => {
  console.log(data?.mens);
  
  return (
    <div>
      <div className="home_container">
        <Navbar />
        <Grid container>
          <div className="hero_container">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="home_text">
                <p>Sale of the </p>
                <p>summer</p>
                <p>collection</p>

                <div className="shop_now">
                  <div className="shop_button">
                    <a href="">
                      {/* <img src={arrow} alt="" /> */}
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
      <Sale />
      <SelectedProducts selected={data.mens} />
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
