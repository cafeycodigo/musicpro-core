/**
 * Middleware de Autenticación para Integraciones B2B / M2M
 * Valida la cabecera Authorization: Bearer <INTEGRATION_TOKEN>
 */

const INTEGRATION_TOKENS = {
  tarjeta: 'mp_integration_tarjeta_sec_2026',
  bodega: 'mp_integration_bodega_sec_2026',
  tienda: 'mp_integration_tienda_sec_2026',
  transporte: 'mp_integration_transporte_sec_2026',
  usuarios: 'mp_integration_usuarios_sec_2026'
};

function requireIntegrationToken(moduloKey) {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).json({
        status: 'error',
        code: 'MISSING_AUTHORIZATION_HEADER',
        message: 'Acceso denegado. Se requiere la cabecera HTTP "Authorization: Bearer <TOKEN_DE_INTEGRACION>"',
        modulo: moduloKey
      });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(400).json({
        status: 'error',
        code: 'INVALID_HEADER_FORMAT',
        message: 'Formato de cabecera inválido. Debe ser: "Authorization: Bearer <TOKEN>"'
      });
    }

    const tokenIngresado = parts[1];
    const tokenEsperado = INTEGRATION_TOKENS[moduloKey];

    if (tokenIngresado !== tokenEsperado) {
      return res.status(403).json({
        status: 'error',
        code: 'INTEGRATION_TOKEN_INVALID',
        message: `El Token de Integración proporcionado no es válido para el módulo '${moduloKey}'`,
        token_ingresado: tokenIngresado,
        modulo: moduloKey
      });
    }

    req.integration = {
      modulo: moduloKey,
      authenticated: true,
      timestamp: new Date().toISOString()
    };

    next();
  };
}

module.exports = {
  requireIntegrationToken,
  INTEGRATION_TOKENS
};
