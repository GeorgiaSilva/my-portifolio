import { Box, Typography } from '@mui/material'

type CodeLabelProps = {
  children: string
  compact?: boolean
}

export const CodeLabel = ({ children, compact = false }: CodeLabelProps) => (
  <Box
    component='span'
    sx={{
      display: 'inline-flex', alignItems: 'center', width: 'fit-content', px: compact ? 0.9 : 1.1, py: compact ? 0.4 : 0.5,
      borderRadius: 1.25, border: '1px solid', borderColor: 'rgba(168, 85, 247, 0.26)',
      backgroundColor: 'rgba(168, 85, 247, 0.08)', color: 'primary.main',
    }}
  >
    <Typography component='span' sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: compact ? '0.7rem' : '0.78rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
      {children}
    </Typography>
  </Box>
)
