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

export const Entrevistas = () => {
  return (
    <div className="presentation">
      <Slide
        title="Entrevista y Pruebas de Aceptación del Usuario"
        content={
          <div>
            <p>
              Las siguientes preguntas están diseñadas para validar que la
              plataforma web de e-learning, asesorías y consultorías cumple con
              los requisitos establecidos en términos de visibilidad,
              administración de contenidos, gestión de cursos y comunicación con
              clientes. Estas se aplicarán durante las pruebas de aceptación del
              usuario (UAT) en un entorno de pre-producción para garantizar la
              calidad antes del despliegue final.
            </p>
          </div>
        }
      />

      <Slide
        title="1. ¿La plataforma cumple con los objetivos de visibilidad establecidos?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="2. ¿Es posible administrar los contenidos de manera sencilla con pocos pasos en la plataforma?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="3. ¿Los cursos se presentan y gestionan correctamente según los requisitos?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="4. ¿El entorno de pre-producción refleja adecuadamente las condiciones del sistema final?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="5. ¿Se han identificado errores o problemas durante las pruebas de aceptación?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="6. ¿La plataforma está lista para su despliegue definitivo tras las pruebas?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="7. ¿El panel de administración permite editar o eliminar un curso sin afectar otros contenidos?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="8. ¿El sistema genera reportes automáticos sobre el progreso de los usuarios en los cursos en un formato descargable?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="9. ¿Los elementos visuales (botones, menús, enlaces) de la plataforma son consistentes en tamaño, color y ubicación en todas las páginas?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="10. ¿La plataforma es compatible con los navegadores más comunes (Chrome, Firefox, Safari) sin errores de visualización?"
        content={
          <div>
            <p></p>
          </div>
        }
      />

      <Slide
        title="Cómo se va a usar esta información"
        content={
          <div>
            La encuesta de validación y aceptación del usuario busca recolectar
            datos específicos sobre la funcionalidad, usabilidad y rendimiento
            de la plataforma web de e-learning, asesorías y consultorías,
            evaluando aspectos como la gestión de contenidos, accesibilidad de
            cursos, comunicación con clientes y estabilidad del sistema en un
            entorno de pre-producción. Esta información permitirá identificar
            problemas técnicos, errores de diseño o deficiencias en la
            experiencia del usuario antes del despliegue final. Los resultados
            se utilizarán para tomar decisiones informadas sobre ajustes,
            mejoras o correcciones necesarias, asegurando que la plataforma
            cumpla con los requisitos establecidos, optimice la satisfacción del
            usuario y garantice un lanzamiento exitoso.
          </div>
        }
      />
    </div>
  );
};
