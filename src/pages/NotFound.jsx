import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import homero from '../assets/img/Homero.png'

const NotFound = () => {
  return (
    <>
        <Grid container>
          <Grid item xs={6} mt={20}>
          <Typography variant="h3" mt={5}>La página que intentas solicitar no está disponible (error 404)</Typography>
          <Typography variant="h5" mt={5}>Prueba mejor suerte en los siguientes links:</Typography>
          <ul>
            <li><NavLink to="./">Home</NavLink></li>
            <li><NavLink to="./Contact">Contact</NavLink></li>
          </ul> 
          </Grid>
          <Grid item xs={6} mt={20}>
              <img src={homero}></img>
          </Grid>
        </Grid>
    </>
  )
}

export default NotFound