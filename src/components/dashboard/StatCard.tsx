import { Paper, Box, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

export default function StatCard({ title, value, change, icon, color }: StatCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: -20,
          opacity: 0.1,
          fontSize: 100,
          color: color,
        }}
      >
        {icon}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
        {value}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {isPositive ? (
          <ArrowUpward sx={{ fontSize: 16, color: 'success.main' }} />
        ) : (
          <ArrowDownward sx={{ fontSize: 16, color: 'error.main' }} />
        )}
        <Typography
          variant="caption"
          sx={{
            color: isPositive ? 'success.main' : 'error.main',
            fontWeight: 600,
          }}
        >
          {change}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          vs mes anterior
        </Typography>
      </Box>
    </Paper>
  );
}