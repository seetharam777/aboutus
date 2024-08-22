// // src/components/ChurchTable.js
// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const churches = [
//   {
//     id: 1,
//     name: 'St. Paul\'s Church',
//     description: 'A historic church in the city center.',
//     location: '123 Main St, Cityville',
//     contact: '123-456-7890',
//     email: 'contact@stpaulschurch.org',
//   },
//   {
//     id: 2,
//     name: 'Grace Cathedral',
//     description: 'A modern cathedral with a large congregation.',
//     location: '456 Elm St, Townsville',
//     contact: '987-654-3210',
//     email: 'info@gracecathedral.org',
//   },
  
// ];

// const ChurchTable = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ChurchID</TableCell>
//             <TableCell>ChurchName</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Location</TableCell>
//             <TableCell>Contact</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Image</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {churches.map((church) => (
//             <TableRow key={church.id}>
//               <TableCell>{church.id}</TableCell>
//               <TableCell>{church.name}</TableCell>
//               <TableCell>{church.description}</TableCell>
//               <TableCell>{church.location}</TableCell>
//               <TableCell>{church.contact}</TableCell>
//               <TableCell>{church.email}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ChurchTable;
