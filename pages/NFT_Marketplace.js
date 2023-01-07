import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckedTableDash from '../components/CheckedTableDash';




const NFT_Marketplace = () => {
  return (
    <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2), }}>
        <Grid container rowSpacing={{xs:0.25, sm:0.5, md:0.75, lg:1, xl:1.25}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box sx={{
              height: '200px',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center'
            }}>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box sx={{
              height: '50vh',
              background: '#fff',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <CheckedTableDash/>
              </Box>
            </Grid>
          </Grid>
          </Box>
          
    
  )
}

export default NFT_Marketplace
