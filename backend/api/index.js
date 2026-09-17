const express = require('express');
const cors = require('cors');
const swaggerSpec = require('../src/swaggerConfig');
const { customCss } = require('../src/swaggerStyle');

const app = express();

// Configuración Middleware Global
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML Standalone para Swagger UI (100% compatible con Vercel Serverless)
// Carga bundles JS/CSS directamente desde CDN para evitar SyntaxError '<' en Vercel
const swaggerHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MusicPro API Suite & Developer Portal</title>
  <link rel="icon" type="image/svg+xml" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/svgs/solid/music.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css">
  <style>
    ${customCss}
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js"></script>
  <script>
    window.onload = function() {
      const spec = ${JSON.stringify(swaggerSpec).replace(/</g, '\\u003c')};
      window.ui = SwaggerUIBundle({
        spec: spec,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        docExpansion: 'list',
        filter: true,
        displayRequestDuration: true
      });
    };
  </script>
</body>
</html>`;

// Redirecciones seguras para evitar que cualquier petición a assets de Swagger UI reciba HTML
app.get([
  '/docs/swagger-ui-bundle.js',
  '/swagger/swagger-ui-bundle.js',
  '/swagger-ui-bundle.js'
], (req, res) => {
  res.redirect('https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js');
});

app.get([
  '/docs/swagger-ui-standalone-preset.js',
  '/swagger/swagger-ui-standalone-preset.js',
  '/swagger-ui-standalone-preset.js'
], (req, res) => {
  res.redirect('https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js');
});

app.get([
  '/docs/swagger-ui.css',
  '/swagger/swagger-ui.css',
  '/swagger-ui.css'
], (req, res) => {
  res.redirect('https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css');
});

// Documentación Swagger UI en /docs y /swagger
app.get(['/docs', '/docs/', '/swagger', '/swagger/'], (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(swaggerHtml);
});

// Endpoint spec en formato JSON para Postman o Swagger Editor
app.get('/docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(swaggerSpec);
});

// Importar Rutas por Módulos
const tarjetaRoutes = require('../src/routes/tarjeta.routes');
const bodegaRoutes = require('../src/routes/bodega.routes');
const tiendaRoutes = require('../src/routes/tienda.routes');
const transporteRoutes = require('../src/routes/transporte.routes');
const usuariosRoutes = require('../src/routes/usuarios.routes');

// Registrar Enrutadores con los Prefijos de API requeridos
app.use('/backend/tarjeta/api/v1', tarjetaRoutes);
app.use('/backend/bodega/api/v1', bodegaRoutes);
app.use('/backend/tienda/api/v1', tiendaRoutes);
app.use('/backend/transporte/api/v1', transporteRoutes);
app.use('/backend/usuarios/api/v1', usuariosRoutes);

// Ruta raíz informativa
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'MusicPro Enterprise Suite - Backend API REST & Integraciones',
    documentation: '/docs',
    swagger_spec_json: '/docs-json',
    endpoints: {
      usuarios: '/backend/usuarios/api/v1/usuarios',
      tarjeta: '/backend/tarjeta/api/v1/cuentas',
      bodega: '/backend/bodega/api/v1/articulos',
      tienda: '/backend/tienda/api/v1/productos',
      transporte: '/backend/transporte/api/v1/rutas'
    }
  });
});

module.exports = app;
