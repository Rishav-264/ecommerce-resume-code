import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    productImage:{
        height:"700px",
        width:"500px",
        [theme.breakpoints.down('sm')]: {
            width:"350px"
          },
        marginTop:"10px"
    },
    info:{
        marginTop:"50px"
    },
    price:{
        fontSize:"20px",
        fontWeight:"bold",
        color:"Orange"
    },
    star:{
        fontSize:"20px",
        fontWeight:"bold",
        color:"Orange",
        display:"inline-block"
    }
  }));

const ProductDetails = ({detailsToggle,setDetailsToggle,currentId,products,cart,setCart,phoneView,setTotal,totalAmount}) =>{

    const[currentProduct,setCurrentProduct] = useState({});

    const classes = useStyles();

    useEffect(()=>{
        for(let i =0;i<products.length;i++){
            if(products[i].id===currentId) setCurrentProduct(products[i]);
        }
    },[])

    const detailsToggler = () =>{
        setDetailsToggle(!detailsToggle);
    }

    const addCart=()=>{
        let temp = [];
        let Id = currentId;
        if(cart===null){
          temp.push(Id);
          setCart(temp);
          setTotal(totalAmount+currentProduct.price);
        }else{
        for(let i=0;i<cart.length;i++){
          temp.push(cart[i]);
        }
        temp.push(Id);
        setCart(temp);
        setTotal(totalAmount+currentProduct.price);
      }
        console.log(cart);
      }

    return(
        <div>
            {!phoneView&& <Grid container>
                <Grid item xs={12}>
                    <IconButton onClick={detailsToggler}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={5}>
                        <img src={currentProduct.imagePath} alt="product" className={classes.productImage}/>
                    </Grid>
                    <Grid item xs={7} className={classes.info}>
                        <h1>{currentProduct.name}</h1>
                        <Grid container>
                            <Grid item xs={6}>
                                <p className={classes.price}>₹{currentProduct.price}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                            </Grid>
                        </Grid>
                        <h4>Description:</h4>
                        <p>{currentProduct.description}</p>
                        <Button variant="contained" color="secondary" onClick={addCart}> 
                            Add To Cart
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>}
            {phoneView && <Grid container>
                <Grid item xs={12}>
                    <IconButton onClick={detailsToggler}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={12}>
                        <img src={currentProduct.imagePath} alt="product" className={classes.productImage}/>
                    </Grid>
                    <Grid item xs={12} className={classes.info}>
                        <h1>{currentProduct.name}</h1>
                        <Grid container>
                            <Grid item xs={6}>
                                <p className={classes.price}>₹{currentProduct.price}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                                <p className={classes.star}><StarIcon /></p>
                            </Grid>
                        </Grid>
                        <h4>Description:</h4>
                        <p>{currentProduct.description}</p>
                        <Button variant="contained" color="secondary" onClick={addCart}> 
                            Add To Cart
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>}
        </div>
    )
}

export default ProductDetails;