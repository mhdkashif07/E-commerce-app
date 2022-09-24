import { Grid } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import { allDataTypes } from '../../shared/types'
import { Title, Product } from '../index'

interface selectedProps{
    selected: allDataTypes['mens']
}

const SelectedProducts: FC<selectedProps> = ({selected}) => {
  return (
    <div>
            <div className="container">
                <div className="selected_product_container">
                    <Title  title='Selected just for you' link='/mens' button="show more" />
                    
                    <Grid container spacing={3}>
                        {selected.map((item)=>(
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

export default SelectedProducts