import { Typography } from '@mui/material';
import React from 'react'

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <Typography variant="body1"
    sx={{
        padding: 1,
        transition: 'color 0.3s',
        '&:hover': {
            color: '#8c4cc4',
      },
    }}
    >{label}</Typography>
  )
}
