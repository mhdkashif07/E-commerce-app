import { GetStaticProps } from 'next';
import React, { FC } from 'react'
// import { Header } from "../components/Header";
import { Sidebar } from "../../components/index";
import MenClothesList from '../../components/lists/MenClothesList';
import { data } from '../../shared/constants';
import { allDataTypes } from '../../shared/types';
// import { MenClothes } from "../components/MenClothes";

interface PageProps{
    data: allDataTypes
  }

const index: FC<PageProps> = ({data}) => {
    
  return (
    <div className='container'>
      <div className="main__section">
        <div className="men__products">
          <div className="sidebar" data-aos="zoom-in" data-aos-duration="400">
            <Sidebar />
          </div>
          <div className="products" data-aos="zoom-in" data-aos-duration="400">
            <MenClothesList menClothes={data.mens} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
    return {
      props:{
        data: data
      }
    }
  }

export default index;