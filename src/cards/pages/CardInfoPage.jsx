import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import useCardsCRUD from '../hooks/useCardsCRUD';
import { Typography, Card, CardContent, CardMedia, Link } from '@mui/material';

export default function CardInfoPage() {
    const {id} = useParams();
    const {getCardById, card} = useCardsCRUD();

    useEffect(() => {
      getCardById(id)
    }, [getCardById, id])

    if (!card) {
        return <div>Loading...</div>;
      }
    
  return (
    <div>
        <Card sx= {{justifyContent:"center", display:"flex", bgcolor: "black", color: "white"}}>
            <CardContent>
            <Typography variant="h5" component="h2">{card.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{card.subtitle}</Typography>
            <CardMedia
                component="img"
                alt={card.image.alt}
                height={"auto"}
                image={card.image.url}
                title={card.image.alt}
                sx={{ width: '20%', height: 'auto' }}
            />
            <Typography variant="body1">{card.description}</Typography>
            <Typography variant="subtitle1" gutterBottom>Contact Information:</Typography>
            <Typography variant="body2" gutterBottom>Phone: {card.phone}</Typography>
            <Typography variant="body2" gutterBottom>Email: {card.email}</Typography>
            <Typography variant="body2" gutterBottom>Website: <Link href={card.web}>{card.web}</Link></Typography>
            <Typography variant="subtitle1" gutterBottom>Address:</Typography>
            <Typography variant="body2" gutterBottom>Street: {card.address.street}</Typography>
            <Typography variant="body2" gutterBottom>City: {card.address.city}</Typography>
            <Typography variant="body2" gutterBottom>Country: {card.address.country}</Typography>
            <Typography variant="body2" gutterBottom>Zip Code: {card.address.zip}</Typography>
            <Typography variant="body2" gutterBottom>House Number: {card.address.houseNumber}</Typography>
            <Typography variant="subtitle1" gutterBottom>Business Information:</Typography>
            <Typography variant="body2" gutterBottom>Biz Number: {card.bizNumber}</Typography>
            <Typography variant="body2" gutterBottom>Likes: {card.likes.length}</Typography>
            <Typography variant="body2" gutterBottom>Created At: {new Date(card.createdAt).toLocaleString()}</Typography>
            </CardContent>
        </Card>

    </div>
  )
}
