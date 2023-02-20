import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h5>No</h5></TableCell>
            <TableCell align="right"><h5>ID</h5></TableCell>
            <TableCell align="right"><h5>Date</h5></TableCell>
            <TableCell align="right"><h5>Price</h5></TableCell>
            <TableCell align="right"><h5>Status</h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
            >
              <TableCell component="th" scope="row">
                02
              </TableCell>
              <TableCell align="right">#12345</TableCell>
              <TableCell align="right">Nov 20th,22</TableCell>
              <TableCell align="right">$60.00</TableCell>
              <TableCell align="right">On Delievery</TableCell>
            </TableRow>
            <TableRow
              
            >
              <TableCell component="th" scope="row">
                03
              </TableCell>
              <TableCell align="right">#12345</TableCell>
              <TableCell align="right">Nov 20th,22</TableCell>
              <TableCell align="right">$45.00</TableCell>
              <TableCell align="right">Available</TableCell>
            </TableRow>
            <TableRow
              
            >
              <TableCell component="th" scope="row">
                01
              </TableCell>
              <TableCell align="right">#12345</TableCell>
              <TableCell align="right">Nov 20th,22</TableCell>
              <TableCell align="right">$50.00</TableCell>
              <TableCell align="right">New Order</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}