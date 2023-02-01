import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { visuallyHidden } from '@mui/utils';
import Card from '@mui/material/Card';

function checkData(name, average, progress, date) {
    return {
        name,
        average,
        progress,
        date
    };
}

const rowsdata = [
    checkData('Marketplace', 67, 305, '12.Jan.2021'),
    checkData('Venus DB PRO', 51, 452, '01.Jan.2021'),
    checkData('Venus DS', 24, 262, '12.Feb.2021'),
    checkData('Venus 3D Asset', 24, 159, '15.Jan.2021'),
    checkData('Uranus', 49, 356, '10.Mar.2021'),
    checkData('Honeycomb', 87, 408, '20.Jan.2021',),
    checkData('Ice cream sandwich', 37, 237, '30.Apr.2021'),
    checkData('Jelly Bean', 94, 375, '28.Jun.2021'),
    checkData('KitKat', 65, 518, '17.Aug.2021'),
    checkData('Lollipop', 98, 392, '10.Jan.2021'),
    checkData('Marshmallow', 81, 318, '05.May.2021'),
    checkData('Nougat', 9, 360, '19.Sep.2021'),
    checkData('Oreo', 63, 437, '18.Oct.2021'),
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

function EnhancedTableHeads(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" style={{ borderBottom: "none" }}>
                </TableCell>
                {headCellsdata.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        padding='2'
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ borderBottom: "none", color: "#A3AED0", p: 0 }}
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
                    sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
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
                            <MoreHorizRoundedIcon style={{ fill: '#4318FF' }} />
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

const Checkedtable = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

        <Card elevation={3} style={{ borderRadius: '2%' }}>
            <EnhancedTableToolbars numSelected={selected.length} />
            <TableContainer>
                <Table>
                    <EnhancedTableHeads
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                       
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
                                        height={61}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                    >
                                        <TableCell align="right" padding="checkbox" style={{ borderBottom: "none" }}>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            id={labelId}
                                            scope="row"
                                            align="left"
                                            style={{ color: "#2B3674",borderBottom: "none", fontSize:'12.2px', fontWeight: "Bold", }}
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center" style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.average}%</TableCell>
                                        <TableCell align="center" style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.progress}</TableCell>
                                        <TableCell align="center" style={{ color: "#2B3674", fontWeight: "Bold", borderBottom: "none" }}>{row.date}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default Checkedtable;
