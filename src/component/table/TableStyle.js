import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VideocamIcon from '@material-ui/icons/Videocam';
import GetAppIcon from '@material-ui/icons/GetApp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Checkbox, Typography } from '@material-ui/core';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function TableStyle() {
    const classes = useStyles();
    const [rows, setrows] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:3001/data').then((res) => {
            setrows(res.data)
        })
    }, []);
    return (
        <div style={{ height: 400, width: '96%', marginLeft: 40 }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> Campaigns Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Method</TableCell>
                            <TableCell>Media</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.CampaignsName}>
                                <TableCell component="th" scope="row">
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> {row.CampaignsName}
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        style={{ color: row.Status === 'success' ? 'green' : 'red', padding: 3 }}
                                    >{row.Status}
                                    </Typography>
                                </TableCell>
                                <TableCell>{row.createdat}</TableCell>
                                <TableCell>{row.Method}</TableCell>
                                <TableCell>
                                    <Typography style={{ display: 'flex', alignItems: 'center' }}>
                                        <VideocamIcon style={{ marginRight: 15 }} />{row.Media}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        <MultilineChartIcon style={{ marginRight: 15, color: 'green' }} />
                                        <GetAppIcon style={{ marginRight: 15, color: "cyan" }} />
                                        <VideoLibraryIcon style={{ marginRight: 15, color: "light green" }} />
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display:'flex',alignItems:'center', justifyContent:'space-between', marginTop:100}}>
                <p>showing 4 of 25</p>
                <p>{'<'} Prev  1  2  3 Next {'>'} </p>
            </div>
        </div>
    );
}
