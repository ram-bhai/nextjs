
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box sx={{ background: '#fff', padding: (theme) => (theme.spacing(2)) }}>
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Stack alignItems="center" justifyContent="center">
                        <Button variant="text">
                            <ArrowBackIosOutlinedIcon style={{ color:'#A3AED0', height:'2vh'}}/>
                            <Link href='/' style={{ textDecoration: 'none', color:'#A3AED0'}}>Back to dashboard</Link>
                        </Button>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" marginTop='30vh' marginRight='27%'>
                        <Typography variant="h5" fontWeight='bold' color='#2B3674'>
                            Sign In
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" >
                    <Typography variant="caption"  color='#A3AED0'>
                            Enter your email and password to sign in!
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" justifyContent="center" marginTop='10vh' className='p-2'>
                    <Button variant="outlined"  style={{background:'#eaeef7'}}>
                            {/* <Image src={googleImage}></Image> */}
                            <GoogleIcon style={{ color:'#A3AED0', height:'2vh'}}/>
                            <Typography variant="caption" color='#2B3674' >
                            Sign in with google
                        </Typography>
                        </Button>
                    </Stack>



                </Grid>

                <Grid item xs={false} sm={false} md={6} lg={6} xl={6} >

                    <Image src={bg}></Image>
                </Grid>


            </Grid>
        </Box>
    );
}

export default SignIn;