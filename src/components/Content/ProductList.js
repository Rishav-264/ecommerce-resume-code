import React,{useState} from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductDetails from "./productDetails";

const useStyles= makeStyles((theme)=>({
    content: {
        flexGrow: 1,
        backgroundColor: "white",
        padding: "1rem",
      },
      root: {
        flexGrow: 1,
      },
}))

const ProductList = ({ products,searchParam,totalAmount,cart,setCart,setTotal,phoneView }) => {
    const [detailsToggle,setDetailsToggle] = useState(false);
    const [currentId,setCurrentId] = useState(0);

    const classes = useStyles();

    return(
      <main className={classes.content}>
      <div className={classes.toolbar} />
      {!detailsToggle&&<Grid container justify="center" spacing={4}>
        {console.log(searchParam)}
        {products.filter((product)=>{
          if(searchParam === "") return product;
          else if(product.name.includes(searchParam)===true){
            console.log(product.name.includes(searchParam))
            return product;
          }
        }).map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product name={product.name} price={product.price} imagePath={product.imagePath} cart={cart} setCart={setCart} id={[product.id]} detailsToggle={detailsToggle} setDetailsToggle={setDetailsToggle} currentId={product.id} setCurrentId={setCurrentId} setTotal={setTotal} totalAmount={totalAmount}/>
          </Grid>
        ))}
      </Grid>}
      {detailsToggle&&<ProductDetails detailsToggle={detailsToggle} setDetailsToggle={setDetailsToggle} currentId={currentId} products={products} cart={cart} setCart={setCart} phoneView={phoneView} setTotal={setTotal} totalAmount={totalAmount}/>}
    </main>
    )
}

export default ProductList;