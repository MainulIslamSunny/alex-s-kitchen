import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-gray-200">
      <Toolbar>
        <Typography variant="h6" component="div" className="text-center w-full text-black">
          Alex's Kitchen
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
