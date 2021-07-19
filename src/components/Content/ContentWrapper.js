import React, { useState,useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const useStyles = makeStyles((theme) => ({
   desktop:{
    [theme.breakpoints.down('sm')]: {
        display:"none"
      },
   },
   phone:{
    [theme.breakpoints.down('sm')]: {
        display:"block"
      },
   }
  }));

const ContentWrapper = ({ products,searchParam,setCart,cart,cartProducts,totalAmount,setTotal,phoneView }) =>{

    const classes=useStyles();

    return(
        <div>
            {!phoneView&&<Grid container className={classes.desktop}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <ProductList products={products} searchParam={searchParam} setCart={setCart} cart={cart} totalAmount={totalAmount} setTotal={setTotal} phoneView={phoneView}/>
                </Grid>
            </Grid>}
            {phoneView && <Grid container className={classes.phone}>
                <Grid item xs={12}>
                    <ProductList products={products} searchParam={searchParam} setCart={setCart} cart={cart} totalAmount={totalAmount} setTotal={setTotal} phoneView={phoneView}/>
                </Grid>
            </Grid>}
        </div>
    )
}

export default ContentWrapper;