import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 400,
    },
    cartButton:{
      width:"100px",
      height:"30px",
      padding:"5px",
      margin:"10px"
    },
    cartText:{
      fontSize:"10px",
      width:"100%"
    }
  });

const Product = ({name,price,imagePath,isCart,id,cart,setCart,detailsToggle,setDetailsToggle,currentId,setCurrentId}) =>{
  const classes = useStyles();

  const addCart=()=>{
    let temp = [];
    let Id = id[0];
    if(cart===null){
      temp.push(Id);
      setCart(temp);
    }else{
    for(let i=0;i<cart.length;i++){
      temp.push(cart[i]);
    }
    temp.push(Id);
    setCart(temp);
  }
    console.log(cart);
  }

  const detailsToggler = () =>{
    setDetailsToggle(!detailsToggle);
    setCurrentId(currentId);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={detailsToggler}>
        <CardMedia
          className={classes.media}
          src={imagePath}
          title="Contemplative Reptile"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ₹{price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" color="secondary" className={classes.cartButton} onClick={addCart}> 
          <Typography variant="p" className={classes.cartText}>
            Add To Cart
          </Typography>
      </Button>
    </Card>
  );
}

export default Product;