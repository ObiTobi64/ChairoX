import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
} from '@mui/material';
import { CheckCircle, Email, Phone, Event } from '@mui/icons-material';

const activities = [
  {
    id: 1,
    type: 'meeting',
    icon: <Event />,
    title: 'Reunión con cliente',
    subtitle: 'Acme Corp - hace 2 horas',
    status: 'completed',
  },
  {
    id: 2,
    type: 'email',
    icon: <Email />,
    title: 'Email enviado',
    subtitle: 'Tech Solutions - hace 4 horas',
    status: 'sent',
  },
  {
    id: 3,
    type: 'call',
    icon: <Phone />,
    title: 'Llamada telefónica',
    subtitle: 'Global Industries - hace 6 horas',
    status: 'completed',
  },
  {
    id: 4,
    type: 'deal',
    icon: <CheckCircle />,
    title: 'Negocio cerrado',
    subtitle: 'StartUp XYZ - $15,000',
    status: 'won',
  },
];

export default function RecentActivity() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Actividad Reciente
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem
            key={activity.id}
            divider={index < activities.length - 1}
            sx={{ px: 0 }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#0f3460' }}>{activity.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={activity.title}
              secondary={activity.subtitle}
            />
            <Chip
              label={activity.status}
              size="small"
              color={activity.status === 'won' ? 'success' : 'default'}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}