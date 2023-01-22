import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(() => ({
  marginLeft: 'auto',
}));


const Kanban = () => {
  return (
    <Box sx={{ padding: (theme) => theme.spacing(2) }}>
      <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ background: '#fff', borderRadius: '5%'}}>
            <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '100px',  background: 'white', }}>
              <Toolbar sx={{ background: 'white', borderRadius: '10px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Backlog</Typography>
                </Box>
                <Tooltip title="New">
                  <Box sx={{
                    background: '#eaeef7',
                    borderRadius: '25%',
                  }}>
                    <IconButton>
                      <AddIcon style={{ fill: "#4318FF" }} />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Toolbar>
            </AppBar>
            <Card  elevation={6} sx={{maxWidth:'auto',mt:2 }}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                    Option to "use local/server version" feature
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                  It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={2}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                  <Button variant="contained" style={{
                    background: '#3965FF',
                    borderRadius: '10px'
                  }}>updates</Button>
                </ExpandMore>
              </CardActions>
            </Card>


            <Card sx={{maxWidth:'auto',mt:2}} elevation={6}>
            <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   Add/modify your own CSS-Selectors
                  </Typography>
                }
              />
      <CardMedia
        component="img"
        height="194"
        image="/images/Cover 1.png"
        alt="Paella dish"
        sx={{padding:'2%',borderRadius:'30px'}}
      />
      <CardContent>
        <Typography variant="body2" color="#A3AED0">
        Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <AvatarGroup max={3}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
        <ExpandMore>
          <Button variant="contained" style={{
                    background: '#FFB547',
                    borderRadius: '10px'
                  }}>pending</Button>
        </ExpandMore>
      </CardActions> 
    </Card>

    <Card sx={{maxWidth:'auto',mt:2 }} elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   Shortcode for templates to display correctly
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={1}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                  <Button variant="contained" style={{
                    background: '#E31A1A',
                    borderRadius: '10px'
                  }}>error</Button>
                </ExpandMore>
              </CardActions>
            </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
          <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '100px',  background: 'white', }}>
              <Toolbar sx={{ background: 'white', borderRadius: '10px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>In Progress</Typography>
                </Box>
                <Tooltip title="New">
                  <Box sx={{
                    background: '#eaeef7',
                    borderRadius: '25%',
                  }}>
                    <IconButton>
                      <AddIcon style={{ fill: "#4318FF" }} />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Toolbar>
            </AppBar>

            
    <Card sx={{maxWidth:'auto',mt:2 }}elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                 General ideas to improve 'Edit' workflow
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={3}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                  <Button variant="contained" style={{
                    background: '#FFB547',
                    borderRadius: '10px'
                  }}>pending</Button>
                </ExpandMore>
              </CardActions>
            </Card>

            
    <Card sx={{maxWidth:'auto',mt:2 }} elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   Shortcode for templates to display correctly
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={1}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                  <Button variant="contained" style={{
                    background: '#3965FF',
                    borderRadius: '10px'
                  }}>updates</Button>
                </ExpandMore>
              </CardActions>
            </Card>

            <Card sx={{maxWidth:'auto',mt:2}} elevation={6}>
            <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   [UX Design] - Set the default Library tab
                  </Typography>
                }
              />
      <CardMedia
        component="img"
        height="194"
        image="/images/Drag & Drop 1.png"
        alt="Paella dish"
        sx={{padding:'2%',borderRadius:'30px'}}
      />
      <CardContent>
        <Typography variant="body2" color="#A3AED0">
        I want to be able to set the default Library tab (or a way to remember the last active tab).
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <AvatarGroup max={2}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
        <ExpandMore>
          <Button variant="contained" style={{
                    background: '#E31A1A',
                    borderRadius: '10px'
                  }}>error</Button>
        </ExpandMore>
      </CardActions> 
    </Card>
          </Box>
        </Grid>


        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{ background: '#fff', borderRadius: '5%' }}>
          <AppBar sx={{ position: 'relative', boxShadow: 'none', borderRadius: '100px',  background: 'white', }}>
              <Toolbar sx={{ background: 'white', borderRadius: '10px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant='h6' fontWeight='bold' color='#2B3674' noWrap>Done</Typography>
                </Box>
                <Tooltip title="New">
                  <Box sx={{
                    background: '#eaeef7',
                    borderRadius: '25%',
                  }}>
                    <IconButton>
                      <AddIcon style={{ fill: "#4318FF" }} />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Toolbar>
            </AppBar>

            <Card sx={{maxWidth:'auto',mt:2 }} elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                  Copy/Paste elements between pages
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                We can only copy/paste elements (or group of elements) in the same page, which is quite limited.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={1}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                <Button variant="contained" style={{
                    background: '#01B574',
                    borderRadius: '10px'
                  }}>done</Button>
                </ExpandMore>
              </CardActions>
            </Card>

            <Card sx={{maxWidth:'auto',mt:2 }} elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   Remove Extra DIV for each container added
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                I still hope there won't have an extra div for each container we added. It should be something for better styling...
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={3}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                <Button variant="contained" style={{
                    background: '#01B574',
                    borderRadius: '10px'
                  }}>done</Button>
                </ExpandMore>
              </CardActions>
            </Card>

            <Card sx={{maxWidth:'auto',mt:2 }} elevation={6}>
              <CardHeader
                action={
                  <IconButton aria-label="Edit">
                    <EditIcon style={{ fill: '#A3AED0' }} />
                  </IconButton>
                }
                title={
                  <Typography variant="body2" fontWeight='bold' color="#2B3674">
                   Add Figma files for the Library design blocks
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" color="#A3AED0">
                I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <AvatarGroup max={1}>
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
                </AvatarGroup>
                <ExpandMore>
                  <Button variant="contained" style={{
                    background: '#01B574',
                    borderRadius: '10px'
                  }}>done</Button>
                </ExpandMore>
              </CardActions>
            </Card>

          </Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Kanban
