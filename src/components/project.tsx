import { Box, Typography, Card, CardContent, Chip } from '@mui/material'
import FigmaButton from './figmaButton'
import kifome from '../assets/kifome.png'

interface ProjectProps {
  data: {
    color: string
    title: string
    description: string
    img: string | null
    technologies: string[]
    figmaUrl: string | null
  }
  index: number
}

export const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const displayImage = data.img || kifome

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <Card
        sx={{
          height: '100%',
          backgroundColor: 'transparent',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          border: 'none',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            paddingTop: '50%',
            backgroundColor: data.color,
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={displayImage}
            alt={data.title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>

        <CardContent
          sx={{
            padding: { xs: 1.5, sm: 2 },
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.5,
              flexGrow: 1,
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
            }}
          >
            {data.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
              marginBottom: 0.5,
            }}
          >
            {data.technologies.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 500,
                  height: { xs: '20px', sm: '24px' },
                  fontSize: { xs: '0.65rem', sm: '0.7rem' },
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 1,
              marginTop: 'auto',
            }}
          >
            {data.figmaUrl && <FigmaButton url={data.figmaUrl} />}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
