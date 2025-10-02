// Manual Sistema

import React from 'react'

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide">
    <h1>{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);

export const ManualSistema = () => {

  const treeStructure = `/ (root)
    ├─ README.md
    ├─ package.json
    ├─ .env.example
    ├─ /src
    │  ├─ /controllers
    │  ├─ /services
    │  ├─ /models
    │  ├─ /routes
    │  └─ index.js
    ├─ /config
    ├─ /db
    │  ├─ migrations/
    │  └─ seeds/
    ├─ /docs
    ├─ docker-compose.yml
    └─ Dockerfile`;

  return (
    <div className="presentation">
      <Slide 
        title="Manual de Sistema - ÍNDICE"
        content={
          <div>
            <ol>
              <li><strong>Introducción</strong>
                <ol>
                  <li>Objetivo del Manual</li>
                  <li>Alcance del Sistema</li>
                </ol>
              </li>
              <li><strong>Arquitectura del Sistema</strong>
                <ol>
                  <li>Tecnologías Utilizadas</li>
                  <li>Estructura de Carpetas y Archivos</li>
                  <li>Base de Datos</li>
                </ol>
              </li>
              <li><strong>Instalación y Configuración</strong>
                <ol>
                  <li>Requisitos del Sistema</li>
                  <li>Proceso de Instalación</li>
                  <li>Configuración Inicial</li>
                </ol>
              </li>
              <li><strong>Funcionalidades del Sistema</strong>
                <ol>
                  <li>Página de Inicio</li>
                  <li>Menú de Navegación</li>
                  <li>Registro de Usuarios</li>
                  <li>Inicio de Sesión</li>
                  <li>Gestión de Contenido</li>
                  <li>Funcionalidad Específica (ej. Carrito de Compras)</li>
                </ol>
              </li>
              <li><strong>Roles y Permisos</strong>
                <ol>
                  <li>Roles de Usuario</li>
                  <li>Permisos Asociados a Cada Rol</li>
                </ol>
              </li>
              <li><strong>Seguridad del Sistema</strong>
                <ol>
                  <li>Protección contra Ataques</li>
                  <li>Políticas de Contraseñas</li>
                  <li>Copias de Seguridad (Backups)</li>
                </ol>
              </li>
              <li><strong>Mantenimiento y Actualización</strong>
                <ol>
                  <li>Actualización de Contenido</li>
                  <li>Mantenimiento del Sistema</li>
                  <li>Resolución de Problemas Comunes</li>
                </ol>
              </li>
              <li><strong>Soporte Técnico</strong>
                <ol>
                  <li>Procedimiento para Reportar Problemas</li>
                  <li>Contacto de Soporte</li>
                  <li>Horarios de Atención</li>
                </ol>
              </li>
              <li><strong>Anexos</strong>
                <ol>
                  <li>Diagramas y Esquemas</li>
                  <li>Plantillas útiles</li>
                </ol>
              </li>
            </ol>
          </div>
        }
      />
      
      <Slide 
        title="1. Introducción"
        content={
          <div>
            <h3>1.1 Objetivo del Manual</h3>
            <p>El objetivo de este manual es proporcionar una guía completa para administradores, desarrolladores y personal de soporte que deban instalar, configurar, operar y mantener el [Nombre del Sistema]. Incluye instrucciones técnicas, procedimientos de seguridad, prácticas de mantenimiento y un flujo claro para reportar problemas.</p>
            
            <h3>1.2 Alcance del Sistema</h3>
            <p>Este documento cubre:</p>
            <ul>
              <li>Arquitectura general y componentes principales.</li>
              <li>Requisitos y pasos para instalación y configuración.</li>
              <li>Descripción funcional de las principales características del sistema.</li>
              <li>Roles y permisos disponibles.</li>
              <li>Políticas de seguridad y respaldo.</li>
              <li>Procedimientos de mantenimiento, actualización y soporte.</li>
            </ul>
            <p>No cubre: diseño detallado de la UI (mockups), código fuente exhaustivo o documentación de APIs externas; dichos elementos pueden referenciarse mediante enlaces a repositorios o documentación técnica complementaria.</p>
          </div>
        }
      />
      
      <Slide 
        title="2. Arquitectura del Sistema"
        content={
          <div>
            <h3>2.1 Tecnologías Utilizadas</h3>
            <ul>
              <li><strong>Backend:</strong> Node.js Express</li>
              <li><strong>Base de datos:</strong> PostgreSQL.</li>
              <li><strong>ORM / Query Builder:</strong> Knex.js.</li>
              <li><strong>Frontend:</strong> React</li>
              <li><strong>Autenticación:</strong> JWT.</li>
              <li><strong>Contenedores:</strong> Docker.</li>
              <li><strong>Almacenamiento de archivos:</strong> S3-compatible (MinIO / AWS S3).</li>
              <li><strong>CI/CD:</strong> GitHub Actions.</li>
              <li><strong>Monitorización:</strong> Prometheus + Grafana.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="2.2 Estructura de Carpetas y Archivos"
        content={
          <div>
            <p>Estructura típica del repositorio:</p>
            <pre className="tree-structure">
              <code>{treeStructure}</code>
            </pre>
            <p>Archivos importantes:</p>
            <ul>
              <li><code>.env</code> — variables de entorno (no commitear en VCS).</li>
              <li><code>README.md</code> — guía rápida del proyecto.</li>
              <li><code>Dockerfile</code> / <code>docker-compose.yml</code> — para contenerización.</li>
              <li><code>/db/migrations</code> — scripts de migración de la base de datos.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="2.3 Base de Datos"
        content={
          <div>
            <h3>2.3.1 Modelo de Datos</h3>
            <p>A continuación se presentan las entidades principales. Para cada una indico: qué información almacena, por qué se diseñó así y la ventaja práctica de esa estructura.</p>
            <ul>
              <li><strong>permission_category:</strong> identificador, nombre técnico y nombre legible de la categoría. Por qué así: separar categorías permite agrupar permisos similares y simplificar la asignación y el mantenimiento de reglas. Beneficio: facilita exportes, filtros administrativos y la escalabilidad del modelo de permisos.</li>
              <li><strong>permission:</strong> descripción del permiso y enlace a su categoría. Por qué así: la entidad se centra en la intención del permiso, dejando la granularidad a action. Beneficio: separación clara entre concepto y operaciones concretas para control de acceso más flexible.</li>
              <li><strong>action:</strong> nombre y etiqueta de la acción concreta y la relación con un permiso. Por qué así: modelar acciones como filas facilita la extensión sin alterar el esquema. Beneficio: permite construir matrices de permisos dinámicas en la aplicación.</li>
              <li><strong>roles:</strong> identificador y nombre del rol. Por qué así: los roles agrupan permisos para asignarlos a usuarios de forma práctica. Beneficio: administración simple de grupos de privilegios.</li>
              <li><strong>role_permissions (tabla puente):</strong> pares role-permission. Por qué así: relación N:M explícita permite asignar muchos permisos a muchos roles sin repetir datos. Beneficio: mantiene integridad y facilita auditoría de permisos.</li>
              <li><strong>organization:</strong> información básica de la organización (nombre, nit, teléfono). Por qué así: las organizaciones actúan como contenedores de usuarios y servicios. Beneficio: diseño ligero y suficiente para facturación o segmentación.</li>
              <li><strong>user_account:</strong> credenciales mínimas (username, email, password hasheada), referencia a organización y marca temporal de creación. Por qué así: separar identidad del contexto facilita multi-tenancy y autenticación. Beneficio: soporte claro para login, recuperación de cuenta e integración con políticas de seguridad.</li>
              <li><strong>user_roles (tabla puente):</strong> asociaciones usuario ↔ rol. Por qué así: modelo N:M para un control de acceso flexible a nivel de usuario. Beneficio: permite asignar roles múltiples sin duplicar datos de usuario.</li>
              <li><strong>services:</strong> catálogo de servicios con precio y descripción. Por qué así: centralizar servicios facilita presentación y facturación. Beneficio: reutilizable por distintas organizaciones si se añade tabla asociativa.</li>
              <li><strong>course:</strong> título y descripción del curso. Por qué así: entidad concisa que actúa como contenedor lógico de clases. Beneficio: sencillo de gestionar y expandir con metadatos cuando sea necesario.</li>
              <li><strong>class:</strong> referencia al curso, URL de recurso, contenido y descripción. Por qué así: separar clase de curso permite versionar y controlar accesos por lección. Beneficio: facilita reproducción independiente y análisis granular del consumo de contenido.</li>
              <li><strong>user_courses (inscripciones):</strong> vínculo entre usuario y curso, fecha de inscripción y estado. Por qué así: registrar inscripción como entidad permite mantener historial de progreso y estados. Beneficio: soporte para análisis de progreso y reglas de negocio (reinscripción, certificación).</li>
              <li><strong>course_comments / class_comments:</strong> autor, referencia al recurso y texto del comentario con marca temporal. Por qué así: comentarios como entidades separadas preservan historial y permiten moderación/filtrado. Beneficio: fácil auditoría, moderación y búsqueda por contenido.</li>
              <li><strong>class_reproductions:</strong> historial de visualizaciones con tiempos y progreso. Por qué así: almacenar reproducciones como filas separadas permite medir engagement y reanudar sesiones. Beneficio: base para recomendaciones, métricas y detección de abandono.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="2.3.2 Indexes y Constraints"
        content={
          <div>
            <p>Índices en campos usados frecuentemente en filtros (pensando en consultas habituales como login, listados por curso, etc.):</p>
            <ul>
              <li>user_account(email) — índice único para login y validación de unicidad.</li>
              <li>user_account(username) — índice único para búsquedas por nombre.</li>
              <li>class(course_id) — para listar rápidamente las clases de un curso.</li>
              <li>course_comments(course_id) y class_comments(class_id) — para paginar y ordenar comentarios por recurso.</li>
              <li>class_reproductions(user_id, class_id) — para recuperar historial y progreso de un usuario en una clase.</li>
            </ul>
            <p>Índices en tablas puente (user_roles(user_id), user_roles(role_id), role_permissions(role_id), role_permissions(permission_id), user_courses(user_id), user_courses(course_id)) para acelerar joins frecuentes.</p>
            <p>Comentario práctico: estos índices se eligieron por patrones típicos de uso. En producción conviene realizar un análisis EXPLAIN y ajustar según las consultas reales.</p>
            <p>Restricciones de integridad referencial (FOREIGN KEYS) con políticas ON DELETE y ON UPDATE según semántica:</p>
            <ul>
              <li>permission.permission_category_id → permission_category(id): ON DELETE SET NULL o RESTRICT.</li>
              <li>action.permission_id → permission(id): ON DELETE CASCADE.</li>
              <li>role_permissions (FKs hacia roles y permission): ON DELETE CASCADE.</li>
              <li>user_account.organization_id → organization(id): ON DELETE SET NULL.</li>
              <li>user_roles (FKs hacia user_account y roles): ON DELETE CASCADE.</li>
              <li>class.course_id → course(id): ON DELETE CASCADE.</li>
              <li>user_courses (FKs hacia user_account y course): ON DELETE CASCADE.</li>
              <li>course_comments.user_id y class_comments.user_id → user_account(id): ON DELETE SET NULL; course_id / class_id: ON DELETE CASCADE.</li>
              <li>class_reproductions (FKs hacia user_account y class): ON DELETE CASCADE.</li>
            </ul>
            <p>Constraints adicionales y checks:</p>
            <ul>
              <li>UNIQUE: user_account(email), user_account(username), roles(name), permission_category(name).</li>
              <li>CHECK: price := 0 en services, progress BETWEEN 0 AND 100 en class_reproductions.</li>
              <li>NOT NULL en campos requeridos (ej.: user_account.password, class.course_id).</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="2.3.3 Migraciones y Seeds"
        content={
          <div>
            <p>Usar herramienta de migraciones Knex.js. Mantener seeds para datos iniciales.</p>
          </div>
        }
      />
      
      <Slide 
        title="3. Instalación y Configuración"
        content={
          <div>
            <h3>3.1 Requisitos del Sistema</h3>
            <ul>
              <li><strong>Hardware recomendado:</strong> 2 vCPU, 4 GB RAM (desarrollo) — 4+ vCPU, 8+ GB RAM (producción)</li>
              <li><strong>Sistemas operativos soportados:</strong> Ubuntu 20.04+, Debian, macOS (desarrollo local), Windows (WSL recomendado)</li>
              <li><strong>Software:</strong> Node.js v20+, PostgreSQL 12+, Docker</li>
            </ul>
            
            <h3>3.2 Proceso de Instalación</h3>
            <p><strong>Instalación rápida (desarrollo con Docker):</strong></p>
            <ol>
              <li>git clone [URL_DEL_REPOSITORIO]; cd [NOMBRE_REPO]</li>
              <li>cp .env.example .env (# Editar .env con las credenciales locales)</li>
              <li>docker-compose up --build -d</li>
              <li>npm run migrate:latest; npm run seed:run</li>
              <li>npm install; npm run dev</li>
            </ol>
            <p><strong>Instalación manual (servidor Linux):</strong></p>
            <ol>
              <li>sudo apt update; sudo apt install -y build-essential curl git</li>
              <li>Instalar Node.js y PostgreSQL según las guías oficiales.</li>
              <li>CREATE USER app_user WITH PASSWORD '...'; CREATE DATABASE app_db OWNER app_user;</li>
              <li>Configurar .env con los valores de conexión.</li>
              <li>Ejecutar migraciones y arrancar la aplicación.</li>
            </ol>
          </div>
        }
      />
      
      <Slide 
        title="3.3 Configuración Inicial"
        content={
          <div>
            <ul>
              <li>Crear usuario administrador inicial via migración.</li>
              <li>Ajustar variables en .env.</li>
              <li>Configurar el proveedor de almacenamiento (S3 o local) y las credenciales.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="4. Funcionalidades del Sistema"
        content={
          <div>
            <h3>4.1 Página de Inicio</h3>
            <p>Resumen de la filosofía institucional (visión, misión, objetivos, estrategias y valores). Presentación de los servicios principales. Llamadas a la acción para contactar o registrarse en cursos.</p>
            
            <h3>4.2 Sección “Quiénes Somos”</h3>
            <p>Información sobre la empresa y el equipo multidisciplinario. Presentación de misión, visión, objetivos y estrategias. Elementos visuales e infografías que refuercen la identidad corporativa.</p>
            
            <h3>4.3 Catálogo de Cursos y Servicios</h3>
            <p>Listado de cursos presenciales, semipresenciales y talleres (RRHH, contabilidad, administración, marketing, ofimática). Sub-secciones detalladas por área: CEC (Outsourcing, reingeniería, etc.), SERLIS (Derecho civil y comercial, etc.), CCC (Cursos presenciales, etc.). Enlaces de contacto en cada subsección (“Le interesa nuestro servicio… contáctenos”). Registro en línea para cursos y talleres.</p>
            
            <h3>4.4 Registro de Usuarios</h3>
            <p>Creación de perfiles personalizados. Historial de cursos, inscripciones y certificaciones.</p>
            
            <h3>4.5 Aula Virtual</h3>
            <p>Videos, materiales descargables y quizzes. Foros de discusión para interacción entre usuarios.</p>
            
            <h3>4.6 Certificación Automática</h3>
            <p>Emisión de certificados digitales según competencias y progreso del curso.</p>
            
            <h3>4.7 Formularios de Contacto y Gestión</h3>
            <p>Consultas generales, solicitudes de cotización y negociaciones. Formularios de inscripción y descarga de documentos. Almacenamiento de datos en base de datos para seguimiento. API REST para integración con sistemas externos o CRM.</p>
            
            <h3>4.8 Panel Administrativo</h3>
            <p>Gestión de contenidos (páginas, noticias, servicios). Administración de usuarios, cursos e inscripciones. Visualización de analíticas web.</p>
            
            <h3>4.9 Integración con Mapas y Redes Sociales</h3>
            <p>Ubicación de la empresa en Google Maps. Enlaces a redes sociales corporativas. Botones para compartir cursos y noticias.</p>
            
            <h3>4.10 Repositorio de Documentos</h3>
            <p>Descarga de PDFs y materiales de referencia para usuarios.</p>
          </div>
        }
      />
      
      <Slide 
        title="5. Roles y Permisos"
        content={
          <div>
            <h3>5.1 Roles de Usuario</h3>
            <ul>
              <li><strong>Administrador (admin):</strong> acceso completo, gestión de usuarios, configuración del sistema.</li>
              <li><strong>Editor (editor):</strong> creación y edición de contenido, no accede a configuraciones críticas.</li>
              <li><strong>Usuario registrado (user):</strong> funcionalidades estándar, gestionar su perfil.</li>
              <li><strong>Invitado (guest):</strong> acceso público a contenido no restringido.</li>
            </ul>
            
            <h3>5.2 Permisos Asociados a Cada Rol</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Recurso / Acción</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Admin</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Editor</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>User</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Guest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver Página de Inicio</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Editar Página de Inicio (contenido/CTA)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver "Quiénes Somos"</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Editar "Quiénes Somos"</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver Catálogo de Cursos y Servicios</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Crear/Editar/Eliminar Cursos</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver detalle de un curso</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Registro de usuario / Crear cuenta</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Verificar email (enlace/token)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Iniciar sesión (email/password & OAuth)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gestión y revocación de sesiones / Tokens (JWT)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver / Editar perfil propio</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ver historial de cursos / inscripciones (perfil)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inscribirse en curso (registro en línea)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Realizar pago / Usar pasarela (Stripe/PayPal/local)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gestionar pasarelas de pago (configuración)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acceder al Aula Virtual (contenido protegido)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subir/Administrar materiales del curso (videos, PDFs)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descargar materiales (cuando esté permitido)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Participar en foros / discusiones</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Crear / moderar hilos en foros</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Realizar quizzes / evaluaciones</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corregir / moderar evaluaciones (si aplica)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Emisión de certificado automático</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Generar/Administrar certificados (emitir/revocar)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enviar formulario de contacto / inscripción / cotización</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recepción y seguimiento de formularios (BD)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Exportar / Integrar formularios vía API REST (CRM)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acceso API REST pública (endpoints protegidos)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gestión de contenidos (CRUD páginas, noticias, blog)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subir/Administrar repositorio de documentos (PDFs)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ (descarga)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ (descarga pública)</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subir documentos al repositorio</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descargar documentos restringidos</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acceso al Panel Administrativo (dashboard)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ (limitado)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gestionar usuarios (crear/editar/eliminar)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gestionar roles y permisos</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Visualizar analíticas web / métricas</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ (parc.)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Configurar hosting, backups y SSL</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reportar incidente de seguridad (formulario)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Responder solicitudes de cotización</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integración con Mapas (configuración)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enlaces y botones para redes sociales</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compartir cursos / noticias en redes (botón)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acceso a área privada / membresía (clientes)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>APIs para integración con CRM / sistemas externos</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>Generar reportes (inscripciones, ventas, uso)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>✓ (limitado)</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
      
      <Slide 
        title="6. Seguridad del Sistema"
        content={
          <div>
            <h3>6.1 Protección contra Ataques</h3>
            <ul>
              <li>HTTPS obligatorio: forzar TLS en todo el tráfico.</li>
              <li>Protección contra CSRF: tokens CSRF en formularios o usar cabeceras seguras.</li>
              <li>Protección contra XSS: sanitizar/escapar contenido HTML en entradas de usuarios.</li>
              <li>Rate limiting: limitar intentos de login y endpoints sensibles.</li>
              <li>WAF / reglas de firewall: bloquear patrones maliciosos y tráfico sospechoso.</li>
              <li>Validación de entrada: validar y sanitizar todos los datos entrantes.</li>
            </ul>
            
            <h3>6.2 Políticas de Contraseñas</h3>
            <ul>
              <li>Longitud mínima: 8–12 caracteres (recomendado 12+).</li>
              <li>Requerir mezcla: mayúsculas, minúsculas, números y símbolos (según riesgo).</li>
              <li>Hashing: almacenar contraseñas con algoritmos resistentes usando bcrypt con costo adecuado.</li>
              <li>Requerir verificación por email para nuevos registros.</li>
              <li>Implementar bloqueo temporal o captcha tras varios intentos fallidos.</li>
              <li>Política de expiración de contraseñas: opcional; preferir MFA sobre expiración forzada.</li>
            </ul>
            
            <h3>6.3 Copias de Seguridad (Backups)</h3>
            <p><strong>Requisitos:</strong></p>
            <ul>
              <li>Frecuencia: backups semanales en entorno de producción.</li>
              <li>Retención: conservar al menos 30 días de backups.</li>
              <li>Pruebas de recuperación: realizar pruebas de restauración al menos cada mes.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="7. Mantenimiento y Actualización"
        content={
          <div>
            <h3>7.1 Actualización de Contenido</h3>
            <p>Flujo para publicar contenido nuevo: creación en staging -: revisión QA -: despliegue a producción. Mantener registros de cambios y versiones de contenido.</p>
            
            <h3>7.2 Mantenimiento del Sistema</h3>
            <p>Tareas periódicas:</p>
            <ul>
              <li>Actualización de dependencias y parches de seguridad: anual.</li>
              <li>Limpieza de logs y archivos temporales: semanal.</li>
              <li>Verificación del uso de disco y estado de la base de datos: semanal.</li>
              <li>Comprobación de backups y pruebas de restauración: mensual.</li>
            </ul>
            <p>Checklist para actualizaciones menores:</p>
            <ol>
              <li>Revisar changelogs de dependencias.</li>
              <li>Probar en entorno de staging.</li>
              <li>Ejecutar migraciones en staging.</li>
              <li>Planificar el mantenimiento para producción.</li>
              <li>Ejecutar migraciones y tests posteriores.</li>
            </ol>
            
            <h3>7.3 Resolución de Problemas Comunes</h3>
            <ul>
              <li>La app no inicia: revisar logs (journalctl, docker logs, o logs de la app). Verificar variables de entorno y conexión a DB.</li>
              <li>Conexión a DB fallida: comprobar credenciales, que el servicio DB esté corriendo y puertos/firewall.</li>
              <li>Errores 500 en producción: revisar stack trace en logs, reproducir en staging.</li>
              <li>Problemas de performance: identificar queries lentas (EXPLAIN), revisar índices, escalar recursos o cachear respuestas.</li>
            </ul>
            <p>Formato para reportar incidencias internas:</p>
            <ul>
              <li>Fecha / Hora</li>
              <li>Descripción del problema</li>
              <li>Pasos para reproducir</li>
              <li>Logs relevantes (extractos)</li>
              <li>Impacto (usuario/servicio afectado)</li>
              <li>Acciones tomadas</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="8. Soporte Técnico"
        content={
          <div>
            <h3>8.1 Procedimiento para Reportar Problemas</h3>
            <ol>
              <li>Verificar si existe un incidente conocido en la página de estado.</li>
              <li>Recolectar información básica: URL afectada, usuario, timestamp, capturas o logs.</li>
              <li>Abrir ticket en sistema de gestión con prioridad adecuada.</li>
              <li>Etiquetar el ticket con severity (Alta/Media/Baja) y component.</li>
              <li>Asignar al responsable según la rotación de on-call.</li>
            </ol>
            
            <h3>8.2 Contacto de Soporte</h3>
            <ul>
              <li>Correo de soporte: soporte@[dominio].com (ejemplo)</li>
              <li>Slack: canal #soporte-app</li>
              <li>Teléfono de emergencia (solo para incidencias críticas): [+591] XXXXXXXX</li>
            </ul>
            
            <h3>8.3 Horarios de Atención</h3>
            <ul>
              <li>Soporte estándar: Lunes a Viernes, 09:00 — 18:00 (hora local)</li>
              <li>Soporte crítico / on-call: 24/7 para incidencias de producción</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="Anexos"
        content={
          <div>
            <h3>A. Diagramas y Esquemas</h3>
            <p>A.1 Diagramas de Flujo del Sistema</p>
            <p>A.2 Esquema de la Base de Datos</p>
            {/* Placeholder for ER Diagram */}
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <p>[Diagrama ER: permission_category → permission → action, roles → role_permissions, user_account → user_roles, organization, services, course → class, user_courses, comments, class_reproductions]</p>
              {/* Add actual image if available */}
            </div>
            
            <h3>B. Plantillas útiles</h3>
            <p>B.1 Plantilla para cambiar configuración en producción:</p>
            <ul>
              <li>Crear branch hotfix/config-YYYYMMDD</li>
              <li>Probar cambios en staging</li>
              <li>Ejecutar scripts de migración en mantenimiento programado</li>
              <li>Hacer rollback plan y pruebas post-deploy</li>
            </ul>
            <p>B.2 Plantilla de ticket de incidente:</p>
            <ul>
              <li>Título: [Breve resumen]</li>
              <li>Descripción: [Descripción detallada]</li>
              <li>Prioridad: [Alta/Media/Baja]</li>
              <li>Pasos para reproducir: 1. ... 2. ...</li>
              <li>Logs adjuntos: [ruta o extracto]</li>
              <li>Contacto: [nombre y teléfono]</li>
            </ul>
          </div>
        }
      />
    </div>
  )
}

