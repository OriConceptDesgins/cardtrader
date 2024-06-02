import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";


export default function CardActionBar({handleCardLike, handleCardDelete,cardId}) {

  const navigate = useNavigate();

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  const handleCardInfo = (id) => 
    {
      navigate(ROUTES.CARD_INFO + "/" + id);
    }
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between", display: "flex", width: "100%"}}>
      <Box>
        <IconButton onClick={() => handleCardDelete(cardId)} color="info">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(cardId)} color="primary">
          <ModeEditIcon />
        </IconButton>
        <IconButton onClick={() => handleCardInfo(cardId) } color="primary">
          <InfoIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId)} color="warning">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}