import { Paper, Typography, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Ene', ventas: 4000, oportunidades: 2400 },
  { name: 'Feb', ventas: 3000, oportunidades: 1398 },
  { name: 'Mar', ventas: 2000, oportunidades: 9800 },
  { name: 'Abr', ventas: 2780, oportunidades: 3908 },
  { name: 'May', ventas: 1890, oportunidades: 4800 },
  { name: 'Jun', ventas: 2390, oportunidades: 3800 },
  { name: 'Jul', ventas: 3490, oportunidades: 4300 },
];

export default function SalesChart() {
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Ventas y Oportunidades
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ventas"
            stroke="#2196F3"
            strokeWidth={2}
            name="Ventas"
          />
          <Line
            type="monotone"
            dataKey="oportunidades"
            stroke="#FF9800"
            strokeWidth={2}
            name="Oportunidades"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}