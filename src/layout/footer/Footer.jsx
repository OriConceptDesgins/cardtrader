import React from 'react';
import { Box } from "@mui/material";
import NavItem from '../../routes/navComponents/NavItem'
import ROUTES from '../../routes/routesModel'


export default function Footer() {
  return (
    <Box sx={{p: 5, display: "flex", height: "5vh" , width: "100vw", alignItems: "center", backgroundColor: "primary.main" , color: "white" , justifyContent: "space-between", boxSizing: "border-box", overflow: "hidden" , }}>
    <NavItem to={ROUTES.CARDS} label={"Cards"}/>
    <NavItem to={ROUTES.ABOUT} label={"About"}/>
    <NavItem to={ROUTES.LOGIN} label={"Sign In"}/>
    <NavItem to={ROUTES.ADD_CARD} label={"Add Card"}/>
   </Box>
  )
}
