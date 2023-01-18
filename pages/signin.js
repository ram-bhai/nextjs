import { useSession, signIn } from 'next-auth/react';
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
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Formik, Form } from 'formik';
import * as EmailValidator from "email-validator";


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
    const { data: session } = useSession();
    console.log();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('email'));
        console.log(data.get('password'));
        localStorage.setItem('Email', data.get('email'));
        localStorage.setItem('Password', data.get('password'));
        if (localStorage.getItem('Email').length > 0) {
            Router.push('/');
        }
        else return false;
    };

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }



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
                        <Button variant="outlined" onClick={() => signIn()} style={{ background: '#eaeef7', border: 'none' }}>
                            <Image src={googleImage} height={15}></Image>
                            {/* <GoogleIcon style={{ color: '#A3AED0', height: '2vh' }} /> */}
                            <Typography variant="caption" color='#2B3674' style={{ marginLeft: '1rem' }} >
                                Sign in with google
                            </Typography>
                        </Button>
                    </Stack>

                    <div style={{ marginTop: '5vh', color: '#A3AED0' }}>
                        <Divider variant='middle'>or</Divider>
                    </div>


                    <Box sx={{ mt: 4 }}>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                        
                            validate={values => {
                                let errors = {};
                                if (!values.email) {
                                    errors.email = "Required";
                                } else if (!EmailValidator.validate(values.email)) {
                                    errors.email = "Invalid email address.";
                                }

                                const passwordRegex = /(?=.*[0-9])/;
                                if (!values.password) {
                                    errors.password = "Required";
                                } else if (values.password.length < 8) {
                                    errors.password = "Password must be 8 characters long.";
                                } else if (!passwordRegex.test(values.password)) {
                                    errors.password = "Invalid password. Must contain one number.";
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
                                    localStorage.setItem('Email', values.email);
                                    localStorage.setItem('Password', values.password);
                                    
                                }, 500);
                            }}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <Stack style={{ marginLeft: '31%' }}>
                                            <label>Email<a style={{ color: '#4318FF' }}>*</a></label>
                                            <TextField
                                                required
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete='new-email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.email && touched.email && "error"}
                                                style={{ maxWidth: '50%', background: '#eaeef7' }}
                                            />
                                            {errors.email && touched.email && (
                                                <div style={{color:'red'}}>{errors.email}</div>
                                            )}
                                        </Stack>

                                        <Stack style={{ marginTop: '5%', marginLeft: '31%' }}>
                                            <label>Password<a style={{ color: '#4318FF', textDecoration: 'none' }}>*</a></label>
                                            <TextField
                                                required
                                                name="password"
                                                id="password"
                                                autoComplete='new-password'
                                                style={{ maxWidth: '50%', background: '#eaeef7', borderRadius: '10%' }}
                                                type={passwordType}
                                                onChange={handlePasswordChange}
                                                value={passwordInput}
                                                class="form-control"
                                                placeholder="Min. 8 characters"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.password && touched.password && "error"}


                                                InputProps={{
                                                    endAdornment: passwordType ? (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={togglePassword}
                                                                edge="end"
                                                            >
                                                                {passwordType === 'password' ? <VisibilityIcon style={{ fill: '#A3AED0', maxHeight: '2vh' }} /> : <VisibilityOffIcon style={{ fill: '#A3AED0', maxHeight: '2vh' }} />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ) : null
                                                }}
                                            />
                                            {errors.password && touched.password && (
                                                <div style={{color:'red'}}>{errors.password}</div>
                                            )}
                                        </Stack>

                                        <Grid container justifyContent='center'>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Checkbox value="loggedIn" />}
                                                    label="Keep me logged in"
                                                />
                                            </Grid>
                                            <Grid item marginTop={1}>
                                                <Link href="#" variant="body2" style={{ color: '#4318FF', textDecoration: 'none' }}>
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                        </Grid>

                                        <Box style={{ marginLeft: '31%' }}>
                                            <Button
                                                type="submit" variant="contained" style={{ mt: 2, width: '54%', background: '#4318FF' }} disabled={isSubmitting} >
                                                Sign In
                                            </Button>
                                        </Box>


                                        <Grid style={{ justifyContent: 'center' }}>
                                            <div style={{ display: 'flex', marginLeft: '27%' }}>
                                                Not registerd yet?
                                                <span>
                                                    <a style={{ color: '#4318FF' }}>Create an account</a>
                                                </span>
                                            </div>
                                        </Grid>
                                    </form>
                                )
                            }}
                        </Formik>
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