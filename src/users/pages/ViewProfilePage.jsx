import React, {useEffect, useState} from 'react'
import { Container, Paper } from '@mui/material';
import useUserProfile from '../hooks/useUserProfile';
import Spinner from '../../components/Spinner';

export default function ViewProfilePage() {
  const {isLoading, userInfo, handleGetUserInfo} = useUserProfile()

  useEffect(()=>{
    handleGetUserInfo();
  },[userInfo, handleGetUserInfo]);
  
  return (
    <Container>
      {isLoading && <Spinner/>}
      {(!isLoading) &&
            <Paper elevation={10}>{userInfo.name.first}</Paper>
      }
    </Container>
  )
}
