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

const Art = () => {

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
    <Box >
      <Grid container rowSpacing={0.5}>
        <Grid item xs>
          {arts.map((art) => (
              <Card sx={{  maxHeight: 270, borderRadius: 2 }} key={art.id}>
                <Image src={art.image} alt="finger" width={100} height={100} style={{marginLeft:'25%', marginTop:'4%'}} />
                <CardContent display="flex">
                  <Typography variant="subtitle2" fontWeight='bold' color="#2B3674">
                    {art.category}
                    <br />
                    <Typography variant="caption" color="#A3AED0">
                      Albert
                    </Typography>
                  </Typography>
                  <AvatarGroup total={22}>
                    <Avatar alt="Remy Sharp" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Travis Howard" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Agnes Walker" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                    <Avatar alt="Trevor Henderson" sx={{ width: '20px', height: '20px' }} src="https://randomuser.me/api/portraits/men/4.jpg" />
                  </AvatarGroup>

                </CardContent>
                <CardActions disableSpacing>
                  <Typography aria-label="bid" color='#4318FF'>
                    Caption Bid:{art.rate}ETH
                  </Typography>

                  <ExpandMore>
                    <Button variant="contained" style={{background: '#11047A', borderRadius:'70px'}}>Place bid</Button>
                  </ExpandMore>
                </CardActions>
              </Card>
              ))
          }
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1>Data</h1>
        </Grid>
        
      </Grid>

    </Box>
  )
}

export default Art;
