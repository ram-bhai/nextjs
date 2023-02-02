import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image from "next/image";
import fingerPrint from '../public/images/FingerPrint.png';
import { useState, useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <AvatarGroup {...other} />;
})(() => ({
  marginLeft: 'auto',
}));

const Sports = () => {

  const [arts, setArts] = useState([]);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      return response.json();
    }).then((data) => {
      setArts(data);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        {arts.slice(17, 20).map((art) => (
          <Card key={art.id} elevation={0} sx={{ m: 0.5 }} style={{ width: '100%', borderRadius: '5%' }}>
            <CardMedia sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
              <Image src={art.image} alt="finger" width={160} height={160}/>
            </CardMedia>
            <CardContent display="flex">
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="caption" fontWeight='bold' color="#2B3674">
                    {art.category}
                    <br />
                    <Typography variant="caption" color="#A3AED0">
                      Albert
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <AvatarGroup total={22}>
                    <Avatar alt="Remy Sharp" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Travis Howard" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Agnes Walker" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Trevor Henderson" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                  </AvatarGroup>
                </Grid>
              </Grid>

            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color='#4318FF'>
                Caption Bid:{art.rating.rate}ETH
              </Typography>

              <ExpandMore>
                <Button variant="contained" style={{ background: '#11047A', borderRadius: '70px' }}>Place</Button>
              </ExpandMore>
            </CardActions>
          </Card>
        ))
        }
      </Box>

      <Typography variant="h6" noWrap edge="start" sx={{ mt: 2, color: "#2b3674", fontWeight: "Bold" }}>
        Recently added
      </Typography>
      <Box sx={{mt:1, display: 'flex' }}>
        {arts.slice(14, 17).map((art) => (
          <Card key={art.id} elevation={0} sx={{ m: 0.5 }} style={{ width: '100%', borderRadius: '5%' }}>
            <CardMedia sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
              <Image src={art.image} alt="finger" width={160} height={160} priority={true}/>
            </CardMedia>
            <CardContent display="flex">
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="caption" fontWeight='bold' color="#2B3674">
                    {art.category}
                    <br />
                    <Typography variant="caption" color="#A3AED0">
                      Albert
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <AvatarGroup total={22}>
                    <Avatar alt="Remy Sharp" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Travis Howard" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Agnes Walker" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Trevor Henderson" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                  </AvatarGroup>
                </Grid>
              </Grid>

            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color='#4318FF'>
                Caption Bid:{art.rating.rate}ETH
              </Typography>

              <ExpandMore>
                <Button variant="contained" style={{ background: '#11047A', borderRadius: '70px' }}>Place</Button>
              </ExpandMore>
            </CardActions>
          </Card>
        ))
        }
      </Box>




    </Box>
  )
}

export default Sports;
