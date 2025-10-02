import React from "react";

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide flex flex-col items-center justify-center p-6">
    <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);

export const Diagrama = () => {
  return (
    <div className="presentation flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-pink-100 to-cyan-100">
      <div className="flex flex-col items-center justify-center">
        <Slide
          title="Diagrama del Sistema Web E-learning"
          content={
            <div className="flex items-center justify-center">
              <svg width="1400" height="800" viewBox="0 0 1400 800">
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L0,6 L9,3 z" fill="black" />
                  </marker>
                </defs>

                {/* Marco */}
                <rect
                  x="20"
                  y="20"
                  width="1360"
                  height="760"
                  rx="20"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="white"
                  fillOpacity="0.2"
                />

                {/* Función para nodos */}
                {[
                  {
                    x: 50,
                    y: 350,
                    w: 160,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Página de Inicio",
                  },
                  {
                    x: 300,
                    y: 100,
                    w: 160,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Quiénes Somos",
                  },
                  {
                    x: 300,
                    y: 300,
                    w: 220,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Catálogo de Cursos y Servicios",
                  },
                  {
                    x: 600,
                    y: 200,
                    w: 160,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Servicios CEC",
                  },
                  {
                    x: 600,
                    y: 280,
                    w: 160,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Servicios SERLIS",
                  },
                  {
                    x: 600,
                    y: 360,
                    w: 200,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Cursos / Talleres CCC",
                  },
                  {
                    x: 900,
                    y: 300,
                    w: 160,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Aula Virtual",
                  },
                  {
                    x: 1150,
                    y: 300,
                    w: 200,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Certificación Automática",
                  },
                  {
                    x: 300,
                    y: 500,
                    w: 220,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Registro/Login de Usuario",
                  },
                  {
                    x: 600,
                    y: 500,
                    w: 160,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Autenticación",
                  },
                  {
                    x: 850,
                    y: 200,
                    w: 160,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Perfil de Usuario",
                  },
                  {
                    x: 850,
                    y: 500,
                    w: 200,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Panel Administrativo",
                  },
                  {
                    x: 1150,
                    y: 400,
                    w: 160,
                    h: 50,
                    stroke: "#2563eb",
                    text: "CRUD Cursos",
                  },
                  {
                    x: 1150,
                    y: 460,
                    w: 200,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Gestión de Usuarios",
                  },
                  {
                    x: 1150,
                    y: 520,
                    w: 220,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Gestión de Inscripciones",
                  },
                  {
                    x: 1150,
                    y: 580,
                    w: 220,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Reportes y Analíticas",
                  },
                  {
                    x: 1150,
                    y: 640,
                    w: 260,
                    h: 50,
                    stroke: "#2563eb",
                    text: "Gestión de Consultoría/Auditoría",
                  },
                  {
                    x: 900,
                    y: 100,
                    w: 240,
                    h: 50,
                    stroke: "#dc2626",
                    text: "Formulario de Contacto / Cotización",
                  },
                ].map((node, i) => (
                  <g key={i}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.w}
                      height={node.h}
                      rx="6"
                      stroke={node.stroke}
                      strokeWidth="2"
                      fill="white"
                    />
                    <text
                      x={node.x + node.w / 2}
                      y={node.y + node.h / 2 + 5}
                      textAnchor="middle"
                      fontSize="14"
                      fontFamily="Arial, sans-serif"
                      fill="black"
                    >
                      {node.text}
                    </text>
                  </g>
                ))}

                {/* Flechas principales */}
                <line
                  x1="210"
                  y1="375"
                  x2="300"
                  y2="125"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="210"
                  y1="375"
                  x2="300"
                  y2="325"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="210"
                  y1="375"
                  x2="300"
                  y2="525"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="520"
                  y1="325"
                  x2="600"
                  y2="225"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="520"
                  y1="325"
                  x2="600"
                  y2="305"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="520"
                  y1="325"
                  x2="600"
                  y2="385"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="760"
                  y1="225"
                  x2="900"
                  y2="125"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="800"
                  y1="385"
                  x2="900"
                  y2="325"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1010"
                  y1="225"
                  x2="980"
                  y2="300"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1060"
                  y1="325"
                  x2="1150"
                  y2="325"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="520"
                  y1="525"
                  x2="600"
                  y2="525"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="760"
                  y1="525"
                  x2="850"
                  y2="525"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="760"
                  y1="525"
                  x2="850"
                  y2="225"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1050"
                  y1="525"
                  x2="1150"
                  y2="425"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1050"
                  y1="525"
                  x2="1150"
                  y2="485"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1050"
                  y1="525"
                  x2="1150"
                  y2="545"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1050"
                  y1="525"
                  x2="1150"
                  y2="605"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="1050"
                  y1="525"
                  x2="1150"
                  y2="665"
                  stroke="black"
                  markerEnd="url(#arrow)"
                />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
};
