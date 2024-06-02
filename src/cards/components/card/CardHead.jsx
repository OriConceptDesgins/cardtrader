import React, { useState, useEffect } from 'react';
import { CardHeader, IconButton } from '@mui/material';
import capitalizeString from '../../../helpers/capitalizeString';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { addToFavorites, removeFromFavorites, isFavorite } from '../../../users/services/localStorageService';

export default function CardHead({ title, subtitle, cardId }) {
  const [isFavorited, setIsFavorited] = useState(isFavorite(cardId));


  useEffect(() => {
    setIsFavorited(isFavorite(cardId));
  }, [cardId]);


  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(cardId);
    } else {
      addToFavorites(cardId);
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <CardHeader
      sx={{ display: "flex" , width: "90%", m: "2m"}}
      title={capitalizeString(title)}
      subheader={subtitle}
      action={
        <IconButton onClick={handleToggleFavorite}>
          {isFavorited ? <StarIcon sx={{ color: 'primary.light' }}/> : <StarOutlineIcon sx={{ color: 'primary.light' }}/>}
        </IconButton>
      }
    />
  );
}
