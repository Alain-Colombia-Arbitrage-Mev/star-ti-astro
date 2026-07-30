**LISTADO EJECUTIVO DE DESARROLLO**

# **Pendientes prioritarios de la plataforma Ancestro**

**Objetivo:** consolidar los desarrollos pendientes que deben completarse para estabilizar el registro de EPCs, habilitar la generación de propuestas residenciales, activar el flujo de inversión y dejar las nuevas interfaces listas para operación internacional.

| TOTAL DE FRENTES 4 | PRIORIDAD Alta | ESTADO GENERAL Pendiente de cierre |
| :---: | :---: | :---: |

# **1\. Frentes pendientes**

| 01 | Onboarding y registro de EPCs Completar y estabilizar el flujo de onboarding para nuevos EPCs. Implementar correctamente la verificación de dos pasos durante el registro. Corregir el envío y la recepción de correos de validación, ya que la integración con Gmail continúa presentando fallas. Asegurar que el EPC pueda finalizar el registro, validar su cuenta e ingresar a su perfil sin bloqueos. Criterio de cierre: El flujo se considera terminado cuando un EPC puede registrarse, recibir el correo de validación, completar la verificación de dos pasos e ingresar a su cuenta sin intervención manual. |
| :---: | :---- |
| **02** | **Calculadora residencial para EPCs** Crear un perfil específico para el usuario EPC dentro de la plataforma. Permitir que el EPC cargue o diligencie la información requerida por la calculadora. Integrar la lógica y los datos de cálculo que ya fueron enviados al equipo. En esta primera fase, la calculadora debe estar enfocada exclusivamente en proyectos residenciales. El resultado debe permitir generar una propuesta preliminar con los datos técnicos y comerciales definidos para el producto solar residencial. **Criterio de cierre:** El flujo se considera terminado cuando un EPC puede entrar a su perfil, registrar los datos de un proyecto residencial, ejecutar la calculadora y obtener una propuesta coherente con las reglas comerciales aprobadas. |
| **03** | **Página activa de inversión \- Invest** Finalizar y publicar la landing o página activa de Invest. Dejar operativo el acceso para inversionistas y el recorrido principal de la experiencia de inversión. Validar que los formularios, botones, enlaces y llamados a la acción funcionen correctamente. Asegurar que la página esté conectada con los flujos de registro o captación definidos para inversionistas. **Criterio de cierre:** El frente se considera terminado cuando la página Invest está publicada, accesible desde producción y todos sus enlaces y formularios han sido probados de extremo a extremo. |
| **04** | **Versión completa en inglés** Traducir al inglés todas las páginas y módulos nuevos relacionados con estos desarrollos. Evitar textos parciales en español dentro de la experiencia en inglés. Revisar botones, formularios, validaciones, correos automáticos, mensajes de error, disclaimers y contenido comercial. Mantener consistencia terminológica entre la plataforma, la calculadora, el onboarding de EPCs y la página Invest. **Criterio de cierre:** El frente se considera terminado cuando el usuario puede recorrer el 100% de las páginas nuevas en inglés, sin textos residuales en español y con una experiencia funcional equivalente a la versión original. |

# **2\. Orden recomendado de ejecución**

El orden sugerido busca desbloquear primero los flujos base de acceso y luego habilitar los módulos comerciales y de expansión internacional.

| Orden | Frente | Razón | Prioridad |
| :---: | ----- | ----- | :---: |
| 1 | Onboarding, verificación de dos pasos y Gmail | Bloquea el registro y acceso de EPCs. | **Crítica** |
| 2 | Perfil EPC y calculadora residencial | Habilita la creación de propuestas desde la red EPC. | **Alta** |
| 3 | Página Invest en producción | Habilita la captación y experiencia de inversionistas. | **Alta** |
| 4 | Localización completa al inglés | Permite operar y presentar la plataforma internacionalmente. | **Alta** |

# **3\. Referencia funcional**

Para el desarrollo de la calculadora residencial, el equipo debe utilizar como referencia el documento previamente enviado: **Solar Lease / PPA Proposal Generator**, que contiene los datos de entrada, reglas de precios, escaladores, límites de ahorro y estructura de salida de la propuesta.

**Resultado esperado general:** un flujo estable en el que el EPC se registra y valida su cuenta, crea una propuesta residencial desde su perfil, y la plataforma dispone de una página Invest funcional y de una experiencia completa en inglés.