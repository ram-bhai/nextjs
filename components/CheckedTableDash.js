import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { visuallyHidden } from '@mui/utils';

function checkData(name, calories, fat ) {
    return {
        name,
        calories,
        fat
    };
}

const rowsdata = [
    checkData('Cupcake', 30.5, 3.7 ),
    checkData('Donut', 45.2, 25.0),
    checkData('Eclair', 26.2, 16.0),
    checkData('Frozen yoghurt', 15.9, 6.0),
    checkData('Gingerbread', 35.6, 16.0),
    checkData('Honeycomb', 40.8, 3.2),
    checkData('Ice cream sandwich', 23.7, 9.0),
    
];

function descendingComparators(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparators(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparators(a, b, orderBy)
        : (a, b) => -descendingComparators(a, b, orderBy);
}

function stableSorts(array, comparator) {
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

const headCellsdata = [
    {
        id: 'name',
        numeric: false,
        label: 'Name',
    },
    {
        id: 'calories',
        numeric: true,
        label: 'Progress',
    },
    {
        id: 'fat',
        numeric: true,
        label: 'Quantity',
    }
];

function EnhancedTableHeads(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {headCellsdata.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
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

EnhancedTableHeads.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbars(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    color="#2B3674"
                    fontWeight="Bold"
                >
                    Check Table
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <Box sx={{
                        background: '#fff',
                        borderRadius: '20px',
                        justifyContent: 'center'
                    }}>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Tooltip>
            ) : (
                <Tooltip title="More">
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

            )}
        </Toolbar>
    );
}

EnhancedTableToolbars.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const CheckedTableDash = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <EnhancedTableToolbars numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 50 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHeads
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rowsdata.length}
                        />
                        <TableBody>
                            {stableSorts(rowsdata, getComparators(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                style ={{color: "#2B3674", fontWeight:"Bold"}}
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right" style ={{color: "#2B3674", fontWeight:"Bold"}}>{row.calories}%</TableCell>
                                            <TableCell align="right" style ={{color: "#2B3674", fontWeight:"Bold"}}>{row.fat}</TableCell>
                                        </TableRow>
                                    );
                                })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </Box>
    );
}

export default CheckedTableDash;
