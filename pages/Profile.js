import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
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
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import profile from '../public/images/profile.png';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(() => ({
  marginLeft: 'auto',
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
              <h1>Hello vinod</h1>
            </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <h1>Hello vinod</h1>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <h1>Hello vinod</h1>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
            <Card>
              <h1>Hello vinod</h1>
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

              <Box sx={{mt:1,marginLeft:1}}>
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    {
                      Object.keys(state).map((key, index) => {
                        return (
                          < FormControlLabel
                          control={
                            <Switch checked={state[index]?.[key]} onChange={handleChange} name={key} />
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
