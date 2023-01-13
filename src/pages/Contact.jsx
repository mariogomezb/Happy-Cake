import React from 'react'
import { Button, Grid, Typography } from '@mui/material';

import TextField from '@mui/material/TextField';
import NavBar from '../components/NavBar';


const Contact = () => {
  return (
    <>
    <NavBar/>
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center" mt={3}>Cuéntanos, ¿ en qué te podemos ayudar?</Typography>
      </Grid>
      <Grid item xs={7} mt={5}>
        <TextField fullWidth id="email" label="nombre@correo.com" variant="outlined" />
      </Grid>
      <Grid item xs={7} mt={3}>
        <TextField fullWidth id="descripcion" label="Descripción" multiline maxRows={4}/>
      </Grid>
      <Grid item xs={7} mt={3} align="center">
        <Button variant="contained" size="large">Enviar</Button>
      </Grid>
      </Grid>
    </>
  )
}

export default Contact