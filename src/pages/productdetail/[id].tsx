import { Grid } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { FC, useEffect, useContext, ReactElement } from "react";
import { useAppDispatch } from "../../app/hook";
import { addToCart, getTotals } from "../../app/slices/cartSlice";
import PrimaryLayout from "../../components/layout/PrimaryLayout";
import { AuthContext } from "../../context/auth-context";
import { data } from "../../shared/constants";
import { allDataTypes, GetLayout } from "../../shared/types";
import { useAuth } from "../../utils/utils";
// import { useParams } from "react-router-dom";
// import { Header } from "./Header";
// import { useHistory } from "react-router";

// import PRODUCTS from "../data/men";
// import { useSelector, useDispatch } from 'react-redux'
// import { addToCart, getTotals } from '../app/slice/CartSlice'

interface ProductProps {
  productDetails: {
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

const ProductDetail: FC<ProductProps> & GetLayout = ({ productDetails }) => {
  const { query } = useRouter()
  const productId = query.id;
  const dispatch = useAppDispatch()
  const auth = useAuth()
  const router = useRouter()




  //check if the user is not login then redirect to login
  const handleAddToCart = (item: Product) => {
    if (!auth.isUserAuthenticated()) {
      router.push("/login")
    }
    else {
      dispatch(addToCart(item))
      dispatch(getTotals())
    }
    // history.push("/cart")
  }


  return (
    <div className="singleProduct__page container" data-aos="zoom-in" data-aos-duration="400">
      <div className="singleproduct__section main__section">
        <div className="single__product container ">
          {productDetails.filter((item) => item.id == Number(productId)).map((item) => (
            <div className="product" key={item.id}>
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={1} lg={1} xl={1}>
                  <div className="product__img">
                    <img src={`/${item.image}`} alt="" />
                  </div>
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={4} xl={4}>
                  <div className="product__img">
                    <img src={`/${item.image}`} alt="" style={{ height: '450px' }} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                  <div className="product__details">
                    <h4 className="product__discount">sale</h4>
                    <h1 className="product__name">{item.name}</h1>
                    <h2 className="product__price">${item.price}</h2>
                    <h4 className="product__description">{item.description}</h4>

                    <div className="cart__btn" onClick={() => handleAddToCart(item)}>
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

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      productDetails: data?.mens
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.mens.map((item) => {
      return { params: { id: String(item.id) } }
    }),
    fallback: false,
  }
}

export default ProductDetail;
