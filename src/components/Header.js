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
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color:"black",
      marginRight:"1rem",
      [theme.breakpoints.down('sm')]: {
        display:"none"
      },
    },
    headerNav:{
      color:"black",
      margin:"1rem",
      padding:"0.5rem",
    },
    headerIcon:{
      padding:"1rem",
      [theme.breakpoints.down('sm')]: {
        padding:"10px"
      },
    },
    header:{
        backgroundColor:"white",
        boxShadow:"0 0",
        [theme.breakpoints.down('sm')]: {
          display:"none"
        },
    },
    headerItems:{
        flexGrow:10
    },
    phoneHeader:{
      display:"none",
      [theme.breakpoints.down('sm')]: {
        display:"block"
      },
      backgroundColor:"white",
      boxShadow:"0 0",
    },
    phoneHeaderIcon:{
      marginTop:"16px"
    },
    searchBar:{
      width:"100%"
    },
    menuIcon:{
      color:"black",
      width:"100%",
      marginRight:"20px"
    }
  }));
  

const Header = ({ searchParam,setIsCart,toggleDrawer,addTotal,togglePhoneMenu }) =>{

    const [search,setSearch] = useState(false);

    const handleSearch = () =>{
      setSearch(!search);
    }

    const handleSearchParam = (e) =>{
      searchParam(e.target.value);
      console.log(e.target.value);
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
      <AppBar position="static" className={classes.phoneHeader}>
        <Toolbar style={{padding:"0"}}>
             <Grid container>
               <Grid item xs={2}>
                <Button className={classes.burgerButton} onClick={togglePhoneMenu}>
                  <Typography variant="p" className={classes.phoneHeaderIcon}>
                    <MenuIcon className={classes.menuIcon}/>
                  </Typography>
                </Button>
               </Grid>
               <Grid item xs={7}>
                <TextField id="standard-basic" label="Standard" onChange={handleSearchParam} className={classes.searchBar} />
               </Grid>
               <Grid item xs={3} align="center">
                <Button onClick={()=>{
                  toggleDrawer(true);
                  addTotal();
                }}>
                  <Typography variant="p" className={classes.phoneHeaderIcon}>
                    <LocalMallOutlinedIcon />
                  </Typography>
                </Button>
               </Grid>
             </Grid>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;