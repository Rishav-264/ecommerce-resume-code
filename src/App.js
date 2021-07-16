import './App.css';
import React, { useState,useEffect }  from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Header from "./components/Header";
import ContentWrapper from "./components/Content/ContentWrapper";
import productsData from "./components/Content/productsData";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
 drawer:{
   minWidth:"25rem",
   textAlign:"left",
   fontWeight:"bold"
 },
 drawerName:{
   padding:"10px",
   margin:"10px"
 },
 root: {
  display: 'flex',
  margin:"20px",
},
details: {
  display: 'flex',
  flexDirection: 'column',
},
content: {
  flex: '1 0 auto',
},
cover: {
  width:"100px",
  height:"100px",
},
controls: {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: "10px",
  paddingBottom: "10px",
},
playIcon: {
  height: 38,
  width: 38,
},
});


function App() {

  const classes= useStyles();
  const theme = useTheme();
  const [searchParam,setParam] = useState("");
  const [products,setProducts] = useState(productsData);
  const [isCart,setIsCart] = useState(false);
  const [anchor,setAnchor] = useState('right');
  const [drawerOpen,setOpen] = useState(false);
  const [cartProducts,setCartProducts] = useState([]);
  const [cart,setCart] = useState(null);
  const [totalAmount,setTotal] = useState(0);

  const toggleDrawer = (open) =>{
    setOpen(open);
  }

    useEffect(()=>{
        if(cart!=null){
            setCartProducts(products.filter(product => cart.includes(product.id)));
        }
    },[cart])

    const addTotal = () => {
      for(let i = 0;i<cartProducts.length;i++){
        setTotal(totalAmount+cartProducts[i].price);
        console.log(totalAmount);
      }
    }

  return (
    <div className="App">
      <Header searchParam={setParam} setIsCart={setIsCart} open={drawerOpen} setOpen={setOpen} toggleDrawer={toggleDrawer} addTotal={addTotal}/>
      <ContentWrapper products={products} searchParam={searchParam} setProducts={setProducts} isCart={isCart} setIsCart={setIsCart} setCart={setCart} cart={cart} cartProducts={cartProducts}/>
      {/* {setProducts(productsData)} */}
      <Drawer anchor={anchor} open={drawerOpen} onClose={()=>{toggleDrawer(false)}}>
        <div className={classes.drawer}>
          <Typography variant="h4" className={classes.drawerName}>
                Shopping Cart
          </Typography>
          {cartProducts.map((product)=>(
           <Card className={classes.root}>
            <CardMedia
             className={classes.cover}
             src={product.imagePath}
             component="img"
             title="Live from space album cover"
           />
           <div className={classes.details}>
             <CardContent className={classes.content}>
               <Typography component="h6" variant="h5">
                 {product.name}
               </Typography>
               <Typography variant="body2" color="textSecondary">
                 Price: ₹{product.price}
               </Typography>
             </CardContent>
           </div>
         </Card>
          ))}
          <Typography component="h6" variant="h5" className={classes.drawerName}>
                 Total Amount : ₹{totalAmount}
          </Typography>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
