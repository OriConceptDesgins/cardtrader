import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import { useUserProvider } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUserProfile from "../hooks/useUserProfile";
import EditProfileForm from "../components/EditProfileForm";


export default function EditProfilePage() {

  const {handleEditSubmit} = useUserProfile();

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleEditSubmit);

  const { user } = useUserProvider();

  return (
    <Container
    sx={{
      paddingTop: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <EditProfileForm
      onSubmit={onSubmit}
      onReset={handleReset}
      validateForm={validateForm}
      title={"Edit Profile Details"}
      errors={errors}
      data={data}
      onInputChange={handleChange}
      handleChangeCheckBox={handleChangeCheckBox}
    />
  </Container>
  )
}
