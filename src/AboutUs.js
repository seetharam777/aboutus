
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const churches = [
  
 
  
];
-
const ChurchTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>

          <TableRow>

            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>ChurchID</TableCell>
            
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>ChurchName</TableCell>
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Image</TableCell>
            
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Description</TableCell>
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Location</TableCell>
          
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Contact</TableCell>
            <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Email</TableCell>
            
          </TableRow>
   
        </TableHead>


        <TableBody>
          {churches.map((church) => (
            
            <TableRow key={church.id}>


      
      

              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.id}</TableCell>

              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.name}</TableCell>
              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.description}</TableCell
              >
              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.location}</TableCell>
             
              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.contact}</TableCell>
              <TableCell style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{church.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChurchTable;
