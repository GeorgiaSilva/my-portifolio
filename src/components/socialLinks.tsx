import { Box, Tooltip, IconButton, Link } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { SOCIAL_LINKS } from '../config/siteContent'

export const SocialLinks = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
       gap: 1,
        alignItems: 'center',
        marginTop: 2,

      }}
    >
      <Tooltip title={t('social.github')}>
        <Link
          href={SOCIAL_LINKS.github}
          target='_blank'
          rel='noopener'
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
            size='small'
            sx={{
              color: 'inherit',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <GitHub fontSize='large' />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title={t('social.linkedIn')}>
        <Link
          href={SOCIAL_LINKS.linkedIn}
          target='_blank'
          rel='noopener'
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
            size='small'
            sx={{
              color: 'inherit',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <LinkedIn fontSize='large' />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  )
}
