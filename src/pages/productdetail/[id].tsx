import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../app/hook";
import { addToCart, getTotals } from "../../app/slices/cartSlice";
import { data } from "../../shared/constants";
import { allDataTypes } from "../../shared/types";
// import { useParams } from "react-router-dom";
// import { Header } from "./Header";
// import { useHistory } from "react-router";

// import PRODUCTS from "../data/men";
// import { useSelector, useDispatch } from 'react-redux'
// import { addToCart, getTotals } from '../app/slice/CartSlice'

interface ProductProps {
  productDetails:{
    id: number;
    image: string;
    name: string;
    price: string;
    description: string;
  }[]
}

interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
    description: string;
}

const ProductDetail: FC<ProductProps> = ({productDetails}) => {
  console.log(productDetails);
  const { query } = useRouter()
  const productId = query.id;
  const dispatch =  useAppDispatch()
  


  const handleAddToCart = (item: Product ) => {
    dispatch(addToCart(item))
    dispatch(getTotals())
    // history.push("/cart")
  }

 
  return (
    <div className="singleProduct__page container" data-aos="zoom-in" data-aos-duration="400">
    <div className="singleproduct__section main__section">
      <div className="single__product container ">
        {productDetails.filter((item) => item.id == Number(productId)).map((item) => (
          <div className="product" key={item.id}>
            <Grid container spacing={3}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className="product__img">
                <img src={`/${item.image}`} alt="" />
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={5} lg={4} xl={4}>
              <div className="product__img">
                <img src={`/${item.image}`} alt="" style={{height: '450px'}} />
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="product__details">
                <h4 className="product__discount">sale</h4>
                <h1 className="product__name">{item.name}</h1>
                <h2 className="product__price">${item.price}</h2>
                <h4 className="product__description">{item.description}</h4>

                <div className="cart__btn" onClick={() => handleAddToCart(item) }>
                  <a href="#">Cart</a>
                </div>
              </div>
            </Grid>
            </Grid>
          </div>
        ))}
      {/* <h2>single product component {id}</h2> */}
    </div>
    </div>
    </div>
  );
};


export const getServerSideProps = ({params}: {params: { id: number }}) => {
  console.log("this is the id", params.id);

  const newData = data.mens.filter((item) => {
    item.id === 3
  })
  
  
  return {
    props:{
      productDetails: data?.mens
    }
  }
}


// export const getStaticPaths = async () => {
//   return {
//     paths: data.mens.map((item) => {
//       return {params : { id: String(item.id) }}
//     }),
//     fallback: false,
//   }
// }

export default ProductDetail;
