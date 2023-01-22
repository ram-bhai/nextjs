import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import profile from '../public/images/profile.png';
import projectPic1 from '../public/images/shubham-dhage-JlijbOtSWuw-unsplash 1.png';
import projectPic2 from '../public/images/tech-daily-HpekD5ujnbQ-unsplash 1.png';
import projectPic3 from '../public/images/nubelson-fernandes-Xx4i6wg6HEg-unsplash 1.png';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(() => ({
  marginLeft: 'auto',
}));

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 1,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#4318FF',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 17,
    height: 17,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E0E5F2' : '#eaeef7',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


const Profile = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/products/1").then((response) => {
      return response.json();
    }).then((data) => {
      setUser(data);
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [state, setState] = useState({
    "Item update notifications": false,
    "Item comment notifications": false,
    "Buyer review notifications": false,
    "Rating reminders notifications": false,
    "Meetups near you notifications": false,
    "Company news notifications": false,
    "New launches and projects": false,
    "Monthly product changes": false,
    "Subscribe to newsletter": false,
    "Email me when someone follows me": false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                width="100%"
                image="/images/Background Image.png"
                alt="Paella dish"
                sx={{ padding: '2%', borderRadius: '30px' }}
              />
              <Image src={profile} height={100} width={100} style={{ borderRadius: "50%" }} />

            </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>

          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card >
              <CardHeader
                action={
                  <Tooltip title="More">
                    <Box sx={{
                      background: '#eaeef7',
                      borderRadius: '25%',
                    }}>
                      <IconButton>
                        <MoreHorizIcon style={{ fill: "#4318FF" }} />
                      </IconButton>
                    </Box>
                  </Tooltip>
                }
              />
              <CardContent sx={{ marginLeft: '25%' }}>
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '100px',
                    width: '100px',
                    background: '#eaeef7',
                    borderRadius: '50%',
                  }}
                >
                  <IconButton>
                    <CloudDoneOutlinedIcon
                      style={{ marginTop: '5vh', fill: '#4318FF' }}
                    />
                  </IconButton>
                </Box>
                <Typography variant="h6" fontWeight="bold" color="#2B3674">
                  Your storage
                  <br />
                </Typography>
                <Typography variant="body2" fontSize={10} color="#A3AED0" sx={{textAlign:'center',marginRight:'5vw'}}>
                  Supervise your drive space in the easiest way
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                sx={{ mt: 2 }}
              >
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Card style={{
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: '#A3AED0',
                    borderRadius: 5,
                    marginTop: '7vh',
                    margin: '2%',
                    padding: '4%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <CardContent>
                      <FileUploadRoundedIcon style={{ fill: "#4318FF" }} />
                      <Typography variant="h6" fontWeight='bold' color="#4318FF">
                        Upload Files
                        <br />
                      </Typography>
                      <Typography variant='caption' fontSize={7} color="#A3AED0" >PNG, JPG and GIF files are allowed</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Card elevation={0}>
                    <CardHeader
                      title={
                        <Typography variant="body2" fontWeight='bold' color="#2B3674">
                          Complete your profile
                        </Typography>
                      }
                    />
                    <CardContent>
                      <Typography variant="body2" color="#A3AED0">
                        Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss
                      </Typography>
                    </CardContent>
                    <CardActions >
                      <Button variant="contained" style={{
                        background: '#3965FF',
                        borderRadius: '10px'
                      }}>publish</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h5" fontWeight='bold' color="#2B3674">
                    All Projects
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                  Here you can find more details about your projects.
                  Keep you user engaged by providing meaningful information.
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card elevation={6}>
                      <CardHeader
                        avatar={
                          <Image src={projectPic1} alt="project pic" height={54} width={54} style={{ borderRadius: '20%' }} />
                        }
                        action={
                          <IconButton aria-label="settings">
                            <EditIcon style={{ fill: "#8F9BBA" }} />
                          </IconButton>
                        }
                        title={
                          <Typography variant="caption" fontWeight='bold' color="#2B3674">
                            Technology behind the Blockchain
                          </Typography>

                        }

                        subheader={

                          <Typography variant="caption" color="#A3AED0">
                            <br />
                            Project #1. <Link href='/' style={{ color: '#4318FF' }}>See project details</Link>
                          </Typography>
                        }
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card elevation={6}>
                      <CardHeader
                        avatar={
                          <Image src={projectPic2} alt="project pic" height={54} width={54} style={{ borderRadius: '20%' }} />
                        }
                        action={
                          <IconButton aria-label="settings">
                            <EditIcon style={{ fill: "#8F9BBA" }} />
                          </IconButton>
                        }
                        title={
                          <Typography variant="caption" fontWeight='bold' color="#2B3674">
                            Greatest way to a good Economy
                          </Typography>

                        }

                        subheader={

                          <Typography variant="caption" color="#A3AED0">
                            <br />
                            Project #2. <Link href='/' style={{ color: '#4318FF' }}>See project details</Link>
                          </Typography>
                        }
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Card elevation={6}>
                      <CardHeader
                        avatar={
                          <Image src={projectPic3} alt="project pic" height={54} width={54} style={{ borderRadius: '20%' }} />
                        }
                        action={
                          <IconButton aria-label="settings">
                            <EditIcon style={{ fill: "#8F9BBA" }} />
                          </IconButton>
                        }
                        title={
                          <Typography variant="caption" fontWeight='bold' color="#2B3674">
                            Most essential tips for Burnout
                          </Typography>

                        }

                        subheader={

                          <Typography variant="caption" color="#A3AED0">
                            <br />
                            Project #3. <Link href='/' style={{ color: '#4318FF' }}>See project details</Link>
                          </Typography>
                        }
                      />
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h5" fontWeight='bold' color="#2B3674">
                    General Information
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                  As we live, our hearts turn colder.
                  Cause pain is what we go through as we become older.
                  We get insulted by others, lose trust for those others.
                  We get back stabbed by friends. It becomes harder for us to give others a hand.
                  We get our heart broken by people we love, even that we give them all...
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 1 }}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6} >
                      <Typography sx={{ m: 1 }} color="#A3AED0" gutterBottom>
                        Education
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        Stanford University
                      </Typography>
                    </Card>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6}>
                      <Typography sx={{ m: 1 }} color="#A3AED0" >
                        Languages
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        English, Spanish, Italian
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 2 }}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6}>
                      <Typography sx={{ m: 1 }} color="#A3AED0" >
                        Department
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        Product Design
                      </Typography>
                    </Card>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6}>
                      <Typography sx={{ m: 1 }} color="#A3AED0" >
                        Work History
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        Google, Facebook
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 2 }}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6}>
                      <Typography sx={{ m: 1 }} color="#A3AED0" >
                        Organization
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        Simmmple Web LLC
                      </Typography>
                    </Card>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card elevation={6}>
                      <Typography sx={{ m: 1 }} color="#A3AED0" >
                        Birthday
                      </Typography>
                      <Typography variant="subtitle" sx={{ m: 1 }} color="#2B3674">
                        20 July 1986
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '100px', background: 'white', }}>
                <Toolbar sx={{ background: 'white', borderRadius: '10px' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Notifications</Typography>
                  </Box>
                  <Tooltip title="More">
                    <Box sx={{
                      background: '#eaeef7',
                      borderRadius: '25%',
                    }}>
                      <IconButton>
                        <MoreHorizIcon style={{ fill: "#4318FF" }} />
                      </IconButton>
                    </Box>
                  </Tooltip>
                </Toolbar>
              </AppBar>

              <Box sx={{ mt: 1, marginLeft: 1 }}>
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    {
                      Object.keys(state).map((key, index) => {
                        return (
                          < FormControlLabel sx={{ color: '#2B3674' }}
                            control={

                              <IOSSwitch sx={{ m: 1 }} checked={state[index]?.[key]} onChange={handleChange} name={key} />

                            }
                            label={key}
                          />
                        )
                      })
                    }
                  </FormGroup>
                </FormControl>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile
