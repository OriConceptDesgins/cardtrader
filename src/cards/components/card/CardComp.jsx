import { Card, CardContent, CardMedia,  Typography } from '@mui/material'
import React from 'react'
import CardHead from './CardHead'
import ActionBar from './ActionBar'

const cardStyle = 
{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black",
      color: "white" ,
      borderRadius: 2 ,
      justifyContent: "center" ,
      alignItems: "center",
      margin:2 ,
      border: "0.1em solid black",
};

function CardComp({
  cardData,
  handleCardLike,
  handleCardDelete,
}) {
  console.log(cardData.cardImagePath);
  return (
    <Card className="CardMain" sx={cardStyle}>
      <CardHead data = {cardData.cardHeader}/>
      <CardMedia
        sx={{ height: 500, width: 300 ,padding:"1em"}}
        image= {cardData.cardImage}
        title="green iguana"
      />
      <CardContent>
        <Typography>
          {cardData.cardContent}
        </Typography>
      </CardContent>
      <ActionBar
        handleCardLike = {handleCardLike}
        handleCardDelete = {handleCardDelete}
        cardId = {cardData._id}
      />
    </Card>
  )
}

export default CardComp