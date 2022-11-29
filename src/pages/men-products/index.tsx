import { GetStaticProps } from 'next';
import React, { FC, ReactElement } from 'react'
// import { Header } from "../components/Header";
import { Sidebar } from "../../components/index";
import PrimaryLayout from '../../components/layout/PrimaryLayout';
import MenClothesList from '../../components/lists/MenClothesList';
import { data } from '../../shared/constants';
import { allDataTypes, GetLayout, Result } from '../../shared/types';
// import { MenClothes } from "../components/MenClothes";

import axios from "axios";


interface PageProps{
    data: Result[]
  }

const index: FC<PageProps> & GetLayout = ({data}) => {
  console.log(data);
  
    
  return (
    <div className='container'>
      <div className="main__section">
        <div className="men__products">
          <div className="sidebar" data-aos="zoom-in" data-aos-duration="400">
            <Sidebar />
          </div>
          <div className="products" data-aos="zoom-in" data-aos-duration="400">
            <MenClothesList menClothes={data} />
          </div>
        </div>
      </div>
    </div>
  )
};

index.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getStaticProps: GetStaticProps<PageProps> = async() => {
  const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
    params: {
      country: 'us',
      lang: 'en',
      currentpage: '0',
      pagesize: '30',
      categories: 'men',
      //concepts: 'H&M MAN'
    },
    headers: {
      'X-RapidAPI-Key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
  const response = await axios.request(options)
  console.log(response);
  

  const results  = await response?.data?.results
  console.log("This is the result", results);

    return {
      props:{
        data: results
      }
    }
  }

export default index