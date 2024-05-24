import React from 'react'
import NavItem from '../../../../routes/navComponents/NavItem'
import ROUTES from '../../../../routes/routesModel'

export default function NavbarPageLinks() {
  return (
    <>
      <NavItem to={ROUTES.CARDS} label={"Cards"}/>
      <NavItem to={ROUTES.ABOUT} label={"About"}/>
    </>
  )
}
