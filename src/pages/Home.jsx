import Homes from './Homes.css'
import NavBar from '../components/NavBar'
import pastel from '../assets/img/pastel3.webp'

import Typography from '@mui/material/Typography';
import {Grid } from '@mui/material';

import React from 'react';

const Home = () => {
  return (
    <>
    <NavBar/>
    <Grid container>
    <Grid item xs={12}><Typography variant="h4" align="center" mt={5}>Bienvenidos a:</Typography></Grid>
    <Grid item xs={12}><Typography variant="h1" align="center">Happy Cake</Typography></Grid>
    <Grid item xs={12}><Typography variant="h6" align="center" mt={2}>el lugar de los pasteles felices</Typography></Grid>
    <Grid item xs={12} justifyContent="center" align="center"><img src={pastel} className="imagen"/></Grid>
    </Grid>
    </>  
  )
}
export default Home