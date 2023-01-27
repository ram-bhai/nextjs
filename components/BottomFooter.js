import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const BottomFooter = () => {
    return (
        <Box sx={{ display: 'flex', padding: (theme) => theme.spacing(2) }}>
            <Grid container  >
                <Grid item lg={8} xs={8} sm={8} md={8} xl={8}>
                    <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
                    </Typography>
                </Grid>

                <Grid item lg={1} xs={false} sm={false} md={1} xl={1}>
                    <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                        MarketPlace
                    </Typography>
                </Grid>

                <Grid item lg={1} xs={0} sm={0} md={1} xl={1}>
                    <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                        License
                    </Typography>
                </Grid>

                <Grid item lg={1} xs={false} sm={false} md={1} xl={1}>
                    <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                        Terms of Use
                    </Typography>
                </Grid>

                <Grid item lg={1} xs={false} sm={false} md={1} xl={1}>
                    <Typography variant="caption" style={{ color: '#A3AED0' }} noWrap>
                        Blog
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}

export default BottomFooter;