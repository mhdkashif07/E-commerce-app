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
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="products">
            <MenClothesList menClothes={data.mens} />
          </div>
        </div>
      </div>
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

export default index