import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
    var a = {
        approve: 1,
        attending: [],
        availableSeats: 23,
        cost: 5,
        creatorName: "ozil",
        date: "2019-02-02T01:01",
        des: "Birthday ",
        eventLocation: [],
        eventName: "Birthday",
        url: "https://images.yourstory.com/2015/07/yourstory-party-hunterz-store.jpg"
    }

    const { classes } = props;

    return (

        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <CustomTableCell style={{ fontSize: '15px' }}>Event Name</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' }} numeric>Event Cost</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' }} numeric>Number of seats</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' }} >Event Date</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' }} numeric>Manager Approval</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell >{a.creatorName}</CustomTableCell>
                                <CustomTableCell numeric>{row.fat}</CustomTableCell>
                                <CustomTableCell numeric>{row.carbs}</CustomTableCell>
                                <CustomTableCell numeric>{row.protein}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);