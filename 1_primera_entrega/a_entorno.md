# a. Breve explicación del entorno de desarrollo
### Herramientas requeridas
<ol>
    <li>Flutter</li>
    <li>Visual Studio Code </li>
    <li>Android Studio + Emulador</li>
</ol>

## Instalacion
### **Flutter**

1. **Descargar Flutter SDK**  
   - Ve a [Flutter SDK Releases](https://docs.flutter.dev/get-started/install) y descarga la versión para tu sistema operativo y para el tipo de aplicacion que quieres crear.
        ![Descargar flutter](../imgs/descargar_flutter.png)
   - Extrae el archivo ZIP en una ubicación segura donde vas a instalarlo, por ejemplo:  
     ```bash
     C:\Users\{username}\flutter_install
     ```
        ![Extraer Flutter](../imgs/extract_flutter.png)

2. **Agregar Flutter al PATH**
   - Entre a la configuracion del sistema usando las teclas **Windows** y **Pause** (o, alternativamente, **Windows** + **Fn** + **B**)
   - Haga click en **"Configuracion avanzada del sistema"**
        ![Configuraciones avanzadas del sistema](../imgs/configuracion_avanzada.png)
        
   - Haga click en el boton **"Variables de entorno"¨**

        ![Configuracion de Variables](../imgs/variables_entorno.png)
   - Haga doble click en **"Path"** y añade la ruta a la carpeta `bin` de Flutter, por ejemplo:  
     ```bash
     C:\Users\{username}\flutter_install\flutter\bin
     ```
        ![Añadir Path](../imgs/path.png)

