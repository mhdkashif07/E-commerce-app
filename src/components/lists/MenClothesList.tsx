import { Grid } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import { allDataTypes } from '../../shared/types'
import { Title, Product } from '../index'

interface MenProps {
    menClothes: allDataTypes['mens']
}

const MenClothesList: FC<MenProps> = ({ menClothes }) => {
    return (
        <div>
            <div className="selected_product_container">
                <Grid container spacing={3}>
                    {menClothes.map((item) => (
                        <Grid item xs={12} sm={10} md={4} lg={4} xl={4} key={item.id}>
                            <Product item={item} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default MenClothesList;