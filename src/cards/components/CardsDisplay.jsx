import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,CardHeader,CardMedia,CardContent,CardActions,IconButton,Typography, Container} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditNoteIcon from '@mui/icons-material/EditNote';


export default function CardsDisplay() {
  const [cards, setCards] = useState([]);
  const getAllCards = async () =>{
    try {
      const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
      setCards(response.data);
      console.log("successfully read cards");
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{getAllCards();}, []);
  
  return (
    <Container sx={{display: "flex", flexWrap: "wrap" , w: "100vw" , h: "100vh"}}>
      {cards.map((card)=> (<Card sx={{minWidth: 250, minHeight:250}} key={card._id}>
        <CardHeader>
          <Typography>{card.title}</Typography>
        </CardHeader>
        <CardMedia  sx={{ height: 160, w:10}} image={card.image.url}/>
        <CardContent>
          <Typography>{card.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label='Edit Card'><ThumbUpIcon/></IconButton>
          <IconButton aria-label='Like Card'><EditNoteIcon/></IconButton>
        </CardActions>
      </Card>)
       )}
    </Container>
  )
}
