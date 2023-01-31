import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
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
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';



function createData(avatar, title, subtitle,time) {

    return { avatar, title, subtitle,time };
}

const rows = [
    createData('/images/Rectangle 346.png', 'Colorful Heaven', 'By Mark Benjamin', 30),
    createData('/images/Rectangle 46.png', 'Abstract Colors','By Esthera Jackson', 58),
    createData('/images/fakurian-design-58Z17lnVS4U-unsplash (1) 1.png', 'ETH AI Brain','By Nick Wilson', 60),
    createData('/images/Rectangle 346 (1).png', 'Swipe Circles','By Peter Will', 120),
    createData('/images/Rectangle 346 (2).png', 'Mesh Gradients','By Will Smith', 150),
];

const History = () => {
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
                        History
                    </Typography>
                } />
            <CardContent>
                {rows.map((row) => (
                    <Card elevation={0} sx={{borderRadius: '3%' }}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    src={row.avatar} alt="Avatar" sx={{ width: 50, height: 50 }} style={{ borderRadius: '20%' }} />

                            }
                            title={
                                <Typography variant="h6" color="#1B2559" fontWeight='bold' noWrap>
                                    {row.title}
                                </Typography>
                            }
                            subheader={
                                <Typography variant="caption" color="#A3AED0" noWrap>{row.subtitle}</Typography>
                            }
                            action={
                                `${row.time}`< 60 ?<Typography variant="caption" color="#A3AED0"  noWrap>
                                {row.time}s ago
                            </Typography>:<Typography variant="caption" color="#A3AED0"  noWrap>
                                {`${row.time}`/60}m ago
                            </Typography>
                            }
                        />
                    </Card>
                ))
                }

            </CardContent >
        </Card >

    )
}

export default History
