import { Box } from '@mui/material'
import React from 'react'
import NavbarPageLinks from './navbar/NavbarPageLinks'
import Logo from './navbar/Logo'
import NavbarUserProfile from './navbar/NavbarUserProfile'

export default function Header() {
  return (
    <Box sx={{p: 7, display: "flex", height: "5vh" , width: "100vw", alignItems: "center", backgroundColor: "primary.main" , color: "white" , justifyContent: "space-between", boxSizing: "border-box", overflow: "hidden" , }}>
      <Logo/>
      <NavbarPageLinks/>
      <NavbarUserProfile/>
    </Box>
  )
}
