import Box from "@mui/system";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid xs={6}>
          <Typography color="#A3AED0">
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
          </Typography>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Footer;
