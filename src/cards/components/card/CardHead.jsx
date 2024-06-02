import React from 'react'
import { CardHeader} from '@mui/material';
import capitalizeString from '../../../helpers/capitalizeString';

export default function CardHead({title, subtitle}) {
  return (
    <CardHeader sx={{ display: "flex" , width: "100%", marginLeft: 1.5}}
      title= {capitalizeString(title)}
      subheader={subtitle}
    />
  )
}
