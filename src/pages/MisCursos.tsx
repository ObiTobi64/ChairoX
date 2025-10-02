import React from "react";

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

export const MisCursos = () => {
  return (
    <div className="presentation">
      <Slide
        title="CARTA DE ACEPTACIÓN"
        content={
          <div>
            <p>
              <strong>ROMMOS S.R.L.</strong>
            </p>
            <p>Santa Cruz, 02 de octubre de 2025</p>
            <p>
              <strong>
                Estimados señor Juan Carlos Perez Torres C.I. 5480590,
                representante de ROMMOS S.R.L.:
              </strong>
            </p>
            <p>
              Por la presente, ChairuX, representada legalmente por Carlos
              Alexander Cruz Mamani C.I. 12957383 LP, manifiesta su compromiso y
              aceptación formal de ejecutar el proyecto de diseño, desarrollo,
              implementación y mantenimiento del Sitio Web Corporativo y
              Plataforma e-learning para ROMMOS S.R.L., conforme a los Términos
              de Referencia y Plan de Gestión de Riesgos presentados.
            </p>
          </div>
        }
      />

      <Slide
        title="Perfil de ChairuX"
        content={
          <div>
            <p>
              ChairuX es una empresa/desarrolladora especializada en soluciones
              digitales para entidades corporativas. Nuestro enfoque se centra
              en la creación de sitios web y plataformas de e-learning seguras,
              escalables y de fácil administración, asegurando la gestión
              autónoma de contenidos y servicios web. Todo el desarrollo será
              realizado íntegramente por nuestro equipo, garantizando control
              total sobre la calidad, el código fuente y la entrega de
              documentación técnica.
            </p>
          </div>
        }
      />

      <Slide
        title="Objetivos Generales"
        content={
          <div>
            <p>
              El objetivo general del proyecto es desarrollar una plataforma
              e-learning y un sitio web corporativo moderno que fortalezcan la
              identidad digital de ROMMOS S.R.L. y promuevan sus servicios de
              consultoría y capacitación.
            </p>
            <p>
              El sitio web corporativo permitirá mejorar la visibilidad
              institucional, facilitar la interacción con clientes y captar
              nuevos usuarios mediante una experiencia digital clara y
              funcional.
            </p>
          </div>
        }
      />

      <Slide
        title="Objetivos Específicos"
        content={
          <div>
            <ul>
              <li>
                Implementar una plataforma e-learning con al menos 5 cursos
                disponibles en los primeros seis meses, cada uno con sistema de
                registro, evaluación y certificación.
              </li>
              <li>
                Entregar un sitio web corporativo funcional y accesible que
                muestre información institucional (misión, visión, valores), la
                oferta de servicios (CEC, SERLIS, CCC) y noticias/eventos.
              </li>
              <li>
                Implementar un sistema de gestión de contenidos (A base de
                React) que permita al personal de ROMMOS publicar, editar y
                eliminar información de manera autónoma, capacitando al menos a
                dos usuarios internos.
              </li>
              <li>
                Desarrollar e integrar al menos cuatro formularios web:
                contacto, inscripción a cursos, solicitud de cotización y
                descarga de documentos.
              </li>
              <li>
                Proveer un servicio de hosting estable con disponibilidad mínima
                del 99%, certificado SSL activo y copias de seguridad
                automáticas semanales.
              </li>
              <li>
                Capacitar al personal de ROMMOS en la administración del sitio
                web, entregando un manual de usuario y una guía técnica al
                finalizar la implementación.
              </li>
            </ul>
          </div>
        }
      />

      <Slide
        title="Alcance del Proyecto"
        content={
          <div>
            <ul>
              <li>
                Desarrollo de un sitio web corporativo moderno y funcional, con
                secciones institucionales, servicios (CEC, SERLIS, CCC),
                noticias y eventos.
              </li>
              <li>
                Implementación de formularios de contacto, inscripción a cursos
                y solicitud de cotización, con almacenamiento seguro en la base
                de datos.
              </li>
              <li>
                Creación de una API REST para la integración de formularios y
                servicios.
              </li>
              <li>
                Hosting dedicado boliviano, con disponibilidad mínima del 99.9%
                y certificado SSL activo llamado “Neolo”.
              </li>
              <li>
                Capacitación al personal de ROMMOS para la administración y
                gestión de contenidos con la entrega de manuales técnicos,
                documentación completa.
              </li>
            </ul>
          </div>
        }
      />

      <Slide
        title="Funcionalidades Clave"
        content={
          <div>
            <h4>Página de Inicio</h4>
            <ul>
              <li>
                Resumen de la filosofía institucional: visión, misión,
                objetivos, estrategias y valores.
              </li>
              <li>Resumen de servicios ofrecidos.</li>
              <li>
                Llamadas a la acción para contactar o registrarse en cursos.
              </li>
            </ul>

            <h4>Quiénes Somos</h4>
            <ul>
              <li>
                Información sobre la empresa, equipo multidisciplinario y
                cultura de valores.
              </li>
              <li>Presentación de visión, misión, objetivos y estrategias.</li>
              <li>
                Infografías y elementos visuales que refuercen la identidad
                corporativa.
              </li>
            </ul>

            <h4>Catálogo de Cursos y Servicios</h4>
            <ul>
              <li>
                Listado de cursos presenciales, semipresenciales y talleres:
                RRHH, contables, administrativos, marketing, ofimática.
              </li>
              <li>
                Sub-secciones detalladas: CEC (Outsourcing, Reingeniería,
                Contabilidad y Finanzas, Asistencia Tributaria, RRHH, Imagen
                Corporativa y Publicidad), SERLIS (Derecho Civil y Comercial,
                Tributario y Aduanero, Laboral, Inmobiliario, Arbitraje), CCC
                (Cursos presenciales, semipresenciales y talleres).
              </li>
              <li>
                Enlaces en cada subsección: “Le interesa nuestro servicio
                XXXXXXX, contáctenos”.
              </li>
              <li>Registro en línea para cursos y talleres.</li>
            </ul>

            <h4>Registro de Usuarios</h4>
            <p>
              Perfiles personalizados con historial de cursos, inscripciones y
              certificaciones.
            </p>

            <h4>Aula Virtual</h4>
            <p>
              Videos, quizzes, materiales descargables y foros de discusión para
              interacción entre usuarios.
            </p>

            <h4>Certificación Automática</h4>
            <p>
              Emisión de certificados basada en competencias y progreso del
              curso.
            </p>

            <h4>Formulario de Contacto</h4>
            <p>
              Consultas generales, solicitud de cotización o negociación. Datos
              almacenados en base de datos para seguimiento.
            </p>

            <h4>Panel Administrativo</h4>
            <p>
              Gestión de contenidos, usuarios, cursos, inscripciones y
              analíticas web.
            </p>

            <h4>Integración con Mapas y Redes Sociales</h4>
            <p>
              Ubicación de la empresa y enlaces a perfiles de redes sociales.
            </p>

            <h4>Formularios Procesables</h4>
            <p>
              Contacto, inscripción y solicitud de cotización, con
              almacenamiento en base de datos. API REST para integración con
              sistemas externos o CRM (envío y consulta de inscripciones y
              contactos).
            </p>

            <h4>Repositorio de Documentos</h4>
            <p>PDFs descargables y material de referencia para usuarios.</p>
          </div>
        }
      />

      <Slide
        title="Cronograma de Actividades (6 meses)"
        content={
          <div>
            <ul>
              <li>
                <strong>Mes 1:</strong> Plan de trabajo, cronograma detallado,
                recolección de contenidos y definición de arquitectura de
                información. <strong>50% del precio acordado</strong>
              </li>
              <li>
                <strong>Meses 2 a 4:</strong> Diseño de mockups, desarrollo del
                sitio y plataforma e-learning, integración de funcionalidades y
                carga de contenidos. <strong>20% del precio acordado</strong>
              </li>
              <li>
                <strong>Mes 5:</strong> Pruebas, ajustes finales y preparación
                para implementación. <strong>20% del precio acordado</strong>
              </li>
              <li>
                <strong>Mes 6:</strong> Implementación en producción,
                capacitación del personal de ROMMOS y entrega de manuales y
                documentación técnica. <strong>10% del precio acordado</strong>
              </li>
            </ul>
          </div>
        }
      />

      <Slide
        title="Precio, Condiciones y Forma de Pago"
        content={
          <div>
            <p>
              <strong>Precio total:</strong> El precio total del proyecto será
              de USD 45,000 (cuarenta y cinco mil dólares estadounidenses).
            </p>
            <p>
              <strong>Desglose y calendario de pagos:</strong> Las partes
              acuerdan que el pago se realizará conforme al Cronograma de
              Actividades (6 meses) incluido en este documento, con el siguiente
              detalle:
            </p>
            <ul>
              <li>
                Mes 1 (al inicio) — 50%: USD 22,500 (veintidós mil quinientos
                dólares).
              </li>
              <li>
                Meses 2 a 4 (durante desarrollo) — 20%: USD 9,000 (nueve mil
                dólares).
              </li>
              <li>
                Mes 5 (pruebas y ajustes) — 20%: USD 9,000 (nueve mil dólares).
              </li>
              <li>
                Mes 6 (implementación y entrega) — 10%: USD 4,500 (cuatro mil
                quinientos dólares).
              </li>
            </ul>
            <p>
              <strong>Forma de pago:</strong> Los pagos se efectuarán mediante
              transferencia bancaria a la cuenta que ChairuX designe y contra la
              presentación de la factura correspondiente. Salvo acuerdo distinto
              por escrito, cada pago deberá ser cancelado dentro de 3 días
              hábiles tras la presentación de la factura.
            </p>
            <p>
              <strong>Incumplimiento y Mora:</strong> En caso de atraso en los
              pagos, se aplicará una tasa de interés por mora del 1% (uno por
              ciento) mensual sobre el saldo vencido. Dicho interés devengará
              desde la fecha de vencimiento hasta la fecha de pago efectivo, y
              se calculará sobre el monto adeudado pendiente de pago; además,
              ChairuX podrá suspender la prestación de servicios relacionados
              hasta la regularización de los pagos pendientes. La aplicación de
              intereses y la suspensión de servicios no exime al deudor de su
              obligación principal ni de las demás responsabilidades
              contractuales.
            </p>
          </div>
        }
      />

      <Slide
        title="Responsabilidades de ROMMOS S.R.L."
        content={
          <div>
            <p>
              Para garantizar el correcto desarrollo y funcionamiento del
              proyecto, ROMMOS S.R.L. deberá asumir las siguientes
              responsabilidades:
            </p>
            <ul>
              <li>
                <strong>Entrega de contenidos:</strong> Proveer textos,
                imágenes, documentos y cualquier material necesario dentro de
                los plazos establecidos. Retrasos o falta de información pueden
                afectar los tiempos de desarrollo y la funcionalidad final.
              </li>
              <li>
                <strong>Integridad de la información:</strong> ChairuX asegura
                la correcta implementación y almacenamiento durante el
                desarrollo, pero ROMMOS es responsable de la veracidad,
                legalidad y actualización de los contenidos cargados en la
                plataforma.
              </li>
              <li>
                <strong>Seguridad de accesos:</strong> Mantener confidenciales
                los usuarios, contraseñas, formularios y servicios web una vez
                entregados.
              </li>
              <li>
                <strong>Cumplimiento normativo:</strong> Asegurar que los
                cursos, servicios y contenidos publicados cumplan con
                regulaciones locales e internacionales aplicables.
              </li>
              <li>
                <strong>Uso adecuado de la plataforma:</strong> ChairuX no se
                hace responsable de errores, pérdidas de datos o incidencias
                causadas por un uso indebido del sistema, modificaciones no
                autorizadas o integraciones externas realizadas por ROMMOS sin
                nuestra supervisión.
              </li>
            </ul>
          </div>
        }
      />

      <Slide
        title="Compromiso de ChairuX"
        content={
          <div>
            <p>
              Nos comprometemos a entregar un proyecto que cumpla con los
              objetivos planteados, asegurando la seguridad de la información
              durante el desarrollo, la administración autónoma del sitio y la
              calidad profesional que ROMMOS espera. Todo el trabajo será
              gestionado por nuestro equipo, garantizando un control completo
              sobre los tiempos, el contenido y la funcionalidad del sistema.
            </p>
            <p>
              Agradecemos la confianza depositada en ChairuX y reafirmamos
              nuestro compromiso de ejecutar el proyecto conforme a lo acordado.
            </p>
            <p>
              <strong>Por:</strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>
                Juan Carlos Perez Torres
                <br />
                C.I. 5480590
                <br />
                Representante Legal
                <br />
                ROMMOS S.R.L.
              </strong>
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>
                Carlos Alexander Cruz Mamani
                <br />
                C.I. 12957383
                <br />
                Representante Legal
                <br />
                ChairuX – Desarrolladora de Soluciones Digitales
              </strong>
            </p>
          </div>
        }
      />
    </div>
  );
};
