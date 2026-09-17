const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../src/swaggerConfig');
const { swaggerUiOptions } = require('../src/swaggerStyle');

const app = express();

// Configuración Middleware Global
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentación Swagger UI en /docs y /swagger con Tema Personalizado MusicPro
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// Endpoint spec en formato JSON
app.get('/docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
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

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'MusicPro Enterprise Suite - Backend API REST & Integraciones',
    documentation: '/docs',
    swagger_spec_json: '/docs-json',
    endpoints: {
      tarjeta: '/backend/tarjeta/api/v1/cuentas',
      bodega: '/backend/bodega/api/v1/articulos',
      tienda: '/backend/tienda/api/v1/productos',
      transporte: '/backend/transporte/api/v1/rutas',
      usuarios: '/backend/usuarios/api/v1/usuarios'
    }
  });
});

module.exports = app;
