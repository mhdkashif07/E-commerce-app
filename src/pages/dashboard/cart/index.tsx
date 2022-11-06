import React, { useEffect, ReactElement } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";
import { removeFromCart, clearCart, decreaseCart, addToCart, getTotals } from "../../../app/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import Link from "next/link";
import Layout, { NestedLayout } from "..";


const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart.cartTotalAmount);
  
  const dispatch = useAppDispatch()


  useEffect(() => {
   dispatch(getTotals())
  }, [cart, dispatch])

  //function will get an id which wil be remove from cart items
  const handleRemoveItem = (item: number) => {
    dispatch(removeFromCart(item))
  }

  const handleDecreaseCart = (item: number) => {
    dispatch(decreaseCart(item))
  }

  const handleIncreaseCart = (item: number) => {
    dispatch(addToCart(item))
    localStorage.setItem("nextjs", "store value in localstorage")
  }


  return (
    <div className="cart__section container">
      <div className="main__section ">
        <div className="cart__continer">
          {cart?.cartItems?.length === 0 ? (
            <div className="continue__shopping">
              <h2>Your cart is empty</h2>
              <Link href="/"><h5><ArrowBackIcon />continue shopping</h5></Link>
            </div>
          ) : (
            <div data-aos="zoom-in" data-aos-duration="400">
              <div className="titles">
                <Grid container>
                  <Grid item xs={4} sm={4} md={6} lg={6} xl={6}>
                    <h3 className="product__title">Product</h3>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <h3 className="product__price-title">Price</h3>
                  </Grid>
                  <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                    <h3 className="product__quantity">Quantity</h3>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={2}
                    lg={2}
                    xl={2}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <h3 className="product__total">Total</h3>
                  </Grid>
                </Grid>
              </div>


              <div className="cart__items">
                <Grid container>
                  {cart?.cartItems &&
                    cart?.cartItems?.map((item: any) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        key={item.id}
                        style={{ padding: "15px 0", borderTop: "1px solid grey" }}
                      >
                        <Grid container>
                          <Grid item xs={10} sm={6} md={6} lg={6} xl={6}>
                            <div className="cart__image">
                              <div>
                                <img
                                  src={`../${item.image}`}
                                  alt="cart__img"
                                  style={{ width: "120px", height: "120px" }}
                                />
                              </div>
                              <div className="image__desc">
                                <h3>{item.name}</h3>
                                <button className="remove__item" onClick={() => handleRemoveItem(item)}>Remove</button>
                              </div>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            sm={2}
                            md={2}
                            lg={2}
                            xl={2}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__price">$ {item.price}</div>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__quantity">
                              <button  className="count" onClick={() => handleDecreaseCart(item)}> - </button>
                              <div>{item.cartQuantity}</div>
                              <button onClick={() => handleIncreaseCart(item)} > + </button>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sm={1}
                            md={1}
                            lg={1}
                            xl={1}
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__total">
                              <h3> ${item.price * item.cartQuantity}</h3>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                </Grid>
              </div>

              <div className="cart__summary">
                <div className="clear__cart">
                  {/* <button className="clear__btn" onClick={() => dispatch(clearCart())}>Clear Cart</button> */}
                </div>

                <div className="cart__checkout" data-aos="zoom-in" data-aos-duration="400">
                  <div className="subtotal">
                    <span><h3>Subtotal</h3></span>
                    <span className="amount"><h3>$ {cart.cartTotalAmount}</h3></span>
                  </div>
                  <div className="checkout">
                    <p>Taxes and shipping calculated at checkout</p>
                    <button className="checkout__btn">Check out</button>
                  </div>
                  <div className="continue__shopping text-start">
                    <Link href="/"><a href=""><h5><ArrowBackIcon />continue shopping</h5></a></Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {cartItem.map()} */}
        </div>
      </div>
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement){
  return  <NestedLayout>{page}</NestedLayout>
}


export default Cart;
