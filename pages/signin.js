import {useSession, signIn} from 'next-auth/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Typography from '@mui/material/Typography';
import bg from '../public/images/signin-image.png';
import googleImage from '../public/icons/icons8-google.svg';
import GoogleIcon from '@mui/icons-material/Google';
import Image from 'next/image';
import Router from 'next/router';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}





const SignIn = () => {
    const {data: session} = useSession();
    console.log(session.user.email);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        localStorage.setItem('Email', data.get('email'));
        localStorage.setItem('Password', data.get('password'));
        if(localStorage.getItem('Email').length > 0){
            Router.push('/');
        }
        else return false;
    };

    return (
        <Box sx={{ background: '#fff', padding: (theme) => (theme.spacing(2)) }}>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Stack alignItems="center" justifyContent="center">
                        <Button variant="text">
                            <ArrowBackIosOutlinedIcon style={{ color: '#A3AED0', height: '2vh' }} />
                            <Link href='/' style={{ textDecoration: 'none', color: '#A3AED0' }}>Back to dashboard</Link>
                        </Button>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" marginTop='10vh' marginRight='27%'>
                        <Typography variant="h5" fontWeight='bold' color='#2B3674'>
                            Sign In
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" >
                        <Typography variant="caption" color='#A3AED0'>
                            Enter your email and password to sign in!
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" marginTop='5vh' >
                        <Button variant="outlined" onClick={()=> signIn()} style={{ background: '#eaeef7', border: 'none' }}>
                            <Image src={googleImage} height={15}></Image>
                            {/* <GoogleIcon style={{ color: '#A3AED0', height: '2vh' }} /> */}
                            <Typography variant="caption" color='#2B3674' style={{  marginLeft: '1rem' }} >
                                Sign in with google
                            </Typography>
                        </Button>
                    </Stack>

                    <div style={{ marginTop: '5vh', color: '#A3AED0' }}>
                        <Divider>or</Divider>
                    </div>


                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}
                    >
                        <Stack alignItems="center" justifyContent="center">
                        <TextField required id="email" label="Email" name="email" autoComplete="email" autoFocus
                        style={{maxWidth:'50%', background: '#eaeef7'}}
                        />
                        </Stack>

                        <Stack alignItems="center" justifyContent="center" style={{marginTop:'5%'}}>
                        <TextField
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{maxWidth:'50%', background: '#eaeef7', }}
                        />
                        </Stack>

                        <Grid container marginTop={1}>
                            <Grid item xs marginLeft={10}>
                                <FormControlLabel
                                    control={<Checkbox value="loggedIn" color="primary"/>}
                                    label="Keep me logged in"
                                />
                            </Grid>
                            <Grid item  marginRight={15} >
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>

                        <Box>
                        <Button
                            type="submit"  variant="contained" style={{ mt: 2, width:'50%' }} >
                            Sign In
                        </Button>
                        </Box>


                        <Grid>
                            <Link href="#" variant="body2">
                                {"Not registered yet? Create an Account"}
                            </Link>
                        </Grid>
                    </Box>
                </Grid>


                <Grid item xs={false} sm={false} md={6} lg={6} xl={6} >
                    <Image src={bg} height={600} width={550}></Image>
                </Grid>
            </Grid>
        </Box >
    );
}

export default SignIn;