import { Box, Container } from '@mui/material'

interface ProjectProps {
  color: string
}

export const Project: React.FC<ProjectProps> = ({ color }  ) => {
  return (
    <Box sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        minHeight: '400px',
        backgroundColor: color,
    }}>
        <Container
        sx={{
        
        }}
        >
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1</p>

        </Container>
    </Box>
  )
}
