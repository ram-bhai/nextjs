import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CheckedTableDash from '../components/CheckedTableDash';
import market from '../public/images/Products 2.png';




const NFT_Marketplace = () => {
  return (
    <>
      <Box sx={{ padding: (theme) => theme.spacing(2), }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 1 }} >
          <Grid item xs={12} sm={12} md={8} lg={7} xl={7}>
            <Box sx={{
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Image src={market} style={{ maxHeight: '30vh' }}></Image>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
                <Toolbar sx={{ background: '#eaeef7' }}>
                  <Typography
                    variant="h6"
                    noWrap
                    edge="start"
                    sx={{ color: "#2b3674", fontWeight: "Bold" }}
                  >
                    Trending NFTs
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: 'flex' }}>
                    <IconButton size='small' style={{ color: "#2b3674", }}>
                      Art
                    </IconButton>
                    <IconButton size='small'
                      style={{ color: "#2b3674", marginLeft: '2%' }}
                    >
                      Music
                    </IconButton>
                    <IconButton size='small'
                      style={{ color: "#2b3674", marginLeft: '2%' }}
                    >
                      Collectibles
                    </IconButton>
                    <IconButton size='small'
                      style={{ color: "#2b3674", marginLeft: '2%' }}
                    >
                      Sports
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={5} xl={5}>
            <CheckedTableDash />
          <Box sx={{mt:2}}>
          <CheckedTableDash />
          </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default NFT_Marketplace
