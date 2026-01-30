import { Button } from '@mui/material'
import { Link } from '@mui/icons-material'

interface FigmaButtonProps {
  url?: string
}

const figmaButton = ({ url }: FigmaButtonProps) => {
  const defaultUrl = 'https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'

  return (
    <Button
      variant="outlined"
      href={url || defaultUrl}
      target="_blank"
      rel="noopener"
      startIcon={<Link />}
      sx={{
        padding: '10px 20px',
        borderColor: 'primary.main',
        color: 'primary.main',
        fontWeight: 600,
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'primary.main',
          color: 'white',
          transform: 'translateY(-2px)',
        },
        borderRadius: 2,
        transition: 'all 0.3s ease',
      }}
    >
      Ver Protótipo
    </Button>
  )
}

export default figmaButton
