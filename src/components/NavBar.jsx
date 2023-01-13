import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material"
import CakeIcon from '@mui/icons-material/Cake';
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <AppBar position="static">
    <Container maxWidth="md">
    <Toolbar>
    <CakeIcon />
    <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
    Happy Cake
    </Typography>
    <Button color="inherit" component={NavLink} to="/" sx={{ pt: 1 }}>Home</Button>
    <Button color="inherit" component={NavLink} to="/contact"sx={{ pt: 1 }}>Contact</Button>
    </Toolbar>
    </Container>
    </AppBar>
  )
}

export default NavBar