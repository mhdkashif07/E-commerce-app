import { Grid } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { FC, useEffect, useContext, ReactElement, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { addToCart, getTotals } from "../../app/slices/cartSlice";
import PrimaryLayout from "../../components/layout/PrimaryLayout";
import { AuthContext } from "../../context/auth-context";
import { data } from "../../shared/constants";
import { allDataTypes, GetLayout, Product } from "../../shared/types";
import { useAuth } from "../../utils/utils";
// import { useParams } from "react-router-dom";
// import { Header } from "./Header";
// import { useHistory } from "react-router";

// import PRODUCTS from "../data/men";
// import { useSelector, useDispatch } from 'react-redux'
// import { addToCart, getTotals } from '../app/slice/CartSlice'



const ProductDetail: FC & GetLayout = () => {
  //get images from redux
  const images = useAppSelector(state => state.productData.images)
  
  const [product, setProduct] = useState<Product | null>(null)
  const { query } = useRouter()
  const productId = query.id;
  const dispatch = useAppDispatch()
  const auth = useAuth()
  const router = useRouter()
  console.log(productId);

  // ** fetch data for single product details
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
  const fetchData = async() => {
    const response = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${productId}`, options);
    const data = await response.json()
    const product = data?.product
    console.log(product);
    
    setProduct(product)
    
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  




  //check if the user is not login then redirect to login
  const handleAddToCart = (item: Product | null) => {
    // if (!auth.isUserAuthenticated()) {
    //   router.push("/login")
    // }
    // else {
      dispatch(addToCart(item))
      dispatch(getTotals())
    //}
    // history.push("/cart")
  }


  return (
    <div className="singleProduct__page container" data-aos="zoom-in" data-aos-duration="400">
      <div className="singleproduct__section main__section">
        <div className="single__product container ">
            <div className="product" key={product?.code}>
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={1} lg={1} xl={1}>
                  <div className="product__img">
                    <img src={`${images?.[0]?.url}`} alt="" />
                  </div>
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={4} xl={4}>
                  <div className="product__img">
                  <img src={`${images[0]?.url}`}  alt="" style={{ height: '450px' }} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                  <div className="product__details">
                    {/* <h4 className="product__discount">sale</h4> */}
                    <h1 className="product__name">{product?.name}</h1>
                    <h2 className="product__price">${product?.whitePrice?.price}</h2>
                    <h4 className="product__description">{product?.description}</h4>

                    <div className="cart__btn" onClick={() => handleAddToCart(product)}>
                      <a href="#">Cart</a>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}


// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   console.log(params);
//   console.log("hello");
  
  
  // const options = {
  //   method: 'GET',
  //   url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
  //   params: {lang: 'en', country: 'us', productcode: '0839915011'},
  //   headers: {
  //     'X-RapidAPI-Key': 'de7170f84cmsh66bb3410a574859p1592b8jsn9a2eddf68f02',
  //     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  //   }
  // };
//   return {
//     props: {
//       productDetails: data?.mens
//     }
//   }
// }


// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: data.mens.map((item) => {
//       return { params: { id: String(item.id) } }
//     }),
//     fallback: false,
//   }
// }

export default ProductDetail;
