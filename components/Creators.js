import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Tooltip from "@mui/material/Tooltip";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';;
import React from 'react';


function createData(avatar,name, calories) {
    const progress = 10000 * (calories / 10000) / 100;
    return { avatar,name, calories, progress };
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#4318FF' : '#308fe8',
    },
}));

const rows = [
    createData('https://randomuser.me/api/portraits/women/12.jpg','@maddison_c21',9821),
    createData('https://randomuser.me/api/portraits/men/91.jpg','@karl.will02', 7032),
    createData('https://randomuser.me/api/portraits/women/17.jpg','@andreea.1z', 5204),
    createData('https://randomuser.me/api/portraits/men/22.jpg','@abraham47.y', 4309),
    createData('https://randomuser.me/api/portraits/men/28.jpg','@leon_pwrr', 3871),
];

const Creators = () => {
    return (
            <Card elevation={0} sx={{ borderRadius: '3%' }}>
                <CardHeader
                    action={
                        <Tooltip title="Go to list">
                            <Box sx={{
                                width: '70px',
                                background: '#eaeef7',
                                borderRadius: '70px',
                                textAlign: 'center'
                            }}>
                                <Typography style={{ color: "#4318FF" }} >See all</Typography>
                            </Box>
                        </Tooltip>
                    }
                    title={
                        <Typography variant="h6" color="#1B2559" fontWeight='bold' noWrap>
                            Top Creators
                        </Typography>
                    } />
                <CardContent>
                    <TableContainer  style={{borderRadius:'20px'}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                   <TableCell style={{borderBottom: "none"}}></TableCell>
                                    <TableCell style={{color:'#AEA3D0', fontWeight:'bold', borderBottom: "none"}}>Name</TableCell>
                                    <TableCell  style={{color:'#AEA3D0', fontWeight:'bold', borderBottom: "none"}}>Artworks</TableCell>
                                    <TableCell  style={{color:'#AEA3D0', fontWeight:'bold', borderBottom: "none"}}>Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="right" sx={{p:0,m:0,borderBottom: "none"}}>
                                            <Avatar
                                            src={row.avatar} alt="Avatar" sx={{width:30, height:30}} style={{ borderRadius: '20%' }}/>
                                            </TableCell>
                                        <TableCell align="left" style={{borderBottom: "none",color:'#2B3674', fontWeight:'bold'}}>{row.name}</TableCell>
                                        <TableCell align="center" style={{ borderBottom: "none",color:'#AEA3D0', fontWeight:'bold'}}>{row.calories}</TableCell>
                                        <TableCell align="center"style={{borderBottom: "none"}}>
                                            <BorderLinearProgress variant="determinate" value={row.progress}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        
    )
}



export default Creators;
