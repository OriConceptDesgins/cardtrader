import { Container, Paper } from '@mui/material'
import React from 'react'

export default function AboutPage() {
  const bgValue = "#888"
  return (
    <Container sx={{ width: '100%', height: '100vh', paddingTop: 2}}>
      <Paper sx={{p:2, bgcolor: "#888" , m: 1}}>
      Card Trader is starting a concept platform for simulation of investment in digital creations that encourages people to like and engage with visual creators.
      </Paper >
      
      <Paper sx={{p:2 ,bgcolor: "#777", m:1}}>Card Value :  The value of a determined by the number of likes it gets, the more people like it the more valuable it is , so 10 likes means its worth 10f$.</Paper>
      <Paper sx={{p:2 , bgcolor: "#666", m:2}}>f$ is fake dollar and allegedly mirrors the value of a $ ,  each time a user issues a like they get 1f$ deposited into their personal ledger, they can spend it wisely by investing it in cards that they think might get more likes</Paper>
      <Paper sx={{p:2 ,bgcolor: "#777", m:1}}>The ledger would get encrypted via cryptoJS and locked via a super secret key to prevent tampering.</Paper>
      <Paper sx={{p:2 ,bgcolor: bgValue}}>The challenge of the simulation would be to predict which cards would get more likes.</Paper>
      <Paper sx={{p:2 ,bgcolor: "#777", m:1}}> creating new cards is also possible but would require a target number of f$ and subject to moderation.</Paper>
      
      <Paper sx={{p:2 ,bgcolor: "#87877", m:1}}> At the moment the functionality is still in development and we are negotiating a deal with the SEC to have an f$ ETF which is fully regulated so check back with us and in time your fake dollar card adventure can begin.</Paper>
      

      

      

     

     
    </Container>
  )
}
