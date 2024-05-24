import ROUTES from "./routesModel";
import {Routes, Route } from "react-router-dom";
import React from 'react'

import CardsPage from "../cards/pages/CardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import AboutPage from "../pages/AboutPage";
import SignupPage from "../users/pages/SignupPage"
import LoginPage from "../users/pages/LoginPage";
import AddCardPage from "../cards/pages/AddCardPage";
import ViewProfilePage from "../users/pages/ViewProfilePage";
import EditProfilePage from "../users/pages/EditProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ADD_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD} element={<EditCardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<ViewProfilePage />} />
      <Route path={ROUTES.EDIT_PROFILE} element={<EditProfilePage />} />
    </Routes>
  )
}
