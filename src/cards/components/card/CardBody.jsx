import React from 'react'
import { CardContent, CardMedia,  Typography } from '@mui/material'

export default function CardBody({imageURL, description}) {
  return (
    <>
    <CardMedia
        sx={{ height: 168.75, width: 400 ,padding:"1em"}}
        image= {imageURL}
        title="green iguana"
      />
      <CardContent>
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </>
  )
}
