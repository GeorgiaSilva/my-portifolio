import { Button } from '@mui/material'
import figmaLogo from '../assets/figma.svg';
const figmaButton = () => {
  return (

      <Button variant="outlined"  href="https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener" sx={{
        padding: '10px',
        borderColor: '#fff',
        color: '#fff',
        fontWeight: 'bold',
        marginTop: '20px',
        '&:hover': { borderColor: '#fff', backgroundColor: '#ffffff1a' },
        borderRadius: '8px',
      }}>
        <img style={{ width: '24px', height: '24px', marginRight: '6px', color: 'inherit' }} src={figmaLogo}  alt="Figma" />
        Protótipo
      </Button>

  )
}

export default figmaButton
