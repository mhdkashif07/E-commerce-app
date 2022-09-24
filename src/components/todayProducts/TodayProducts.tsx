import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { allDataTypes } from '../../shared/types'
import Product from '../cards/Product'
import PrimaryTitle from '../title/PrimaryTitle'

interface todayProps {
    newProducts: allDataTypes['mens']
}

const TodayProducts: FC<todayProps> = ({ newProducts }) => {
    return (
        <div>
            <div className="container">
                <div className="today_product_container">
                    <PrimaryTitle text="Products in today" />
                    <Grid container spacing={3}>
                        {newProducts.map((item) => (
                            <Grid item xs={12} sm={4} md={3} lg={3} key={item.id}>
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