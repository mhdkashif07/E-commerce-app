import { GetStaticProps } from 'next';
import React, { FC, ReactElement } from 'react'
import { Sidebar } from "../../components/index";
import PrimaryLayout from '../../components/layout/PrimaryLayout';
import MenClothesList from '../../components/lists/MenClothesList';
import { data } from '../../shared/constants';
import { allDataTypes, GetLayout } from '../../shared/types';

interface PageProps{
    data: allDataTypes
  }

const index: FC<PageProps> & GetLayout = ({data}) => {
    
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
};

index.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getStaticProps: GetStaticProps = async() => {
    return {
      props:{
        data: data
      }
    }
  }

export default index;