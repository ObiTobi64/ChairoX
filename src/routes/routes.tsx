import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../layouts/Layout';
import CartaEntrega from '../pages/CartaEntrega';
import EvaluacionFeedback from '../pages/EvaluacionFeedback';
import SeleccionServidor from '../pages/SeleccionServidor';
import Analisis from '../pages/Analisis';
import TDR from '../pages/TDR';
import Planificacion from '../pages/Planificacion';
import DiseñoDesarrollo from '../pages/DiseñoDesarrollo';
import Herramientas from '../pages/Herramientas';

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analisis" element={<Analisis />} />
        <Route path="/tdr" element={<TDR />} />
        <Route path="/disenoDesarrollo" element={<DiseñoDesarrollo />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/planificacion" element={<Planificacion />} />
        <Route path="/cartaEntrega" element={<CartaEntrega />}/>
        <Route path="/evaluacionFeedback" element={<EvaluacionFeedback />}/>
        <Route path="/seleccionServidor" element={<SeleccionServidor />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </Layout>
  );
}