import React from 'react'
import NavLink from './NavLink'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function NavItem({to, sx , label}) {
  return (
    <NavLink destination={to} sx={sx}>
      <Button variant="text" color="primary">
        <Typography variant="body1" color='primary.contrastText'>{label}</Typography>  
      </Button>
    </NavLink>
  )
}
