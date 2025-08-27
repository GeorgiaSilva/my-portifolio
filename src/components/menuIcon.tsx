
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box } from '@mui/material';
export const MenuIcon = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    }}>

        <EmailOutlinedIcon sx={{
            border: '2px solid #aaa',
            padding: 1,
            color: '#aaa',
            borderRadius: '20%',
        }} />
        <EmailOutlinedIcon sx={{
            border: '2px solid #aaa',
            color: '#aaa',
            padding: 1,
            borderRadius: '20%',
        }} />
        <EmailOutlinedIcon sx={{
            border: '2px solid #aaa',
            color: '#aaa',
            padding: 1,
            borderRadius: '20%',
        }} />

      
    </Box>
  )
}
