## d. Diagramas de Casos de Uso (requerimientos funcionales)

A continuación, se presentan los requerimientos funcionales del sistema **TwoScore**, organizados por módulos.

---

### 🔹 Módulo 1: Gestión de Usuarios y Perfiles

| ID     | Nombre                       | Actor   | Descripción                                                                 | Precondiciones     | Resultado Esperado                                                                 |
|--------|------------------------------|---------|------------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------|
| RF_01 | Registro de usuario          | Usuario | Permite al usuario crear una cuenta mediante un formulario con datos personales. | No estar registrado | El usuario queda registrado correctamente y puede iniciar sesión.                 |
| RF_02 | Autenticación de usuario     | Usuario | Permite al usuario iniciar sesión con su correo/nickname y contraseña.         | Estar registrado    | El sistema autentica al usuario y lo redirige a su perfil.                        |
| RF_03 | Visualización del perfil     | Usuario | Muestra los datos personales del usuario y sus estadísticas musicales.         | Usuario autenticado | Se visualiza la información completa del perfil, álbumes y artistas.              |
| RF_04 | Navegación a artistas y álbumes| Usuario | Permite acceder desde el perfil a las secciones de artistas y álbumes disponibles. | Usuario autenticado | El sistema redirige correctamente a cada vista respectiva.                        |

---

### 🔹 Módulo 2: Exploración de Contenido

| ID     | Nombre                           | Actor   | Descripción                                                                                     | Precondiciones     | Resultado Esperado                                                                            |
|--------|----------------------------------|---------|--------------------------------------------------------------------------------------------------|---------------------|----------------------------------------------------------------------------------------------|
| RF_05 | Acceso a homepage                | Usuario | Muestra una pantalla con íconos de navegación a los módulos principales.                        | Usuario autenticado | El usuario puede visualizar e interactuar con los 4 accesos principales.                     |
| RF_06 | Búsqueda de música               | Usuario | Permite buscar álbumes y artistas mediante texto, filtros de género y ordenamiento.             | Usuario autenticado | Se muestran los resultados filtrados según la consulta.                                      |
| RF_07 | Visualización de detalle de álbum| Usuario | Al seleccionar un álbum, se despliega su información completa y opción de añadirlo.             | Álbum listado       | Se muestra correctamente la vista detallada del álbum.                                       |
| RF_08 | Búsqueda de perfiles             | Usuario | Permite buscar otros perfiles de usuario.                                                       | Usuario autenticado | Se listan los perfiles encontrados y se puede acceder a su vista.                            |
| RF_09 | Visualización de perfil ajeno    | Usuario | Muestra el perfil de otro usuario con la misma estructura que el propio.                        | Usuario autenticado | El sistema carga correctamente el perfil del usuario buscado.                                |

---

### 🔹 Módulo 3: Gestión de Valoración de Álbumes

| ID     | Nombre                   | Actor   | Descripción                                                                           | Precondiciones             | Resultado Esperado                                                           |
|--------|--------------------------|---------|----------------------------------------------------------------------------------------|-----------------------------|-------------------------------------------------------------------------------|
| RF_10 | Valoración de álbumes    | Usuario | Permite asignar una puntuación individual a cada track de un álbum.                   | Álbum en biblioteca personal | El sistema almacena la puntuación de cada track correctamente.              |
| RF_11 | Finalización de valoración| Usuario | Marca el álbum como valorado cuando todos los tracks han sido evaluados.             | Todos los tracks evaluados   | El estado cambia a “valorado” y se guarda la fecha de escucha.              |
| RF_12 | Revaloración de álbumes  | Usuario | Permite modificar la puntuación de tracks de álbumes ya valorados.                   | Álbum previamente valorado   | Se actualiza la puntuación de los tracks sin cambiar la fecha de escucha.   |

---

### 🔹 Módulo 4: Gestión de Recomendaciones

| ID     | Nombre                        | Actor   | Descripción                                                                 | Precondiciones              | Resultado Esperado                                                           |
|--------|-------------------------------|---------|------------------------------------------------------------------------------|------------------------------|-------------------------------------------------------------------------------|
| RF_13 | Generación de recomendaciones | Sistema | Analiza hábitos musicales del usuario para mostrar sugerencias personalizadas. | Usuario con historial        | Se muestra un resumen con artista recomendado y 3 álbumes similares.         |
| RF_14 | Visualización de recomendaciones | Usuario | Permite acceder a un resumen con recomendaciones desde la homepage.           | Usuario autenticado          | Se visualizan sugerencias personalizadas en la sección correspondiente.      |

## 🎲 Diagramas de Casos de Uso
El diagrama de casos de uso del sistema **OneScore** representa de forma visual las principales interacciones entre los **actores** (Usuario y Sistema) y las **funcionalidades clave** del sistema, organizadas en los siguientes módulos:

### 🔹 Gestión de Usuarios y Perfiles
Incluye funcionalidades como:
- Registro de usuario.
- Autenticación de usuario.
- Visualización del perfil.
- Navegación hacia artistas y álbumes.

### 🔹 Exploración de Contenido
Permite al usuario:
- Acceder a la pantalla principal (homepage).
- Buscar álbumes y artistas mediante texto y filtros.
- Visualizar información detallada de un álbum.
- Buscar y explorar perfiles de otros usuarios.

### 🔹 Gestión de Valoración de Álbumes
Proporciona herramientas para:
- Asignar una puntuación a cada track de un álbum.
- Finalizar la valoración cuando todos los tracks estén evaluados.
- Modificar valoraciones previas.

### 🔹 Gestión de Recomendaciones
Incorpora funcionalidades automáticas para:
- Generar recomendaciones musicales a partir del historial del usuario.
- Visualizar sugerencias personalizadas desde la homepage.

Cada **caso de uso** se representa con una elipse, mientras que los **actores** se muestran con figuras tipo "stick figure". Las líneas indican las interacciones entre los actores y las funcionalidades.

Este diagrama es fundamental para comprender los requerimientos funcionales del sistema y guía el diseño posterior de su arquitectura e implementación.

![Diagrama de Casos de Uso — OneScore](../imgs/diagrama_caso_uso.png)