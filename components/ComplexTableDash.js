import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { visuallyHidden } from '@mui/utils';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';


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

function createData(name, status, date, progress) {
  const condition = status =>{
  if(status === "Approved"){
    return <CheckCircleRoundedIcon style={{fill:'#05CD99',maxHeight: '15px'}}/>
  }
  if(status === "Disable"){
    return <CancelSharpIcon style={{fill:'#EE5D50', maxHeight:'15px'}}/>
  }
  if(status === "Error"){
    return <InfoSharpIcon style={{fill:'#FFCE20', maxHeight:'15px'}}/>
  }
}
  return {
    name,
    status,
    date,
    progress,
    condition
  };
}

const rows = [
  createData('Marketplace', 'Approved', '24.Jan.2021', 67),
  createData('Venus DB PRO', 'Disable', '14.Jun.2021', 51),
  createData('Venus DS', 'Error','04.Apr.2021', 24),
  createData('Venus 3D Asset','Approved', '24.Sep.2021', 24),
  createData('Uranus', 'Disable','28.Oct.2021', 49),
  createData('Honeycomb', 'Error', '12.Jan.2021', 87),
  createData('Ice cream sandwich', 'Approved','27.Jul.2021', 37),
  createData('Jelly Bean', 'Disable','29.Feb.2021', 94),
  createData('KitKat', 'Error', '07.Mar.2021', 65),
  createData('Lollipop','Approved', '10.Jan.2021', 98),
  createData('Marshmallow', 'Disable', '31.Aug.2021', 81),
  createData('Nougat','Error', '02.May.2021', 9),
  createData('Oreo', 'Approved', '19.Nov.2021', 63),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Status',
  },
  {
    id: 'date',
    numeric: true,
    label: 'Date',
  },
  {
    id: 'progress',
    numeric: false,
    label: 'Progress',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell  style={{ borderBottom: "none"}}>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ borderBottom: "none", color: "#A3AED0"}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={KeyboardArrowUpIcon}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      {
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          color="#2B3674"
          fontWeight="Bold"
        >
          Complex Table
        </Typography>
      }

      {<Tooltip title="More">
        <Box sx={{
          background: '#eaeef7',
          borderRadius: '15px',
          justifyContent: 'center'
        }}>
          <IconButton>
            <MoreHorizRoundedIcon style={{ fill: '#4318FF' }} />
          </IconButton>
        </Box>
      </Tooltip>
      }
    </Toolbar>
  );
}

export default function ComplexTableDash() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
 
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 

  return (
    
          <Card elevation={3} style={{ borderRadius: '10px'}}>
            <EnhancedTableToolbar />
            <TableContainer>
              <Table>
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.name} 
                        >
                        <TableCell  style={{borderBottom: "none" }} ></TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            align='left'
                            padding="none"
                            style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }} 
                          >
                            {row.name}
                          </TableCell>
                         <TableCell align="center" style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.condition}{row.status}</TableCell>
                          <TableCell align="center" style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.date}</TableCell>
                          <TableCell align="center" style={{ borderBottom: "none" }}><BorderLinearProgress  variant="determinate" value={row.progress}/></TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
    
  );
}

