import { Grid } from '@mui/material'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import { allDataTypes } from '../../shared/types'
import { Title, Product } from '../index';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface selectedProps{
    selected: allDataTypes['mens']
}


const titleVariants = {
    visible: {
        y:0,
        transition:{
            type: 'spring', duration: .5, bounce: 0.2
        },
    },
    hidden: {
        y: '20vh',
    }
  };

  const cardVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 }  }
  };

  

const SelectedProducts: FC<selectedProps> = ({selected}) => {
    const { ref, inView } = useInView({
        threshold: 0.3
    })

    const { ref: ref1 } = useInView({
        threshold: 0.2
    })

    const animation = useAnimation()

    

    // useEffect(() => {
    //     if (inView) {
    //       animation.start("visible");
    //     } else {
    //       animation.start("hidden");
    //     }
    //   }, [animation, inView]);


  return (
    <div>
            <div className="container">
                <div className="selected_product_container">
                    <motion.div
    //                    ref={ref}
    //   variants={titleVariants}
    //   initial="hidden"
    //   animate={animation}
                    >
                          <Title  title='Selected just for you' link='/mens' button="show more" />
                    </motion.div>
                  
                    
                   <motion.div
                //    animate={animation}
                //    initial="hidden"
                //    variants={cardVariants}
                //    ref={ref1}
                   >
                   <Grid container spacing={3} 
                    data-aos="fade-up"
                    data-aos-offset="100"
                   >
                        {selected.map((item)=>(
                            <Grid item xs={12} sm={4} md={3} lg={3} key={item.id} >
                           <Product item={item} />
                            </Grid>
                         ))} 

                    </Grid>
                   </motion.div>
                </div>
            </div>
        </div>
  )
}

export default SelectedProducts