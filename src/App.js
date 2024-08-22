// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';


// const Home = () => (
//   <Container>
//     <Typography variant="h4" gutterBottom>
//       Home Page
//     </Typography>
//     <Typography variant="body1">
//       Welcome to the Home Page. Navigate to the Members page to view user information.
//     </Typography>
//   </Container>
// )

// function App() {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             My App
//           </Typography>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/members">
//             Members
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Container style={{ marginTop: 20 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/members" element={<Members />} /> */}
//         </Routes>
//       </Container>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import AboutUs from './AboutUs';

function App() {
  return (
    <AboutUs/>
  )
}

export default App