//Herramientas

import React from 'react'

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(248, 245, 245, 1)',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  padding: 24,
  gap: 24,
  maxWidth: 1200,
  margin: '0 auto'
};

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide" style={{ marginBottom: 32 }}>
    <h1>{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);

export const Herramientas = () => {

  const logos = {
    linear: 'data:image/jpeg;base64,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',
    figma: 'https://www.uifrommars.com/wp-content/uploads/2019/02/introduccion-figma-opinion.jpg',
    react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    typescript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    postgres: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    neolo: 'https://www.neolo.com/blog/wp-content/uploads/2019/05/neolo-04-768x404.png',
    s3: 'data:image/jpeg;base64,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'
  };


  return (
    <div className="presentation">
      <Slide 
        title="Herramientas para la fase de planificación"
        content={
            <div></div>
        //   <div style={cardStyle}>
        //     <img 
        //       src={logos.linear}
        //       alt="Planificación"
        //       style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
        //     />
        //     <div>
        //       <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Planificación</strong>
        //       <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
        //         En esta fase, se utilizarán herramientas especializadas para la gestión de proyectos, diseño y desarrollo con tecnologías clave, asegurando una planificación eficiente y alineada con los objetivos del proyecto de ROMMOS S.R.L.
        //       </div>
        //     </div>
        //   </div>
        }
      />
      
      <Slide 
        title="Herramientas de gestión de proyecto"
        content={
          <div style={cardStyle}>
            <img 
              src={logos.linear}
              alt="Linear logo"
              style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Linear</strong>
                <span style={{
                  background: '#f7b500',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '2px 10px',
                  fontSize: 13,
                  fontWeight: 600,
                  marginLeft: 8
                }}>Kanban</span>
                <span style={{
                  background: '#2d9cdb',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '2px 10px',
                  fontSize: 13,
                  fontWeight: 600,
                  marginLeft: 4
                }}>Scrum</span>
              </div>
              <div style={{ color: '#444', fontSize: 16 }}>
                Linear es una herramienta ágil para la gestión de proyectos, que permite el seguimiento de tareas, sprints y colaboración en equipo de manera intuitiva y eficiente.<br />
                <span style={{ color: '#222', fontWeight: 500 }}>
                  En este proyecto, utilizaremos Linear implementando las metodologías Kanban y Scrum para organizar y visualizar el flujo de trabajo, facilitando la adaptación y mejora continua del equipo.
                </span>
              </div>
            </div>
          </div>
        }
      />
      
      <Slide 
        title="Herramientas para el diseño"
        content={
          <div style={cardStyle}>
            <img 
              src={logos.figma}
              alt="Figma logo"
              style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            />
            <div>
              <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Figma</strong>
              <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                Figma es una plataforma colaborativa de diseño de interfaces, ideal para crear mockups, prototipos interactivos y guías de estilo visual, facilitando la iteración rápida con el equipo de ROMMOS.
              </div>
            </div>
          </div>
        }
      />
      
      <Slide 
        title="Tecnologías"
        content={
          <div style={{  flexDirection: 'column', gap: 24 }}>
            <div style={cardStyle}>
              <img 
                src={logos.react}
                alt="React logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>React</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Biblioteca de JavaScript para construir interfaces de usuario dinámicas y componentes reutilizables.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.typescript}
                alt="TypeScript logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>TypeScript</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Superset de JavaScript que añade tipado estático para un desarrollo más robusto y mantenible.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.postgres}
                alt="Postgres logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Postgres</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Base de datos relacional de código abierto, escalable y confiable para el almacenamiento de usuarios, cursos y contenidos.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.neolo}
                alt="Neolo logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Neolo</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Hosting boliviano con soporte para alto tráfico, disponibilidad mínima del 99.9% y políticas de backup diarias.
                </div>
              </div>
            </div>
            
            <div style={cardStyle}>
              <img 
                src={logos.s3}
                alt="s3 logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>S3 AWS Bucket</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Servicio de almacenamiento en la nube para guardar y servir archivos multimedia de manera segura y escalable.
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}
