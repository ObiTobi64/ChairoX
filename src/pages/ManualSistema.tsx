import React from "react";

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide bg-white shadow-lg rounded-lg p-8 mb-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
      {title}
    </h1>
    <div className="slide-content text-gray-700 leading-relaxed">{content}</div>
  </div>
);

export const ManualSistema = () => {
  return (
    <div className="presentation max-w-5xl mx-auto p-6 bg-gray-50">
      <Slide
        title="Manual de Sistema - Introducción"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Objetivo del Manual
            </h2>
            <p className="mb-4">
              Este manual proporciona una guía completa para administradores,
              desarrolladores y personal de soporte que deban instalar,
              configurar, operar y mantener el sistema. Incluye instrucciones
              técnicas, procedimientos de seguridad, prácticas de mantenimiento
              y un flujo claro para reportar problemas.
            </p>
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-6">
              Alcance del Sistema
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Arquitectura general y componentes principales</li>
              <li>Requisitos y pasos para instalación y configuración</li>
              <li>
                Descripción funcional de las principales características del
                sistema
              </li>
              <li>Roles y permisos disponibles</li>
              <li>Políticas de seguridad y respaldo</li>
              <li>Procedimientos de mantenimiento, actualización y soporte</li>
            </ul>
          </div>
        }
      />

      <Slide
        title="2. Arquitectura del Sistema"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Tecnologías Utilizadas
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Backend</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Node.js Express</li>
                  <li>PostgreSQL</li>
                  <li>Knex.js (ORM)</li>
                  <li>JWT (Autenticación)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Frontend & DevOps
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React</li>
                  <li>Docker</li>
                  <li>GitHub Actions (CI/CD)</li>
                  <li>Prometheus + Grafana</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                Almacenamiento
              </h3>
              <p>S3-compatible (MinIO / AWS S3)</p>
            </div>
          </div>
        }
      />

      <Slide
        title="2.2 Estructura de Carpetas"
        content={
          <div>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`/ (root)
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
└─ Dockerfile`}</pre>
            </div>
            <div className="mt-4 space-y-2">
              <p>
                <strong className="text-blue-900">.env:</strong> Variables de
                entorno (no commitear en VCS)
              </p>
              <p>
                <strong className="text-blue-900">README.md:</strong> Guía
                rápida del proyecto
              </p>
              <p>
                <strong className="text-blue-900">/db/migrations:</strong>{" "}
                Scripts de migración de la base de datos
              </p>
            </div>
          </div>
        }
      />

      <Slide
        title="2.3 Base de Datos - Modelo de Datos"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Entidades Principales
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Gestión de Permisos
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>permission_category:</strong> Agrupa permisos
                    similares
                  </li>
                  <li>
                    <strong>permission:</strong> Descripción del permiso y
                    enlace a categoría
                  </li>
                  <li>
                    <strong>action:</strong> Acciones concretas (crear, leer,
                    actualizar, borrar)
                  </li>
                  <li>
                    <strong>roles:</strong> Agrupa permisos para asignarlos a
                    usuarios
                  </li>
                  <li>
                    <strong>role_permissions:</strong> Tabla puente (N:M)
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Usuarios y Organizaciones
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>organization:</strong> Información básica (nombre,
                    NIT, teléfono)
                  </li>
                  <li>
                    <strong>user_account:</strong> Credenciales, referencia a
                    organización
                  </li>
                  <li>
                    <strong>user_roles:</strong> Asociaciones usuario ↔ rol
                    (N:M)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      />

      <Slide
        title="2.3 Base de Datos - Cursos y Contenido"
        content={
          <div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Estructura de Cursos
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>services:</strong> Catálogo de servicios con precio
                    y descripción
                  </li>
                  <li>
                    <strong>course:</strong> Título y descripción del curso
                  </li>
                  <li>
                    <strong>class:</strong> Clases individuales con URL de
                    recurso y contenido
                  </li>
                  <li>
                    <strong>user_courses:</strong> Inscripciones (usuario-curso,
                    fecha, estado)
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">
                  Interacción y Métricas
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>course_comments / class_comments:</strong> Sistema
                    de comentarios
                  </li>
                  <li>
                    <strong>class_reproductions:</strong> Historial de
                    visualizaciones con progreso
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm italic text-gray-600">
              <strong>Beneficio:</strong> Separar clase de curso permite
              versionar y controlar accesos por lección, además de recolectar
              métricas de consumo por recurso.
            </p>
          </div>
        }
      />

      <Slide
        title="2.3.2 Índices y Constraints"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Optimización y Seguridad
            </h2>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-900 mb-2">
                Índices Principales
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  user_account(email, username) - índices únicos para login
                </li>
                <li>class(course_id) - listar clases de un curso</li>
                <li>
                  course_comments(course_id), class_comments(class_id) - paginar
                  comentarios
                </li>
                <li>
                  class_reproductions(user_id, class_id) - historial y progreso
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">
                Políticas de Integridad (Foreign Keys)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>CASCADE:</strong> action, role_permissions,
                  user_roles, class, user_courses
                </li>
                <li>
                  <strong>SET NULL:</strong> user_account.organization_id,
                  comentarios de usuarios
                </li>
                <li>
                  <strong>Constraints:</strong> UNIQUE en emails, usernames;
                  CHECK en price ≥ 0, progress 0-100
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <Slide
        title="3. Instalación y Configuración"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Requisitos del Sistema
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Desarrollo</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2 vCPU, 4 GB RAM</li>
                  <li>Node.js v20+</li>
                  <li>PostgreSQL 12+</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Producción
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>4+ vCPU, 8+ GB RAM</li>
                  <li>Ubuntu 20.04+, Debian</li>
                  <li>Backups semanales</li>
                  <li>Monitoreo 24/7</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <p className="mb-2"># Instalación rápida con Docker:</p>
              <pre>{`git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_REPO]
cp .env.example .env
docker-compose up --build -d
npm run migrate:latest
npm run seed:run`}</pre>
            </div>
          </div>
        }
      />

      <Slide
        title="4. Funcionalidades del Sistema"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Características Principales
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <strong className="text-blue-900">Página de Inicio:</strong>{" "}
                Presentación de servicios, visión, misión y CTAs
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <strong className="text-green-900">Catálogo:</strong> Cursos
                presenciales, semipresenciales y talleres (RRHH, contabilidad,
                marketing, ofimática)
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <strong className="text-purple-900">Registro:</strong> Perfiles
                personalizados, historial de cursos e inscripciones
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <strong className="text-orange-900">Aula Virtual:</strong>{" "}
                Videos, materiales descargables, quizzes y foros de discusión
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <strong className="text-pink-900">Certificación:</strong>{" "}
                Emisión automática de certificados digitales según progreso
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <strong className="text-indigo-900">Panel Admin:</strong>{" "}
                Gestión de contenidos, usuarios, analíticas y configuraciones
              </div>
            </div>
          </div>
        }
      />

      <Slide
        title="5. Roles y Permisos"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Matriz de Acceso
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Recurso / Acción
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Admin</th>
                    <th className="border border-gray-300 px-4 py-2">Editor</th>
                    <th className="border border-gray-300 px-4 py-2">User</th>
                    <th className="border border-gray-300 px-4 py-2">Guest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      Ver Contenido Público
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Editar Contenido
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      Crear/Editar Cursos
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Inscribirse en Cursos
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      Acceder Aula Virtual
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Gestionar Usuarios
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      —
                    </td>
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
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Medidas de Protección
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">
                  Protección contra Ataques
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>HTTPS obligatorio en todo el tráfico</li>
                  <li>Tokens CSRF en formularios</li>
                  <li>Sanitización contra XSS</li>
                  <li>Rate limiting en endpoints sensibles</li>
                  <li>WAF y firewall activo</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Políticas de Contraseñas
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Mínimo 12 caracteres (mayúsculas, minúsculas, números,
                    símbolos)
                  </li>
                  <li>Hashing con bcrypt</li>
                  <li>Verificación por email para nuevos registros</li>
                  <li>Bloqueo temporal tras intentos fallidos</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Backups</h3>
                <p>
                  Semanales en producción, retención de 30 días, pruebas de
                  restauración mensuales
                </p>
              </div>
            </div>
          </div>
        }
      />

      <Slide
        title="7. Mantenimiento y Actualización"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Procedimientos de Mantenimiento
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Tareas Periódicas
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Anual:</strong> Actualización de dependencias y
                    parches de seguridad
                  </li>
                  <li>
                    <strong>Mensual:</strong> Verificación y pruebas de backups
                  </li>
                  <li>
                    <strong>Semanal:</strong> Limpieza de logs, verificación de
                    uso de disco y BD
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Checklist para Actualizaciones
                </h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Revisar changelogs de dependencias</li>
                  <li>Probar en entorno de staging</li>
                  <li>Ejecutar migraciones en staging</li>
                  <li>Planificar mantenimiento para producción</li>
                  <li>Ejecutar migraciones y tests posteriores</li>
                </ol>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">
                  Resolución de Problemas
                </h3>
                <p className="text-sm">
                  Revisar logs, verificar conexiones DB, reproducir en staging,
                  identificar queries lentas
                </p>
              </div>
            </div>
          </div>
        }
      />

      <Slide
        title="8. Soporte Técnico"
        content={
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Procedimiento y Contacto
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Pasos para Reportar Problemas
                </h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Verificar si existe un incidente conocido</li>
                  <li>Recolectar información: URL, usuario, timestamp, logs</li>
                  <li>Abrir ticket con prioridad adecuada (Alta/Media/Baja)</li>
                  <li>Etiquetar con severity y component</li>
                  <li>Asignar según rotación de on-call</li>
                </ol>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Contacto</h3>
                  <ul className="space-y-1 text-sm">
                    <li>📧 soporte@[dominio].com</li>
                    <li>💬 Slack: #soporte-app</li>
                    <li>📞 [+591] XXXXXXXX (emergencias)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Horarios
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Estándar:</strong> Lun-Vie 09:00-18:00
                    </li>
                    <li>
                      <strong>Crítico:</strong> 24/7 para producción
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Slide
        title="Resumen del Manual de Sistema"
        content={
          <div>
            <p className="mb-4 text-lg">
              Este manual proporciona toda la información necesaria para la
              instalación, configuración, operación y mantenimiento del sistema
              de e-learning. Cubre desde la arquitectura técnica hasta
              procedimientos de soporte, garantizando la calidad y seguridad del
              servicio.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3 text-xl">
                Elementos Clave
              </h3>
              <ul className="space-y-2">
                <li>
                  ✓ <strong>Arquitectura moderna:</strong> Node.js, React,
                  PostgreSQL, Docker
                </li>
                <li>
                  ✓ <strong>Seguridad robusta:</strong> JWT, HTTPS, políticas de
                  contraseñas, backups
                </li>
                <li>
                  ✓ <strong>Modelo de permisos flexible:</strong> Roles,
                  acciones y categorías
                </li>
                <li>
                  ✓ <strong>Funcionalidades completas:</strong> Aula virtual,
                  certificación, foros, analytics
                </li>
                <li>
                  ✓ <strong>Mantenimiento estructurado:</strong> Tareas
                  periódicas, checklist de actualizaciones
                </li>
                <li>
                  ✓ <strong>Soporte 24/7:</strong> Procedimientos claros para
                  incidencias críticas
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
};
