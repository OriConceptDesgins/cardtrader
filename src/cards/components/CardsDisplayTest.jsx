import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,CardHeader,CardMedia,CardContent,CardActions,IconButton,Typography, Container} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSnack } from '../../providers/SnackbarProvider';


export default function CardsDisplay() {
  const [cards, setCards] = useState([]);
  const setSnack = useSnack();

  const getAllCards = async () =>{
    try {
      const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards");
      setCards(response.data);
      setSnack("success", "successfully read cards");
      console.log("successfully read cards");
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{getAllCards();}, []);
  
  return (
    <Container sx={{display: "flex", flexWrap: "wrap" , w: "100vw" , h: "100vh"}}>
      {cards.map((card)=> (<Card sx={{maxWidth: 350, maxHeight:"350", m: 1}} key={card._id}>
        <CardHeader sx={{height: "100"}}>
          <Typography>title : {card.title}</Typography>
        </CardHeader>
        <CardMedia  sx={{ height: 10, w:160}} image={card.image.url}/>
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
