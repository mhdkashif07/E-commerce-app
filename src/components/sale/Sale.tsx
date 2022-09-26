import React, { useEffect } from 'react'
import { duration, Grid } from "@mui/material";



import sale1 from '../../../public/adult-black-clothes-dark-1040421.png'
import sale2 from '../../../public/beach-black-pants-black-shirt-2001293.png'
import sale3 from '../../../public/person-sale-sign-1785138.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Sale = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

    

    useEffect(() => {
        console.log("This section is in view",inView);
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type: 'spring', duration: 2, bounce: 0.4
                }
            })
        }

        if(!inView){
            animation.start({
                x: '-100vh'
            })
        }
    }, [inView])
    
    return (
        <div>
            <div className="container" ref={ref}>
                <motion.div className="sale_container"
                // initial={{x: "-100vh"}}
                animate={ animation }
                >
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="sale_product_container">
                                <div className="product_img"><img src={sale1.src}/></div>
                                <div className="text_container">
                                <div className="product_text">
                                    <h3>New arrivals</h3>
                                    <h3>are now in!</h3>
                                    <div className="product_button_container">
                                        <a href=" ">Show Collection</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <div className="sale_product_container">
                                <div className="product_img"><img src={sale2.src} /></div>
                                <div className="text_container">
                                <div className="product_text">
                                    <h3>New arrivals</h3>
                                    <h3>are now in!</h3>
                                    <div className="product_button_container">
                                        <a href=" ">Show Collection</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <div className="sale_product_container">
                                <div className="product_img"><img src={sale3.src} /></div>
                                <div className="text_container">
                                <div className="product_text">
                                    <h3>New arrivals</h3>
                                    <h3>are now in!</h3>
                                    <div className="product_button_container">
                                        <a href=" ">Show Collection</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </motion.div>
            </div>
        </div>
    )
}

export default Sale;


