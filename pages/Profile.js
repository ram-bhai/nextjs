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
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import profile from '../public/images/charlie-green-3JmfENcL24M-unsplash.png';
import bg from '../public/images/bg.png';
import projectPic1 from '../public/images/shubham-dhage-JlijbOtSWuw-unsplash 1.png';
import projectPic2 from '../public/images/tech-daily-HpekD5ujnbQ-unsplash 1.png';
import projectPic3 from '../public/images/nubelson-fernandes-Xx4i6wg6HEg-unsplash 1.png';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(() => ({
  marginLeft: 'auto',
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#4318FF' : '#308fe8',
  },
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  let handleToggle = () => {
    setSelectedImage ('');
    setImageUrl('');
  
  }

  const progress = 50;
  const total = 100;

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
            <Card elevation={0} style={{
              backgroundImage: `url(${bg.src})`,
              backgroundRepeat: 'no-repeat',
              textAlign: 'center'
            }}>
              <CardContent>
                <Image
                  src={profile}
                  height={100} width={100}
                  style={{
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: 3,
                    borderColor: '#fff',
                    marginTop: '10vh'
                  }} />

                <Typography variant="h5" fontWeight='bold' color="#2B3674">
                  Adela Parkson
                  <br />
                </Typography>
                <Typography variant='caption' fontSize={12} color="#A3AED0" >
                  Product Designer
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ display: 'flex', textAlign: 'center', margin: 1 }}>
                  <Box sx={{ textAlign: 'end', marginLeft: '50%' }}>
                    <Typography variant="h4" fontWeight='bold' color="#2B3674">
                      17
                      <br />
                    </Typography>
                    <Typography variant='subtitle' color="#A3AED0" >
                      Posts
                    </Typography>
                  </Box>


                  <Box sx={{ textAlign: 'center', marginLeft: '22%' }}>
                    <Typography variant="h4" fontWeight='bold' color="#2B3674">
                      9.7
                      <br />
                    </Typography>
                    <Typography variant='subtitle' color="#A3AED0" >
                      Following
                    </Typography>
                  </Box>


                  <Box sx={{ textAlign: 'start', marginLeft: '22%' }}>
                    <Typography variant="h4" fontWeight='bold' color="#2B3674">
                      274
                      <br />
                    </Typography>
                    <Typography variant='subtitle' color="#A3AED0" >
                      Followers
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
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
              <CardContent sx={{ marginLeft: '28%' }}>
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
                      style={{ marginTop: '120%', fill: '#4318FF' }}
                    />
                  </IconButton>
                </Box>
                <Typography sx={{ marginLeft: '-15%' }} variant="h5" fontWeight="bold" color="#2B3674">
                  Your storage
                  <br />
                </Typography>
                <Typography variant="caption" color="#A3AED0" sx={{ marginLeft: '-30%' }} >
                  Supervise your drive space in the easiest way
                </Typography>
              </CardContent>
              <Box style={{ margin: 20 }}>
                <Grid container>
                  <Grid items xs={8} color="#A3AED0">
                    {progress} Gb
                  </Grid>
                  <Grid items xs={4}>
                    <Box sx={{ textAlign: 'end', color: '#A3AED0' }}>
                      {total} Gb
                    </Box>
                  </Grid>
                </Grid>
                <BorderLinearProgress variant="determinate" value={total * (progress / total)} />
              </Box>
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
                    marginTop: '13vh',
                    margin: '4%',
                    padding: '4%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>

                    {!imageUrl && !selectedImage && (
                      <CardContent>
                        
                        <input
                          accept="image/*"
                          type="file"
                          id="select-image"
                          style={{ display: 'none' }}
                          onChange={e => setSelectedImage(e.target.files[0])}
                        />
                        <label htmlFor="select-image">
                        <FileUploadRoundedIcon style={{ fill: "#4318FF" }} />
                          <Button variant="text" style={{ color: "#4318FF", fontWeight: 'bold' }} component="span">
                            Upload Files
                            <br />
                          </Button>
                        </label>
                        <Typography variant='caption' fontSize={7} color="#A3AED0" >
                          PNG, JPG and GIF files are allowed
                        </Typography>
                      </CardContent>
                    )}


                    {imageUrl && selectedImage && (
                     <CardContent>
                      <Card>
                        <CardHeader 
                        action={
                          <Tooltip title="Close">
                            <Box sx={{background:"#eaeef7", borderRadius:'50%'}}>
                          <IconButton>
                        <CloseOutlinedIcon  style={{fill:"#4318FF", height:'15px', width:'15px'}} onClick={handleToggle} />
                      </IconButton>
                      </Box>
                      </Tooltip>
                        }
                        title={<Typography variant="caption"  color="#2B3674">
                         Preview
                      </Typography>}
                        />
                        <CardContent>
                        <Image  src={imageUrl} alt={selectedImage.name} height={100} width={100}/>
                        </CardContent>
                      </Card>
                     </CardContent>
                    )}

                  </Card>
                </Grid>


                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Card elevation={0}>
                    <CardHeader
                      title={
                        <Typography variant="subtitle2" fontWeight='bold' color="#2B3674">
                          Complete your profile
                        </Typography>
                      }
                    />
                    <CardContent>
                      <Typography variant="subtitle" color="#A3AED0">
                        Stay on the pulse of distributed projects with an anline whiteboard to plan,
                        coordinate and discuss
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ m: 2 }}>
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
