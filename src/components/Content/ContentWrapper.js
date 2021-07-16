import React, { useState,useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const ContentWrapper = ({ products,searchParam,setCart,cart,cartProducts }) =>{

    return(
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <ProductList products={products} searchParam={searchParam} setCart={setCart} cart={cart}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContentWrapper;