const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MusicPro Enterprise Suite - API REST & Integraciones B2B',
    version: '1.0.0',
    description: `
Consola Interactiva de API e Integraciones B2B / M2M para **MusicPro Company**.
Soporta los 4 subsistemas de la suite corporativa:

1. **💳 Tarjeta BeatPay**: Emisión de crédito, transacciones y beneficios.
2. **📦 Bodega WMS**: Maestro de artículos, movimientos y racks de almacén.
3. **🛒 Tienda E-Commerce**: Catálogo comercial, ventas POS y cupones.
4. **🚚 Transporte Logística**: Rutas de despacho y tracking courier.
5. **👥 Usuarios Sistema**: Gestión centralizada de usuarios, roles, estados y filtros.

### 🔒 Autenticación de Integraciones (Bearer Token)
Para probar los endpoints en esta consola o desde Postman, presiona el botón **Authorize 🔓** arriba a la derecha e ingresa uno de los siguientes Tokens de Integración:

- **Tarjeta BeatPay**: \`mp_integration_tarjeta_sec_2026\`
- **Bodega WMS**: \`mp_integration_bodega_sec_2026\`
- **Tienda E-Commerce**: \`mp_integration_tienda_sec_2026\`
- **Transporte Logística**: \`mp_integration_transporte_sec_2026\`
- **Usuarios Sistema**: \`mp_integration_usuarios_sec_2026\`
    `,
    contact: {
      name: 'MusicPro Engineering & API Support',
      email: 'api-support@musicpro.cl'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor Local de Desarrollo (Postman & Localhost)'
    },
    {
      url: 'https://musicpro-backend.vercel.app',
      description: 'Servidor Producción / Vercel Cloud API'
    }
  ],
  components: {
    securitySchemes: {
      IntegrationBearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'API-Key',
        description: 'Ingresa el Token de Integración del módulo. Ejemplo: mp_integration_tarjeta_sec_2026'
      }
    }
  },
  security: [
    {
      IntegrationBearerAuth: []
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './routes/*.js', './api/index.js']
};

module.exports = swaggerJSDoc(options);
