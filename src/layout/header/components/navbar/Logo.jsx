import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button} from "@mui/material";
import ROUTES from '../../../../routes/routesModel';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Button sx={{color: 'White', fontSize: '20pt'}} onClick={() => navigate(ROUTES.ROOT)}>CardTrader <PriceChangeIcon /></Button>
  )
}
