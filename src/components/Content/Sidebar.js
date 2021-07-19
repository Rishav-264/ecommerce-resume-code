import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
        display:"none"
      },
    },
    sidebarHeading:{
        marginRight:"auto"
    },
    nested: {
      paddingLeft: theme.spacing(4),
      fontSize:"16px"
    },
  }));

const Sidebar = () =>{
  const classes = useStyles();
  const [apparels,setApparels] = useState(true);
  const [accessories, setAccesories] = useState(false);
  const [houseware,setHouseware] = useState(false);
  const [others,setOthers] = useState(false)

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

  return (
    <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
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
  );
}

export default Sidebar;