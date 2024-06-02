import React from "react";
import { useUserProvider } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCardsCRUD from "../hooks/useCardsCRUD";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";

export default function AddCardPage() {
  const { user } = useUserProvider();
  const { handleCreateCard } = useCardsCRUD();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCardForm, cardSchema, handleCreateCard);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="add card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
}
