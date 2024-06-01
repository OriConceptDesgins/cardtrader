import React from 'react'
import { CardHeader, Avatar } from '@mui/material';

export default function CardHeaderComponents({data}) {
  return (
    <CardHeader sx={{ display: "flex" , width: "100%", marginLeft: 1.5}}
      avatar={
        <Avatar aria-label="Avatar" sx={{bgcolor: data.color, color: "black"}}>
        {data.avatarLetter}
        </Avatar>
        }
      title= {data.title}
      subheader={data.subheader}
    />
  )
}
