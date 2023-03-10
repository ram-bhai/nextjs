import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CheckedTableDash from '../components/CheckedTableDash';
import market from '../public/images/Products 2.png';
import { useState } from 'react';
import Art from '../components/Art';
import Music from '../components/Music';
import Collectibles from '../components/Collectibles';
import Sports from '../components/Sports';
import Creators from '../components/Creators';
import History from '../components/History';







const NFT_Marketplace = () => {
  const [selectedMenu, setSelectedMenu]= useState('art');
  const handleClick = envt =>{
    let category = envt.target.value;
    setSelectedMenu(category);
  }
 

  const conditionRender = selectedMenu => {
    if (selectedMenu === 'art') {
      return <Art />
    }
    if (selectedMenu === 'music') {
      return <Music />
    }
    if (selectedMenu === 'collectibles') {
      return <Collectibles />
    }
    if (selectedMenu === 'sports') {
      return <Sports />
    }
  }

  return (
    <>
      <Box sx={{padding: (theme) => theme.spacing(2) }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Box sx={{
              borderRadius: '12px',
              alignItems: 'center',
            }}>
              <Image alt="marketBG" sx={{m:0}} src={market} priority={true}  style={{ maxHeight: '35vh',maxWidth:'99%'}}></Image>
            </Box>
            <Box sx={{ flexGrow: 1, m: 1 }}>
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
                  <Box sx={{ flexGrow: 1,display: 'flex' }} />
                  
                    {selectedMenu==='art' ?<IconButton size='small' onClick={evnt => handleClick(evnt)}  value='art' style={{ color: "#6AD2FF", textDecoration:'underline' }}>
                      Art
                    </IconButton>:<IconButton size='small' onClick={evnt => handleClick(evnt)}  value='art' style={{ color: "#2b3674", }}>
                      Art
                    </IconButton>}

                    {selectedMenu==='music' ?<IconButton size='small' onClick={evnt => handleClick(evnt)} value='music'
                      style={{ color: "#6AD2FF", textDecoration:'underline', marginLeft: '2%' }}
                    >
                      Music
                    </IconButton>:<IconButton size='small' onClick={evnt => handleClick(evnt)} value='music'
                      style={{ color: "#2b3674", marginLeft: '2%' }}
                    >
                      Music
                    </IconButton>}

                    {selectedMenu==='collectibles' ?<IconButton size='small' onClick={evnt => handleClick(evnt)} value='collectibles'
                      style={{color: "#6AD2FF", textDecoration:'underline', marginLeft: '2%'}}
                    >
                      Collectibles
                    </IconButton>:<IconButton size='small' onClick={evnt => handleClick(evnt)} value='collectibles'
                     style={{ color: "#2b3674", marginLeft: '2%'}}
                    >
                      Collectibles
                    </IconButton>}

                    {selectedMenu==='sports' ?<IconButton size='small' onClick={evnt => handleClick(evnt)} value='sports'
                      style={{color: "#6AD2FF", textDecoration:'underline', marginLeft: '2%'}}
                    >
                      Sports
                    </IconButton>:<IconButton size='small' onClick={evnt => handleClick(evnt)} value='sports'
                      style={{ color: "#2b3674", marginLeft: '2%' }}
                    >
                      Sports
                    </IconButton>}
                  
                </Toolbar>
              </AppBar>
            </Box>
            <Box sx={{m:1,p:0}}>
            {conditionRender(selectedMenu)}
            </Box>
          </Grid>



          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Creators />
          <Box sx={{mt:2}}>
          <History />
          </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default NFT_Marketplace
