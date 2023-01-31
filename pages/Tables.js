import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
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
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import { visuallyHidden } from '@mui/utils';
import Checkedtable from '../components/Checkedtable';
import Columntable from '../components/Columntable';
import Complextable from '../components/Complextable';


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

function createData(name, company, date, status) {
  status= 100*(status/100);
  return {
    name,
    company,
    date,
    status,
  };
}

const rows = [
  createData('Marketplace', 305, 3.7, 67),
  createData('Venus DB PRO', 452, 25.0, 51),
  createData('Venus DS', 262, 16.0, 24),
  createData('Venus 3D Asset', 159, 6.0, 24),
  createData('Uranus', 356, 16.0, 49),
  createData('Honeycomb', 408, 3.2, 87),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Jelly Bean', 375, 0.0, 94),
  createData('KitKat', 518, 26.0, 65),
  createData('Lollipop', 392, 0.2, 98),
  createData('Marshmallow', 318, 0, 81),
  createData('Nougat', 360, 19.0, 9),
  createData('Oreo', 437, 18.0, 63),
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
    id: 'company',
    numeric: true,
    label: 'Company',
  },
  {
    id: 'date',
    numeric: true,
    label: 'Date',
  },
  {
    id: 'status',
    numeric: true,
    label: 'Status  ',
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
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{borderBottom: "none", color:"#A3AED0"}}
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
          id="tableTitle"
          component="div"
          color="#2B3674"
          fontWeight="Bold"
        >
          Development Table
        </Typography>
      }

      {<Tooltip title="More">
        <Box sx={{
          background: '#eaeef7',
          borderRadius: '15px',
          justifyContent: 'center'
        }}>
          <IconButton>
            <MoreHorizRoundedIcon style={{ fill: '#2B3674' }} />
          </IconButton>
        </Box>
      </Tooltip>
      }
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
 
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 

  return (
    <Box sx={{padding: (theme) => theme.spacing(1)}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid items lg={6} xs={12} sm={12} md={6} xl={6}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 550 }}
                aria-labelledby="tableTitle"
              >
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
                          
                          <TableCell
                           
                            style ={{color: "#2B3674", fontWeight:"Bold", borderBottom: "none"}} 
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="center" style = {{color: "#E0E5F2",borderBottom: "none" }}>{row.company}</TableCell>
                          <TableCell align="center" style ={{color: "#2B3674", fontWeight:"Bold", borderBottom: "none"}}>{row.date}</TableCell>
                          <TableCell align="center" style ={{color: "#2B3674", fontWeight:"Bold", borderBottom: "none"}}>{row.status}%
                          <BorderLinearProgress variant="determinate" value={row.status}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid items lg={6} xs={12} sm={12} md={6} xl={6}>
         <Checkedtable/>
        </Grid> 
        
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid items lg={6} xs={12} sm={12} md={6} xl={6}>
          <Columntable/>
        </Grid>

        <Grid items lg={6} xs={12} sm={12} md={6} xl={6}>
        <Complextable/>
        </Grid>
      </Grid>
    </Box>
  );
}