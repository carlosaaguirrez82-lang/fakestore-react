README.md
FakeStore React – Arquitectura Profesional

Proyecto educativo y práctico para construir una aplicación React profesional, escalable y mantenible usando FakeStoreAPI, aplicando arquitectura hexagonal, First Mobile, y buenas prácticas modernas de frontend.

🎯 Objetivo del proyecto

Demostrar cómo construir una aplicación real:

Desacoplada de la UI

Independiente de librerías específicas

Escalable para equipos y proyectos grandes

Pensada mobile-first desde el día 1

🧱 Stack tecnológico

React + TypeScript

Vite

Material UI (MUI)

Sass

Zustand (estado global)

Redux Toolkit (comparativa y casos avanzados)

React Hook Form + Zod

Axios

📐 Principios clave

First Mobile

Arquitectura Hexagonal

Separación de responsabilidades

Bajo acoplamiento

Alta cohesión

🗂️ Estructura del proyecto
src/
├── app/              # Configuración global y stores
├── domain/           # Lógica de negocio y contratos
├── infrastructure/   # APIs, storage, implementaciones
├── ui/               # UI (pages, components, layouts)
🔐 Funcionalidades (por clases)

Auth y usuarios

Productos

Carrito de compras

Persistencia en LocalStorage

Validaciones avanzadas

UI responsive

⚙️ Variables de entorno
VITE_API_URL=https://fakestoreapi.com

🚀 Instalación
npm install
npm run dev






