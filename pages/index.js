
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import flag from "../public/images/flag.png";
import medium from '../public/images/Medium_Cashback.png'
import { styled } from '@mui/material/styles';
import LineChart from '../components/LineChart';
import CheckedTableDash from '../components/CheckedTableDash';
import ComplexTableDash from '../components/ComplexTableDash';
import fingerPrint from '../public/images/FingerPrint.png';
import BarChart from '../components/BarChart';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PieChart from '../components/PieChart';
import TaskTable from '../components/TaskTable';
import DateRangePicker from '../components/DateRangePicker';
import DateRangePickerComp from '../components/DateRangePicker';
import GradientChart from '../components/GradientChart';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import WeeklyPie from '../components/WeeklyPie';
import YearlyPie from '../components/YearlyPie';


const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Home() {
  const [duration, setDuration] = React.useState(30);

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  const conditionRender = duration => {
    if (duration === 7) {
      return <WeeklyPie />
    }
    if (duration === 30) {
      return <PieChart />
    }
    if (duration === 365) {
      return <YearlyPie />
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2), }}>
        <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ background: '#eaeef7', height: '40px', width: '40px', borderRadius: '50%', marginRight: '20px' }}>
                <IconButton>
                  <BarChartRoundedIcon style={{ fill: "#4318FF" }} />
                </IconButton>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                  Earnings
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    $350.4
                  </Typography>
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ background: '#eaeef7', height: '40px', width: '40px', borderRadius: '50%' }}>
                <IconButton>
                  <AttachMoneyIcon style={{ fill: "#4318FF" }} />
                </IconButton>
              </div>
              <div >
                <Typography variant="caption" style={{ color: '#A3AED0', marginLeft: '5px' }} noWrap>
                  Spend this month
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    $642.39
                  </Typography>
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'start',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ marginRight: '15px' }}>
                <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                  Sales
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    $574.34
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    <Typography variant="body2" style={{ color: '#05CD99' }}>
                      +23%
                    </Typography>
                    <Typography variant="body2" style={{ color: '#A3AED0' }}>
                      since last month
                    </Typography>
                  </div>
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ justifyContent: 'center' }}>
                <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                  Your balance
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    $1,000
                  </Typography>
                </Typography>
              </div>
              <Image src={flag} alt="flag" height={30} width={30} borderRadius='50%' />
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ background: '#20A4F6', height: '40px', width: '40px', borderRadius: '50%' }}>
                <IconButton>
                  <AddTaskIcon style={{ fill: "#4318FF" }} />
                </IconButton>
              </div>
              <div >
                <Typography variant="caption" style={{ color: '#A3AED0', marginLeft: '15px' }} noWrap>
                  New Tasks
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    154
                  </Typography>
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Box sx={{
              height: '80px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              <div style={{ background: '#eaeef7', height: '40px', width: '40px', borderRadius: '50%' }}>
                <IconButton>
                  <FileCopyIcon style={{ fill: "#4318FF" }} />
                </IconButton>
              </div>
              <div >
                <Typography variant="caption" style={{ color: '#A3AED0', marginLeft: '15px' }} noWrap>
                  Total Projects
                  <Typography style={{ color: '#1B2559', fontWeight: 'bold' }}>
                    2935
                  </Typography>
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 1 }} >
          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
            }}>

              <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
                <Toolbar sx={{ background: 'white' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <CalendarTodayIcon style={{ fill: '#A3AED0', maxHeight: '2vh' }} />
                    <Typography variant='caption' fontWeight='bold' color='#A3AED0' noWrap>This month</Typography>
                  </Box>
                  <Tooltip title="More">
                    <Box sx={{
                      background: '#eaeef7',
                      borderRadius: '25%',
                      justifyContent: 'center',
                    }}>
                      <IconButton>
                        <BarChartRoundedIcon style={{ fill: "#4318FF" }} />
                      </IconButton>
                    </Box>
                  </Tooltip>
                </Toolbar>
              </AppBar>


              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                <Grid item lg={3} xs={3} sm={3} md={3} xl={3}>
                  <Box sx={{
                    minHeight: '60vh',
                    width: 'auto',
                    textAlign: 'center'
                  }}>
                    <Typography variant='h4' fontWeight='bold' color='#2B3674' noWrap>$37.5K</Typography>
                    <Stack direction='row' justifyContent='left'>
                      <Item>
                        <Typography variant='caption' color='#A3AED0' noWrap>Total Spent</Typography>
                      </Item>
                      <Item>
                        <Typography variant='caption' color='#05CD99' noWrap>
                          <ArrowDropUpIcon /> +2.45%
                        </Typography>
                      </Item>
                    </Stack>
                    <Stack direction='row' justifyContent='center'>
                      <Typography variant='caption' color='#05CD99' fontWeight='bold' noWrap>
                        <CheckCircleRoundedIcon style={{ maxHeight: '2vh' }} />On track
                      </Typography>
                    </Stack>

                  </Box>

                </Grid>
                <Grid item lg={9} xs={9} sm={9} md={9} xl={9}>
                  <Box sx={{
                    height: 'auto',
                    width: 'auto',
                  }}>
                    <LineChart />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>


          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            <Box sx={{
              minHeight: '60vh',
              width: 'auto',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
            }}>

              <Card elevation={0}>
                <CardHeader
                  action={
                    <Tooltip title="More">
                      <Box sx={{
                        background: '#eaeef7',
                        borderRadius: '25%',
                      }}>
                        <IconButton>
                          <BarChartRoundedIcon style={{ fill: "#4318FF" }} />
                        </IconButton>
                      </Box>
                    </Tooltip>
                  }
                  title={
                    <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Weekly Revenue</Typography>
                  }
                />
              </Card>
              <Box >
                <BarChart />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            <Box>
              <Box sx={{
                height: '50vh',
                background: '#fff',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <CheckedTableDash />
              </Box>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              width: 'auto',
              height: 'auto',
              background: '#fff',
              borderRadius: '10px',
            }}>
              <Card sx={{ minWidth: '100%', p: 0 }} elevation={0}>
                <CardHeader
                  action={
                    <ArrowDropUpIcon style={{ fill: '#05CD99', maxHeight: '3%' }} />
                  }
                  title={
                    <Typography variant="caption" color="#A3AED0">
                      Daily Traffic
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h6" fontWeight='bold' color="#2B3674">
                      2.579 <span> <Typography variant="caption" color="#A3AED0">visitors</Typography></span>
                    </Typography>
                  }
                />
              </Card>
              <Box sx={{ mt: 4, minHeight: '30vh' }}>
                <GradientChart />
              </Box>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: 'auto',
              background: '#fff',
              borderRadius: '10px',
            }}>
              <Card sx={{ minWidth: '100%' }} elevation={0}>
                <CardHeader
                  action={
                   
                      <FormControl sx={{ m: 1, minWidth:85 }} size="small">
                        <InputLabel id="demo-select-small" shrink={false}></InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          fontWeight='bold'
                          value={duration}
                          onChange={handleChange}
                        >
                          <MenuItem value={7}>Weekly</MenuItem>
                          <MenuItem value={30}>Monthly</MenuItem>
                          <MenuItem value={365}>Yearly</MenuItem>
                        </Select>
                      </FormControl>
                 
                  }
                  title={
                    <Typography variant='h6' fontWeight='bold' color='#2B3674'>
                      Your pie chart
                    </Typography>
                  }
                />
              </Card>
              {conditionRender(duration)}
            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            <Box>
              <Box sx={{
                height: '50vh',
                background: '#fff',
                borderRadius: '10px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <ComplexTableDash />
              </Box>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
            }}>
              <TaskTable />
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <DateRangePickerComp style={{ width: 'auto' }} />

            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '10px' }}>
                <Toolbar sx={{ background: 'white', borderRadius: '10px' }}>
                  <Box sx={{
                    background: '#FEEFEE',
                    borderRadius: '25%',
                  }}>
                    <IconButton>
                      <WhatshotIcon style={{ fill: "#EE5D50" }} />
                    </IconButton>
                  </Box>

                  <Box >
                    <Typography variant='caption' color='#A3AED0' marginLeft='5%' noWrap>
                      Business Design
                    </Typography>
                    <br />
                    <Typography variant='title' fontWeight='bold' color='#2B3674' marginLeft='5%' noWrap>
                      New lession is available
                    </Typography>
                  </Box>
                </Toolbar>
              </AppBar>
              <Box sx={{ marginTop: '15%' }}>
                <Typography variant='subtitle' color='#2B3674' fontWeight='bold' marginLeft='7%' noWrap>
                  What do you need to know to
                </Typography>
                <br />
                <Typography variant='subtitle' color='#2B3674' fontWeight='bold' marginLeft='7%' noWrap>
                  create better products?
                </Typography>
              </Box>
              <Stack direction='row' display='flex' justifyContent='center' marginTop='10%'>
                <Item>
                  <TimerOutlinedIcon style={{ fill: '#01B574' }} />
                </Item>
                <Item>
                  <Typography variant='caption' color='#2B3674' fontWeight='bold' noWrap>
                    85mins
                  </Typography>
                </Item>
                <Item>
                  <SlowMotionVideoIcon style={{ fill: '#EE5D50' }} />
                </Item>
                <Item>
                  <Typography variant='caption' color='#2B3674' fontWeight='bold' noWrap>
                    Video format
                  </Typography>
                </Item>
              </Stack>
              <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '10px' }}>
                <Toolbar sx={{ background: 'white' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <AvatarGroup total={22}>
                      <Avatar src='https://randomuser.me/api/portraits/men/22.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                      <Avatar src='https://randomuser.me/api/portraits/women/74.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                      <Avatar src='https://randomuser.me/api/portraits/men/33.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                      <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                    </AvatarGroup>
                  </Box>
                  <Box>
                    <Button variant='text' style={{ background: '#4318FF', borderRadius: '5px', color: 'white' }}>
                      Get started
                    </Button>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>




          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
                <Toolbar sx={{ background: 'white' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Team members</Typography>
                  </Box>
                  <Tooltip title="More">
                    <Box sx={{
                      background: '#eaeef7',
                      borderRadius: '25%',
                    }}>
                      <IconButton>
                        <AddCircleRoundedIcon style={{ fill: "#4318FF" }} />
                      </IconButton>
                    </Box>
                  </Tooltip>
                </Toolbar>
              </AppBar>
              <Card sx={{ maxWidth: 'auto', maxHeight: '20%', color: '#2B3674', marginTop: '7%' }}>
                <CardHeader
                  avatar={
                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon style={{ fill: '#A3AED0' }} />
                    </IconButton>
                  }
                  title="Adela Parkson"
                  subheader="Creative director"
                />
              </Card>
              <Card sx={{ maxWidth: 'auto', maxHeight: '20%', color: '#2B3674', marginTop: '6%' }}>
                <CardHeader
                  avatar={
                    <Avatar src='https://randomuser.me/api/portraits/men/14.jpg'></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon style={{ fill: '#A3AED0' }} />
                    </IconButton>
                  }
                  title="Christian Mad"
                  subheader="Product Designer"
                />
              </Card>
              <Card sx={{ maxWidth: 'auto', maxHeight: '20%', color: '#2B3674', marginTop: '6%' }}>
                <CardHeader
                  avatar={
                    <Avatar src='https://randomuser.me/api/portraits/men/33.jpg'></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon style={{ fill: '#A3AED0' }} />
                    </IconButton>
                  }
                  title="Jason Statham"
                  subheader="junior graphic designer"
                />
              </Card>
            </Box>
          </Grid>




          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image src={fingerPrint} alt="finger" style={{ width: 'auto', height: '13vh', marginTop: '10%', marginLeft: '5%' }} />
              <Typography variant='h5' color='#2B3674' fontWeight='bold' marginLeft='5%' marginTop='7%' noWrap>
                Control card security <br /> in-app with a tap
              </Typography>
              <Typography variant='caption' color='#A3AED0' marginLeft='5%' marginTop='2%' noWrap>
                Discover our cards benifits, with one tap.
              </Typography>
              <Button variant="contained" size="large" style={{ marginLeft: '5%', marginTop: '8%', background: '#4318FF', width: '90%' }}>Cards</Button>
            </Box>
          </Grid>



          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image src={medium} alt='medium-cash' style={{ width: '100%', height: 'auto' }} ></Image>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}
