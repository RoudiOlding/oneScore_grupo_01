## b. Diagrama de Despligue
El siguiente diagrama de despliegue representa la arquitectura física y lógica del sistema, considerando que todo el desarrollo y ejecución se realiza de manera local en los dispositivos de los desarrolladores. Esta arquitectura busca facilitar la comunicación entre los distintos módulos de la aplicación, optimizando el proceso de pruebas y desarrollo.

### Componentes principales

- **Dispositivo Móvil del Usuario**
  - Ejecuta la aplicación móvil desarrollada en Flutter, instalada como un artefacto (.apk).
  - Gestiona la presentación de la interfaz de usuario y realiza solicitudes hacia el backend utilizando una API REST.
  - La comunicación con el servidor se realiza localmente, utilizando el protocolo HTTP o HTTPS según configuración.

- **PC de Desarrollo (Servidor Local)**
  - Ejecuta el servidor backend desarrollado en Ruby.
  - Expone una API RESTful que procesa las solicitudes provenientes del cliente móvil.
  - Administra la lógica de negocio, incluyendo operaciones relacionadas a usuarios, autenticación y datos de la aplicación.
   Contiene un despliegue local del sistema gestor de base de datos PostgreSQL, utilizado exclusivamente por el backend.

- **Base de Datos (PostgreSQL)**
  - Ejecuta el servidor backend desarrollado en Ruby.
  - Expone una API RESTful que procesa las solicitudes provenientes del cliente móvil.
  - Administra la lógica de negocio, incluyendo operaciones relacionadas a usuarios, autenticación y datos de la aplicación.
  - Contiene un despliegue local del sistema gestor de base de datos PostgreSQL, utilizado exclusivamente por el backend.

### Relación con Requisitos No Funcionales

Este despliegue está diseñado para cumplir con los siguientes criterios no funcionales establecidos:

- **Rendimiento:** separación entre cliente y servidor para reducir la carga del dispositivo del usuario.
- **Escalabilidad:** arquitectura desacoplada que permite crecimiento futuro (e.g. balanceo de carga, despliegue en contenedores).
- **Seguridad:** uso de comunicación cifrada (HTTPS) y control de acceso desde el backend.
- **Portabilidad:** uso de Flutter como tecnología de desarrollo móvil multiplataforma.
- **Mantenibilidad:** separación clara de responsabilidades entre frontend, backend y almacenamiento, facilitando el mantenimiento y futuras extensiones.

### Diagrama

![Diagrama de despliegue](../imgs/diagrama_despliegue.png)  
Diagrama de despliegue