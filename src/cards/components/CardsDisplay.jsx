import React from "react";
import CardComp from "./card/CardComp";
import { Box} from "@mui/material";

export default function CardsDisplay({ cards, handleCardDelete, handleCardLike }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width:"80vw"}}>
      {cards.map((card) => (
        <CardComp
          key={card._id}
          cardData={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Box>
  );
}
