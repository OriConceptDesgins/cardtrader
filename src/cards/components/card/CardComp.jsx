import { Card } from '@mui/material'
import React from 'react'
import CardHead from './CardHead'
import ActionBar from './ActionBar'
import CardBody from './CardBody';

const cardStyle = 
{
  width: 400,  
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
  console.log(cardData);
  return (
    <Card className="CardMain" sx={cardStyle}>
      <CardHead title={cardData.title} subtitle={cardData.subtitle}/>
      <CardBody 
        imageURL= {cardData.image.url} 
        imageAlt= {cardData.image.alt}
        imagedescription={cardData.description}/>
      <ActionBar
        handleCardLike = {handleCardLike}
        handleCardDelete = {handleCardDelete}
        cardId = {cardData._id}
      />
    </Card>
  )
}

export default CardComp