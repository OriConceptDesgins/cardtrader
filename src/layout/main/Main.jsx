import React from 'react'
import {Box}from '@mui/material'


export default function Main({children}) {
const isDark = true;
  return (
    <Box
      sx={{
        minHeight: "85vh",
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
      }}
    >
      {children}
    </Box>
  )
}
