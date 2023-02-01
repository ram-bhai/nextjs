import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
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


function createData(name, average, progress, date) {
  return {
    name,
    average,
    progress,
    date
  };
}

const rows = [
  createData('Marketplace', 30.5, 3.7, '01.Jan.2021'),
  createData('Venus DB PRO', 45.2, 25.0, '02.Feb.@021'),
  createData('Venus DS', 26.2, 16.0, '03.Mar.2021'),
  createData('Venus 3D Asset', 15.9, 6.0, '04.Jan.2021'),
  createData('Uranus', 35.6, 16.0, '10.Apr.2021'),
  createData('Honeycomb', 40.8, 3.2, '13.Sep.2021'),
  createData('Ice cream sandwich', 23.7, 9.0,'13.Sep.2021'),
  createData('Jelly Bean', 37.5, 0.0, '13.Sep.2021'),
  createData('KitKat', 51.8, 26.0, '13.Sep.2021'),
  createData('Lollipop', 39.2, 0.2, '13.Sep.2021'),
  createData('Marshmallow', 31.8, 0, '13.Sep.2021'),
  createData('Nougat', 36.0, 19.0,'13.Sep.2021'),
  createData('Oreo', 43.7, 18.0, '13.Sep.2021'),
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
    id: 'average',
    numeric: true,
    label: 'Average',
  },
  {
    id: 'progress',
    numeric: true,
    label: 'Progress',
  },
  {
    id: 'date',
    numeric: true,
    label: 'Date',
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
      <TableCell  style={{borderBottom: "none" }} ></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
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
          id="tableTitle"
          component="div"
          color="#2B3674"
          fontWeight="Bold"
        >
          4-column Table
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

export default function Columntable() {
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
    <Box sx={{ width: '100%' }}>
          <Card elevation={3} style={{borderRadius:'15px'}}>
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
                          <TableCell align="center"  style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.average}%</TableCell>
                          <TableCell align="center"  style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.progress}</TableCell>
                          <TableCell align="center"  style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.date}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
    </Box>
  );
}