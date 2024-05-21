import {useState} from 'react';
import {IconButton,Menu,MenuItem } from '@mui/material/';
import NavItem from '../../../../routes/navComponents/NavItem';
import ROUTES from '../../../../routes/routesModel';
import { useUserProvider } from "../providers/UserProvider";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import useUserProfile from '../../../../users/hooks/useUserProfile';
export default function NavbarUserProfile() {

  const { user } = useUserProvider();
  const {handleLogout} = useUserProfile();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
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
        {(user == null) ? 
        (
          <>
            <MenuItem onClick={handleClose}>
              <NavItem to={ROUTES.SIGNUP} label={"Sign Up"} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavItem to={ROUTES.LOGIN} label={"Log In"} />
            </MenuItem>
          </>
          
        ):(
          <>
          <MenuItem onClick={handleClose}>
            <NavItem to={ROUTES.USER_PROFILE} label={"My Profile"} />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavItem to={ROUTES.EDIT_PROFILE} label={"Edit Profile"} />
          </MenuItem>
          <MenuItem onClick={handleUserLogout}>Logout</MenuItem>       
          </>
        )}
      </Menu>
    </div>
  );
}