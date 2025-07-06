# IntegraServicios - Frontend

Aplicación web desarrollada en **React** con **Material UI (MUI)** para la gestión de recursos físicos universitarios como salones, auditorios, laboratorios y canchas. Esta interfaz permite a usuarios, empleados y administradores interactuar de forma eficiente con el sistema IntegraServicios.

## 🧩 Descripción del Proyecto

IntegraServicios es una solución diseñada para mejorar la administración de recursos físicos en entornos universitarios, resolviendo problemáticas como:

- Falta de un sistema centralizado de reservas.
- Duplicación de solicitudes.
- Baja eficiencia en la gestión de espacios.

Este frontend forma parte del ecosistema del sistema, proporcionando una interfaz moderna e intuitiva para todas las operaciones de usuarios según su rol (administrador, empleado, estudiante, etc.).

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Material UI (MUI)](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Day.js](https://day.js.org/) (gestión de fechas)
- [Vite](https://vitejs.dev/) (build tool)

## 🚀 Funcionalidades Clave

- Inicio de sesión con roles definidos.
- Consulta y filtrado de recursos por tipo, nombre y disponibilidad.
- Gestión de reservas, préstamos y devoluciones.
- Visualización de recursos más reservados y más prestados.
- Calificación del servicio por parte de los usuarios.
- Carga inicial de datos del sistema (admin).

## 📦 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables (tablas, formularios, menús)
├── pages/            # Vistas por módulo (Login, Reservas, Recursos, etc.)
├── services/         # Módulo de comunicación con backend (axios)
├── utils/            # Funciones utilitarias
├── App.jsx           # Enrutamiento principal
├── main.jsx          # Entry point
```

## 🧪 Scripts de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🔐 Autenticación

Este proyecto espera que el backend proporcione JWT o sesiones gestionadas por API. Las rutas están protegidas por tipo de usuario según el rol asignado al iniciar sesión.

## 📂 Estado del Backend

Este repositorio es únicamente el frontend. El backend es una API REST que debe estar corriendo en paralelo para las funcionalidades dinámicas.

## 📃 Licencia

Este proyecto fue desarrollado como parte del proyecto académico de Ingeniería de Sistemas - Universidad Distrital Francisco José de Caldas.
