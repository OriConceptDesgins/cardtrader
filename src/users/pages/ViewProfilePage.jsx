import React, {useEffect} from 'react'
import {Container, Box, Grid,Typography, Button} from '@mui/material';
import useUserProfile from '../hooks/useUserProfile';
import Spinner from '../../components/Spinner';
import { useUserProvider } from '../providers/UserProvider';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function ViewProfilePage() {
  const {isLoading, userInfo, handleGetUserInfo, error} = useUserProfile();
  const { user, token} = useUserProvider();

  useEffect(()=>{
    handleGetUserInfo();
  },[handleGetUserInfo, user, token]);
  

  return (
    <Container>
      {error && console.log(error)}
      {isLoading && <Spinner/>}
      {(!isLoading) &&
        <Box sx={{p:5}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="h4">User Information</Typography>
              
              <Button
              variant="outlined"
              component={Link}
              to={ROUTES.EDIT_PROFILE}
              startIcon={<EditNoteIcon />}
              sx={{ width: "50%" , mt:1}}
            >
              Edit Profile
            </Button>
            </Grid>
            <Grid item xs={12}>
              <img src={userInfo?.image.url} alt="user" sx={{w:1, h:1}}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                {
                `${userInfo?.name.first} 
                ${userInfo?.name.middle} 
                ${userInfo?.name.last}`
                }
              </ Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Phone: {userInfo?.phone}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Email: {userInfo?.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Admin: {userInfo?.isAdmin ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Business: {userInfo?.isBusiness ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Created At: {new Date(userInfo?.createdAt).toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Box>
      }
    </Container>
  )
}
