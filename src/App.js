import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './component/Footer';

const App = () => {
  return (
    <Box sx={{ width: { xs: '100%', xl: '1440px' }, px: { xs: 1, md: 2.5 } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
