## c. Requerimientos no Funcionales

Los siguientes requisitos no funcionales definen características de calidad del aplicativo móvil **OneScore**, organizados por módulo y redactados de acuerdo con estándares de documentación IEEE adaptados a la escala del proyecto.

Cada requisito cuenta con un identificador, nombre, categoría, prioridad y una breve descripción.

---

## RNF Generales del Sistema

| ID     | Nombre                         | Categoría     | Prioridad | Descripción |
|--------|--------------------------------|----------------|-----------|-------------|
| RNF_01 | Tiempo de carga inicial        | Rendimiento    | Alta      | La aplicación debe mostrar la pantalla de inicio en menos de 3 segundos tras abrirla. |
| RNF_02 | Diseño adaptativo              | Usabilidad     | Media     | La interfaz debe adaptarse correctamente a dispositivos móviles Android de diferentes tamaños. |
| RNF_03 | Disponibilidad mínima          | Disponibilidad | Alta      | La aplicación debe estar disponible al menos el 95% del tiempo mensual. |
| RNF_04 | Almacenamiento local básico    | Portabilidad   | Baja      | Debe poder almacenar temporalmente datos en caché para mejorar experiencia de usuario sin conexión. |
| RNF_05 | Seguridad básica de datos      | Seguridad      | Alta      | Los datos personales deben estar protegidos y no ser visibles por otros usuarios. |
| RNF_06 | Modularidad del código         | Mantenibilidad | Media     | El código del proyecto debe estar organizado por módulos funcionales para facilitar futuras mejoras. |

---

## Módulo 1: Gestión de Usuarios y Perfiles

| ID     | Nombre                         | Categoría     | Prioridad | Descripción |
|--------|--------------------------------|----------------|-----------|-------------|
| RNF_07 | Hash de contraseñas            | Seguridad      | Alta      | Las contraseñas de los usuarios deben ser almacenadas usando funciones de hash seguras (como bcrypt). |
| RNF_08 | Carga rápida del perfil        | Rendimiento    | Alta      | El perfil del usuario debe cargarse en menos de 5 segundos. |
| RNF_09 | Legibilidad en interfaz        | Usabilidad     | Media     | El diseño del perfil debe tener buen contraste y tipografía legible para todas las edades. |

---

## Módulo 2: Exploración de Contenido

| ID     | Nombre                         | Categoría     | Prioridad | Descripción |
|--------|--------------------------------|----------------|-----------|-------------|
| RNF_10 | Respuesta de búsqueda          | Rendimiento    | Alta      | Los resultados de búsqueda deben aparecer en menos de 5 segundos. |
| RNF_11 | Filtros accesibles             | Usabilidad     | Media     | Los filtros de género y orden deben ser fácilmente accesibles e intuitivos. |
| RNF_12 | Navegación fluida              | Usabilidad     | Media     | El usuario debe poder regresar entre vistas sin pérdida de datos o recargas innecesarias. |

---

## Módulo 3: Valoración de Álbumes

| ID     | Nombre                         | Categoría     | Prioridad | Descripción |
|--------|--------------------------------|----------------|-----------|-------------|
| RNF_13 | Validación de entradas         | Seguridad      | Alta      | Las puntuaciones deben ser validadas antes de enviarse para evitar errores o valores no válidos. |
| RNF_14 | Almacenamiento consistente     | Confiabilidad  | Alta      | Una vez valorado un álbum, los datos deben almacenarse correctamente y reflejarse en el historial. |

---

## Módulo 4: Recomendaciones

| ID     | Nombre                         | Categoría     | Prioridad | Descripción |
|--------|--------------------------------|----------------|-----------|-------------|
| RNF_15 | Tiempo de generación de recomendaciones | Rendimiento | Media | El sistema debe mostrar recomendaciones en menos de 10 segundos tras ingresar al apartado. |
| RNF_16 | Privacidad del historial       | Seguridad      | Alta      | El historial de valoraciones usado para recomendar contenido no debe ser visible para otros usuarios. |
| RNF_17 | Mensajes claros                | Usabilidad     | Baja      | Si no hay suficientes datos para recomendar, el sistema debe mostrar un mensaje claro y entendible. |

---