# MusicPro Enterprise Suite - Backend API & Swagger UI Service

Proyecto independiente de **Backend API REST & Servicio de Integraciones B2B** para la suite corporativa **MusicPro Company** (**Tarjeta BeatPay**, **Bodega WMS**, **Tienda E-Commerce** y **Transporte Courier**).

Este proyecto permite:
1. **Ejecutar un servidor backend en local** (`http://localhost:3000`) para realizar pruebas desde **Postman** y **Swagger UI**.
2. **Desplegar en Vercel** con 1 clic desde GitHub para obtener un endpoint HTTPS público (`https://musicpro-backend.vercel.app`).
3. **Proteger rutas de integración** usando **Bearer Tokens M2M** (`Authorization: Bearer <TOKEN>`).

---

## 🚀 1. Guía de Inicio Rápido (Desarrollo Local)

### Requisitos Previos
- **Node.js** v18 o superior instalado.

### Pasos para Ejecutar
1. Abre una terminal y navega hasta la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
4. Verás en la consola la confirmación de inicio:
   ```text
   🚀 Servidor MusicPro Backend corriendo en el puerto 3000
   📑 Consola Swagger UI:  http://localhost:3000/docs
   📄 JSON OpenAPI Spec:   http://localhost:3000/docs-json
   ```|

---

## 🔐 2. Tokens de Integración (Bearer Tokens)

Para realizar peticiones desde **Postman** o probar los endpoints desde la consola de **Swagger UI**, debes incluir la cabecera HTTP de autorización correspondiente al módulo:

| Módulo | Prefijo URL API | Header HTTP de Autorización |
| :--- | :--- | :--- |
| **💳 Tarjeta BeatPay** | `/backend/tarjeta/api/v1` | `Authorization: Bearer mp_integration_tarjeta_sec_2026` |
| **📦 Bodega WMS** | `/backend/bodega/api/v1` | `Authorization: Bearer mp_integration_bodega_sec_2026` |
| **🛒 Tienda E-Commerce** | `/backend/tienda/api/v1` | `Authorization: Bearer mp_integration_tienda_sec_2026` |
| **🚚 Transporte Logística** | `/backend/transporte/api/v1` | `Authorization: Bearer mp_integration_transporte_sec_2026` |
| **👥 Usuarios Sistema** | `/backend/usuarios/api/v1` | `Authorization: Bearer mp_integration_usuarios_sec_2026` |

---

## 📑 3. Uso de Swagger UI (Candado Verde 🔓)

1. Abre en tu navegador `http://localhost:3000/docs`.
2. En la esquina superior derecha, haz clic en el botón **`Authorize 🔓`**.
3. Pega uno de los Tokens de Integración (ejemplo: `mp_integration_tarjeta_sec_2026`) y presiona **Authorize**.
4. Ahora podrás hacer clic en **"Try it out"** ➔ **"Execute"** en cualquier endpoint y recibirás respuestas `200 OK` o `201 Created` en tiempo real.

---

## 📬 4. Pruebas con Postman

### Configuración en Postman:
1. Abre Postman y crea una nueva petición (ej. `POST`).
2. Ingresa la URL del endpoint (ej. `http://localhost:3000/backend/tarjeta/api/v1/cuentas`).
3. Ve a la pestaña **Authorization**:
   - **Type**: `Bearer Token`
   - **Token**: `mp_integration_tarjeta_sec_2026`
4. En la pestaña **Body** (si es un `POST` o `PUT`), selecciona `raw` -> `JSON`:
   ```json
   {
     "rut": "18.234.567-8",
     "nombre": "Camila Soto Morales",
     "cupo_solicitado": 2500000
   }
   ```
5. Haz clic en **Send**.

### Importar Colección Automática en Postman:
En Postman, haz clic en **Import** ➔ **Link** y pega: `http://localhost:3000/docs-json`. Postman importará automáticamente todos los endpoints y esquemas JSON.

---

## ☁️ 5. Guía Detallada para el Despliegue en Vercel

El backend incluye la configuración oficial `vercel.json` lista para Serverless Functions de Node.js Express. Puedes desplegarlo de dos formas:

---

### 📦 Opción A: Despliegue desde GitHub (Recomendado)

