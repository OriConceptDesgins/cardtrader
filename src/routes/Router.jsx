import ROUTES from "./routesModel";
import {Routes, Route } from "react-router-dom";
import React from 'react'

import CardsPage from "../cards/pages/CardsPage";
import EditCard from "../cards/pages/EditCard";
import About from "../pages/About";
import SignUp from "../user/pages/SignUp";
import Login from "../user/pages/Login";
import ViewProfile from "../user/pages/ViewProfile";
import EditProfile from "../user/pages/EditProfile";
import AddCard from "../cards/pages/AddCard";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} component={<CardsPage />} />
      <Route path={ROUTES.ADD_CARD} component={<AddCard />} />
      <Route path={ROUTES.EDIT_CARD} component={<EditCard />} />
      <Route path={ROUTES.ABOUT} component={<About />} />
      <Route path={ROUTES.SIGNUP} component={<SignUp />} />
      <Route path={ROUTES.LOGIN} component={<Login />} />
      <Route path={ROUTES.USER_PROFILE} component={<ViewProfile />} />
      <Route path={ROUTES.EDIT_PROFILE} component={<EditProfile />} />
    </Routes>
  )
}
