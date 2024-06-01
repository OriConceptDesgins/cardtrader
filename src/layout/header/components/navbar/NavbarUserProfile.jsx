import {useMemo, useState} from 'react';
import {IconButton,Menu,MenuItem } from '@mui/material/';
import NavItem from '../../../../routes/navComponents/NavItem';
import ROUTES from '../../../../routes/routesModel';
import { useUserProvider } from "../../../../users/providers/UserProvider";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import useUserProfile from '../../../../users/hooks/useUserProfile';


export default function NavbarUserProfile() {
  const { user } = useUserProvider();
  const {handleLogout} = useUserProfile();
  const [anchorEl, setAnchorEl] = useState(null);
  
  
  const isLoggedIn = useMemo(()=> { return user!=null; },[user]);
  const open = useMemo( () => { return Boolean(anchorEl)},[anchorEl]);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUserLogout = () => {
    setAnchorEl(null);
    handleLogout();
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountBoxIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby': 'Profile Menu'}}
      >

        {(!isLoggedIn) && 
          <MenuItem onClick={handleClose} aria-label='Sign in menu item'>
            <NavItem to={ROUTES.LOGIN} label={"Sign in"} />
          </MenuItem>
        }
      
        {(isLoggedIn) && 
          <MenuItem onClick={handleClose} aria-label='View User Profile menu item'>
            <NavItem to={ROUTES.USER_PROFILE} label={"View my profile"} />
          </MenuItem>
        }

        {(isLoggedIn) && 
          <MenuItem onClick={handleUserLogout} aria-label='User Logout'>
            Logout
          </MenuItem>     
        }
      </Menu>
    </div>
  );
}