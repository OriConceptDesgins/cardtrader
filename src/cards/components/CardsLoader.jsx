import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import CardsDisplay from "./CardsDisplay";

export default function CardsLoader({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLike,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) {
    return (
      <CardsDisplay
        cards={cards}
        handleCardDelete={handleDelete}
        handleCardLike={handleLike}
      />
    );
  }

  return null;
}
