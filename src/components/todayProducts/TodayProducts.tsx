import { Grid } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { allDataTypes, Result } from '../../shared/types'
import Product from '../cards/Product'
import PrimaryTitle from '../title/PrimaryTitle'
import AOS from "aos"

interface todayProps {
    newProducts: Result[]
}

const TodayProducts: FC<todayProps> = ({ newProducts }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
      }, []);



    
     
    return (
        <div>
            <div className="container">
                <div className="today_product_container">
                 <div>
                 <PrimaryTitle text="Products in today" />
                 </div>
                    <Grid container spacing={3} data-aos="fade-up" data-offset="200">
                        {newProducts?.slice(6,10)?.map((item) => (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={item.code}>
                                <Product item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default TodayProducts