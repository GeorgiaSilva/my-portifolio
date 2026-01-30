import { Box, Tooltip, IconButton, Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

export const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        marginTop: 2,
      }}
    >
      <Tooltip title="GitHub">
        <Link
          href="https://github.com/GeorgiaSilva"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'text.primary',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              color: 'inherit',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <GitHub fontSize="small" />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <Link
          href="https://www.linkedin.com/in/ge%C3%B3rgia-carin-martins-da-silva-10903b212/"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'text.primary',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              color: 'inherit',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  )
}
