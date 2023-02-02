
import Box from '@mui/material/Box';
import React, { useState } from 'react';
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <div {...other} />;
})(() => ({
  marginLeft: 'auto',
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
      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2)}}>
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
              <Image src={flag} alt="flag" height={30} width={30} />
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

              <Card elevation={0} sx={{ borderRadius: '15%' }}>
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
                    <Box>
                      <CalendarTodayIcon style={{ fill: '#A3AED0', maxHeight: '2vh' }} />
                      <Typography variant='caption' fontWeight='bold' color='#A3AED0' noWrap>This month</Typography>
                    </Box>
                  }
                />

              </Card>




              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                <Grid item lg={3} xs={3} sm={3} md={3} xl={3}>
                  <Box sx={{
                    textAlign: 'center'
                  }}>
                    <Typography variant='h4' fontWeight='bold' color='#2B3674' noWrap>$37.5K</Typography>
                    <Stack direction='row' justifyContent='left'>
                      <Item>
                        <Typography variant='caption' color='#A3AED0' noWrap>Total Spent</Typography>
                      </Item>
                      <Item>
                        <Typography variant='caption' color='#05CD99' noWrap>
                          <ArrowDropUpIcon /> <span style={{ marginLeft: '-7px', marginTop: '-5%' }}>+2.45%</span>
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
                  <Box>
                    <LineChart />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>


          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            <Box sx={{
              maxHeight: '50vh',
              minHeight: '50vh',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center'
            }}>

              <Card elevation={0} sx={{ borderRadius: '15%' }}>
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
              <Box style={{ marginTop: '-9%' }}>
                <BarChart />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
              <Box sx={{
                height: '100%',
              }}>
                <CheckedTableDash />
              </Box>
           
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '100%',
              background: '#fff',
            borderRadius:'10px'
            }}>
              <Card sx={{ minWidth: '100%', p: 0, borderRadius: '15%' }} elevation={0}>
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
              width: '100%',
              height: '100%',
              background: '#fff',
              borderRadius: '10px',
            }}>
              <Card sx={{ minWidth: '100%', borderRadius: '15%' }} elevation={0}>
                <CardHeader
                  action={

                    <FormControl sx={{ minWidth: 85 }} size="small">
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
                    <Typography variant='title' fontWeight='bold' color='#2B3674'>
                      Your pie chart
                    </Typography>
                  }
                />
              </Card>
              <CardContent sx={{ marginLeft: '5%' }}>
                {conditionRender(duration)}
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={6} xs={12} sm={12} md={6} xl={6}>
            
              <Box sx={{
                height: '100%',
                background: '#fff',
                borderRadius: '10px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <ComplexTableDash />
              
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box>
              <Box sx={{
                height: '100%',
                background: '#fff',
                borderRadius: '10px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <TaskTable />
              </Box>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>

            <Box className="calendarWrap" sx={{
              height: '100%',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <DateRangePickerComp />
            </Box>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '100%',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Card sx={{ borderRadius: '10px' }} elevation={0}>
                <CardHeader
                  avatar={
                    <Box sx={{
                      background: '#FEEFEE',
                      borderRadius: '25%',
                    }}>
                      <IconButton>
                        <WhatshotIcon style={{ fill: "#EE5D50" }} />
                      </IconButton>
                    </Box>
                  }
                  title={
                    <Typography variant='caption' color='#A3AED0'>
                      Business Design
                    </Typography>
                  }
                  subheader={
                    <Typography variant='body2' fontWeight='bold' color='#2B3674'>
                      New lession is available
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant='subtitle' color='#2B3674' fontWeight='bold'  noWrap>
                    What do you need to know to
                  </Typography>
                  <br />
                  <Typography variant='subtitle' color='#2B3674' fontWeight='bold'  noWrap>
                    create better products?
                  </Typography>
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
                </CardContent>
                <CardActions disableSpacing>
                  <AvatarGroup total={22}>
                    <Avatar src='https://randomuser.me/api/portraits/men/22.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/women/74.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/33.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' sx={{ width: '20px', height: '20px' }}></Avatar>
                  </AvatarGroup>
<ExpandMore>
                  <Button variant='contained' style={{ background: '#4318FF', borderRadius: '4px', color: 'white'}}>
                    Get started
                  </Button>
                  </ExpandMore>
                </CardActions>
              </Card>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '100%',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Card sx={{ borderRadius: '15%' }} elevation={0}>
                <CardHeader
                  action={
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
                  }
                  title={
                    <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Team members</Typography>
                  }

                />
                <CardContent>
                  <Card sx={{ borderRadius:'10px'}} elevation={3}>
                    <CardHeader
                      avatar={
                        <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'></Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon style={{ fill: '#A3AED0' }} />
                        </IconButton>
                      }
                      title={
                        <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Adela Parkson</Typography>
                      } 
                      subheader={
                        <Typography variant='subtitle' color="#A3AED0">Creative Director

                        </Typography>
                      }
                    />
                  </Card>
                  <Card sx={{ borderRadius:'10px', marginTop:'4%'}} elevation={3}>
                    <CardHeader
                      avatar={
                        <Avatar src='https://randomuser.me/api/portraits/men/14.jpg'></Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon style={{ fill: '#A3AED0' }} />
                        </IconButton>
                      }
                      title={
                        <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Christian Mad</Typography>
                      } 
                     
                      subheader={
                        <Typography variant='subtitle' color="#A3AED0">
                          Product Designer
                        </Typography>
                      }
                    />
                  </Card>
                </CardContent>
              </Card>
            </Box>
          </Grid>


          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '100%',
              background: '#fff',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Card sx={{ borderRadius: '15%' }} elevation={0}>
                <CardMedia sx={{m:1}}>
                  <Image src={fingerPrint} alt="finger"  />
                </CardMedia>
                <CardContent>
                  <Typography variant='h6' color='#2B3674' fontWeight='bold' marginLeft='5%' noWrap>
                    Control card security <br /> in-app with a tap
                  </Typography>
                  <Typography variant='caption' color='#A3AED0' marginLeft='5%' noWrap>
                    Discover our cards benifits, with one tap.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="large" style={{ marginLeft: '5%', background: '#4318FF', width: '90%' }}>Cards</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>



          <Grid item lg={3} xs={12} sm={6} md={3} xl={3}>
            <Box sx={{
              height: '100%',
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
