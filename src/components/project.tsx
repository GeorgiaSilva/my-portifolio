import { Box, Typography, Card, CardContent, Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import FigmaButton from './figmaButton'
import type { ProjectCard } from '../config/siteContent'

interface ProjectProps {
  data: ProjectCard
  index: number
}

export const Project: React.FC<ProjectProps> = ({ data, index }) => {
  const { t } = useTranslation()

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
            component='img'
            src={data.img}
            alt={t(data.titleKey)}
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
            sx={{
              fontSize: { xs: '18px', sm: '20px' },
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {t(data.titleKey)}
          </Typography>

          <Typography
            fontSize='16px'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.2,
              flexGrow: 1,
              marginBottom: 2,
            }}
          >
            {t(data.descriptionKey)}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              marginBottom: 2,
            }}
          >
            {data.technologiesKeys.map((tech, i) => (
              <Chip
                key={i}
                label={t(tech)}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '10px', sm: '12px' },
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
            <FigmaButton url={data.figmaUrl} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
