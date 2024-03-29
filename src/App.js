import './App.css';
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import ContentWrapper from './components/Content/ContentWrapper';
import productsData from './components/Content/productsData';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import useWindowDimensions from './windowDimensions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  drawer: {
    maxWidth: '25rem',
    minWidth: '22rem',
    textAlign: 'left',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '23rem',
    },
  },
  drawerName: {
    margin: '0.7rem 8px',
  },
  root: {
    display: 'flex',
    margin: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '5px',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100px',
    height: '150px',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '100px',
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingBottom: '10px',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  productName: {
    width: '8rem',
  },
  title: {
    color: 'white',
    marginRight: '1rem',
    backgroundColor: '#b3bdb6',
    marginTop: '0',
  },
  spaceHolder: {
    width: '50%',
    minWidth: '40px',
  },
  profileContainer: {
    // display:'flex',
    // alignItems:'right',
    // justifyContent:'right'
  },
  profileIcon: {
    float: 'left',
    margin: '0.5rem',
  },
  profileText: {
    padding: '5px',
    '& h3': {
      margin: '0',
      fontSize: '14px',
      fontWeight: 500,
    },
    '& span': {
      fontSize: '18px',
    },
  },
  cartHeader: {
    display: 'flex',
  },
  cartIcon: {
    margin: '1rem 0',
  },
  paymentButton: {
    cursor: 'pointer',
    padding: '3px',
    textAlign: 'center',
    backgroundColor: '#1F0824',
    '& p': {
      color: 'white',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [searchParam, setParam] = useState('');
  const [products, setProducts] = useState(productsData);
  const [isCart, setIsCart] = useState(false);
  const [anchor, setAnchor] = useState('right');
  const [phoneMenuAnchor, setPhoneAnchor] = useState('left');
  const [phoneMenuOpen, setPhoneMenu] = useState(false);
  const [drawerOpen, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [totalAmount, setTotal] = useState(0);
  const { width, height } = useWindowDimensions();
  const [phoneView, setView] = useState(false);
  const [apparels, setApparels] = useState(true);
  const [accessories, setAccesories] = useState(false);
  const [houseware, setHouseware] = useState(false);
  const [others, setOthers] = useState(false);

  const handleApparels = () => {
    setApparels(!apparels);
  };
  const handleAccesories = () => {
    setAccesories(!accessories);
  };
  const handleHouseware = () => {
    setHouseware(!houseware);
  };
  const handleOthers = () => {
    setOthers(!others);
  };

  const toggleDrawer = open => {
    setOpen(open);
  };
  const togglePhoneMenu = open => {
    setPhoneMenu(open);
  };

  useEffect(() => {
    console.log(width);
    console.log(height);
    if (width < 500) {
      setView(true);
    }
    if (cart != null) {
      setCartProducts(products.filter(product => cart.includes(product.id)));
    }
  }, [cart]);

  const addTotal = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      //setTotal(totalAmount+cartProducts[i].price);
      console.log(totalAmount);
    }
  };

  const removeCart = id => {
    let temp = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] !== id) {
        temp.push(cart[i]);
      } else {
        setTotal(totalAmount - cartProducts[i].price);
      }
    }
    setCart(temp);
  };

  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    let cost = parseInt(totalAmount) * 100;

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_0ORzc2sYe5nR15',
      currency: 'INR',
      amount: cost.toString(),
      // order_id: "order_9A33XWu170gUtm",
      name: 'Test Payment',
      description: 'Thank you.',
      image: '/profileImage.jpg',
      handler: function (response) {
        // alert(response.razorpay_payment_id)
        // alert(response.razorpay_order_id)
        // alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Rishav Gooptu',
        email: 'rishav.gooptu@example.com',
        contact: '9999999999',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <Header
        searchParam={setParam}
        setIsCart={setIsCart}
        open={drawerOpen}
        setOpen={setOpen}
        toggleDrawer={toggleDrawer}
        addTotal={addTotal}
        togglePhoneMenu={togglePhoneMenu}
      />
      <ContentWrapper
        products={products}
        searchParam={searchParam}
        setProducts={setProducts}
        isCart={isCart}
        setIsCart={setIsCart}
        setCart={setCart}
        cart={cart}
        cartProducts={cartProducts}
        totalAmount={totalAmount}
        setTotal={setTotal}
        phoneView={phoneView}
      />
      {/* {setProducts(productsData)} */}
      <Drawer
        anchor={anchor}
        open={drawerOpen}
        onClose={() => {
          toggleDrawer(false);
        }}
        onOpen={addTotal}
      >
        <div className={classes.drawer}>
          <div className={classes.profileContainer}>
            <Avatar
              className={classes.profileIcon}
              alt="Remy Sharp"
              src="/profileImage.jpg"
            />
            <div className={classes.profileText}>
              <h3>Welcome,</h3>
              <span>Rishav Gooptu</span>
            </div>
          </div>
          <hr />
          <div className={classes.cartHeader}>
            <Typography variant="h4" className={classes.drawerName}>
              My Cart
            </Typography>
            <div className={classes.cartIcon}>
              <AddShoppingCartIcon style={{ fontSize: '30px' }} />
            </div>
          </div>
          {cartProducts.map(product => (
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                src={product.imagePath}
                component="img"
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography
                    component="h6"
                    variant="h5"
                    className={classes.productName}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ₹{product.price}
                  </Typography>
                </CardContent>
              </div>
              <Button disabled className={classes.spaceHolder}></Button>
              <Button
                onClick={() => {
                  removeCart(product.id);
                }}
              >
                <CloseIcon />
              </Button>
            </Card>
          ))}
          <Typography
            component="h6"
            variant="h5"
            className={classes.drawerName}
          >
            Total Amount : ₹{totalAmount}
          </Typography>
          <div className={classes.paymentButton} onClick={displayRazorpay}>
            <p>Pay Now</p>
          </div>
        </div>
      </Drawer>
      {phoneView && (
        <Drawer
          anchor={phoneMenuAnchor}
          open={phoneMenuOpen}
          onClose={() => {
            togglePhoneMenu(false);
          }}
        >
          <div className={classes.drawer}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.menuItems}
            >
              <ListItem
                button
                onClick={handleApparels}
                className={classes.title}
              >
                <Typography variant="h5">EcommerceTitle</Typography>
              </ListItem>
              <ListItem button onClick={handleApparels}>
                <Typography variant="h5" className={classes.sidebarHeading}>
                  Apparels
                </Typography>
                {apparels ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={apparels} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      T-Shirts
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Shirts
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Sweaters
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Sweatpants
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Jeans
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Trousers
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={handleAccesories}>
                <Typography variant="h5" className={classes.sidebarHeading}>
                  Accesories
                </Typography>
                {accessories ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={accessories} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Watches
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Necklaces
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Rings
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={handleHouseware}>
                <Typography variant="h5" className={classes.sidebarHeading}>
                  Houseware
                </Typography>
                {houseware ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={houseware} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Tables
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Chairs
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Lights
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={handleOthers}>
                <Typography variant="h5" className={classes.sidebarHeading}>
                  Others
                </Typography>
                {others ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={others} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Typography variant="p" className={classes.headerNav}>
                      Others
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default App;