1. **Subir los cambios a GitHub:**
   Asegúrate de haber subido todo el código al repositorio remoto:
   ```bash
   git add .
   git commit -m "feat: backend API REST y usuarios con paginacion"
   git push origin main
   ```

2. **Crear el Proyecto en Vercel:**
   - Ve a [https://vercel.com/dashboard](https://vercel.com/dashboard) e inicia sesión.
   - Haz clic en el botón **"Add New..."** ➔ **"Project"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `musicpro`.

3. **Configurar el Root Directory (IMPORTANTE):**
   - En la sección **Build and Output Settings**, busca el campo **Root Directory**.
   - Si el backend está en una subcarpeta llamada `backend`, ingresa `backend` como Root Directory.
   - Si el repositorio contiene únicamente el código del backend, déjalo en `./`.
   - **Framework Preset:** Selecciona `Other` (Vercel detectará automáticamente `vercel.json` y `@vercel/node`).

4. **Desplegar:**
   - Haz clic en **"Deploy"**.
   - En aproximadamente 10 a 20 segundos, Vercel compilará la función Serverless en `/api/index.js` y te entregará una URL HTTPS pública (ej. `https://musicpro-backend.vercel.app`).

5. **Probar el Despliegue en Producción:**
   - Abre en tu navegador: `https://tu-proyecto.vercel.app/docs` para ver la consola interactiva **Swagger UI**.
   - Haz peticiones a la API: `https://tu-proyecto.vercel.app/backend/usuarios/api/v1/usuarios` pasando el header `Authorization: Bearer mp_integration_usuarios_sec_2026`.

---

### 💻 Opción B: Despliegue Directo usando Vercel CLI

Si prefieres desplegar directamente desde la terminal sin pasar por GitHub:

1. **Instalar Vercel CLI (globalmente):**
   ```bash
   npm install -g vercel
   ```

2. **Iniciar sesión en Vercel:**
   ```bash
   vercel login
   ```

3. **Navegar a la carpeta backend y ejecutar `vercel`:**
   ```bash
   cd backend
   vercel
   ```

4. **Responder a los Prompts interactivos:**
   - `Set up and deploy "~/musicpro/backend"?` ➔ `Y`
   - `Which scope do you want to deploy to?` ➔ (Selecciona tu cuenta personal)
   - `Link to existing project?` ➔ `N`
   - `What's your project's name?` ➔ `musicpro-backend-api`
   - `In which directory is your code located?` ➔ `./`
   - `Want to modify these settings?` ➔ `N`

5. **Para desplegar a producción final (sin sufijo preview):**
   ```bash
   vercel --prod
   ```

---

## 🛣️ 6. Resumen de Endpoints Disponibles

### 💳 Tarjeta BeatPay
- `GET` `/backend/tarjeta/api/v1/cuentas`
- `POST` `/backend/tarjeta/api/v1/cuentas`
- `POST` `/backend/tarjeta/api/v1/transacciones`
- `GET` `/backend/tarjeta/api/v1/beneficios`

### 📦 Bodega WMS
- `GET` `/backend/bodega/api/v1/articulos`
- `POST` `/backend/bodega/api/v1/movimientos`
- `GET` `/backend/bodega/api/v1/ubicaciones`

### 🛒 Tienda E-Commerce
- `GET` `/backend/tienda/api/v1/productos`
- `POST` `/backend/tienda/api/v1/ordenes`
- `POST` `/backend/tienda/api/v1/cupones`

### 🚚 Transporte Courier
- `GET` `/backend/transporte/api/v1/rutas`
- `POST` `/backend/transporte/api/v1/envios`

### 👥 Usuarios del Sistema
- `GET` `/backend/usuarios/api/v1/usuarios` (Paginación: `page`, `limit` | Filtros: `search`, `rol`, `estado`)
- `GET` `/backend/usuarios/api/v1/usuarios/:id` (Show / Detalle)
- `POST` `/backend/usuarios/api/v1/usuarios` (Create / Registro)
- `PUT` `/backend/usuarios/api/v1/usuarios/:id` (Update / Edición)
- `DELETE` `/backend/usuarios/api/v1/usuarios/:id` (Delete / Baja)
