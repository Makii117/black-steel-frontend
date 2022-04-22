import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './login.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <Typography component="h1" variant="h4">
                Log in
                </Typography> 
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/*TODO : STYLE THE BUTTON*/}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            className="loginButton"
            sx={{ mt: 3, mb: 2, 
                "&.MuiButtonBase-root:hover": {
                    bgcolor: "#FB574C"
                  } }}>
            Log in
          </Button>
          <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            </Box>
            </Box>
            </Container>
        </ThemeProvider>
    )
}