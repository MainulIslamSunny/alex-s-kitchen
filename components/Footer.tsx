import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="py-4 bg-gray-200 text-center mt-auto">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Alex's Kitchen
      </Typography>
    </Box>
  );
};

export default Footer;
