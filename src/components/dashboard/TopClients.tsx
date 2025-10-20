import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
} from '@mui/material';

const clients = [
  { name: 'Acme Corporation', value: '$125,000', avatar: 'A' },
  { name: 'Tech Solutions', value: '$98,500', avatar: 'T' },
  { name: 'Global Industries', value: '$87,300', avatar: 'G' },
  { name: 'StartUp XYZ', value: '$76,200', avatar: 'S' },
  { name: 'Enterprise Co', value: '$65,100', avatar: 'E' },
];

export default function TopClients() {
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Top Clientes
      </Typography>
      <List>
        {clients.map((client, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#16C79A' }}>{client.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={client.name}
              secondary={client.value}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}