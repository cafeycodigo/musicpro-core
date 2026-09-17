const app = require('./api/index');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 Servidor MusicPro Backend corriendo en el puerto ${PORT}`);
  console.log(`📑 Consola Swagger UI:  http://localhost:${PORT}/docs`);
  console.log(`📄 JSON OpenAPI Spec:   http://localhost:${PORT}/docs-json`);
  console.log('====================================================');
  console.log('🔑 Tokens de Integración (Bearer Token):');
  console.log(' - Tarjeta:    Bearer mp_integration_tarjeta_sec_2026');
  console.log(' - Bodega:     Bearer mp_integration_bodega_sec_2026');
  console.log(' - Tienda:     Bearer mp_integration_tienda_sec_2026');
  console.log(' - Transporte: Bearer mp_integration_transporte_sec_2026');
  console.log('====================================================');
});
