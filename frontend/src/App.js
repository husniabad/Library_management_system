import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SignupScreen from './screens/SignupScreen';
import LayoutScreen from './screens/LayoutScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { Container } from '@material-ui/core';

function App() {
  
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route index element={<HomeScreen />} />
        <Route path="signup" element={<SignupScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>

        
  
  );
}

export default App;
