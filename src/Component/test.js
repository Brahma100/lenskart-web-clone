import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Category_drop from './Category_drop';
import './test.css';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {

  const [anchorEl, setAnchorEl] = React.useState(false);
  const [open,setOpen]=React.useState(false);

  const handleClick = (event) => {
      setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
        <div class="dropdown">
            <button class="dropbtn"><img src="https://static1.lenskart.com/media/desktop/img/14-June-20/thinoptics-icon.jpg" alt=""/></button>
            <div class="dropdown-content">
                <Category_drop  title="Hello World" description="Let's Explore Somethings" price="RS.9999" />
                <Category_drop  title="Hello World" description="Let's Explore Somethings" price="RS.9999" />
                <Category_drop  title="Hello World" description="Let's Explore Somethings" price="RS.9999" />
                <Category_drop  title="Hello World" description="Let's Explore Somethings" price="RS.9999" />
            </div>
        </div>
    </div>
  );
}