import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color:"black",
      marginRight:"1rem"
    },
    headerNav:{
      color:"black",
      margin:"1rem",
      padding:"0.5rem",
    },
    headerIcon:{
      padding:"1rem"
    },
    header:{
        backgroundColor:"white",
        boxShadow:"0 0"
    },
    headerItems:{
        flexGrow:10
    }
  }));
  

const Header = ({ searchParam,setIsCart,toggleDrawer,addTotal }) =>{

    const [search,setSearch] = useState(false);

    const handleSearch = () =>{
      setSearch(!search);
    }

    const handleSearchParam = (e) =>{
      searchParam(e.target.value);
      console.log(e.target.value);
    }

    const cartHandler = () =>{
      setIsCart(true);
    }

    const classes = useStyles();
    return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Avatar className={classes.title}>L</Avatar>
          <div className={classes.headerItems}>
           <Button>
            <Typography variant="p" className={classes.headerNav}>
                <a href="#">Shop</a>
            </Typography>
           </Button>
           <Button>
            <Typography variant="p" className={classes.headerNav}>
                <a href="#">Fabric</a>
            </Typography>
           </Button>
           <Button>
            <Typography variant="p" className={classes.headerNav}>
                <a href="#">Journal</a>
            </Typography>
           </Button>
           <Button>
            <Typography variant="p" className={classes.headerNav}>
                <a href="#">About</a>
            </Typography>
           </Button>
          </div>
          <div>
          <Button onClick={handleSearch}>
            <Typography variant="p" className={classes.headerIcon}>
                <SearchOutlinedIcon />
            </Typography>
           </Button>
           {search&&<TextField id="standard-basic" label="Standard" onChange={handleSearchParam} />}
           <Button onClick={()=>{
             toggleDrawer(true);
             addTotal();
             }}>
            <Typography variant="p" className={classes.headerIcon}>
                <LocalMallOutlinedIcon />
            </Typography>
           </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;