const path = require('path');
let swaggerJSDoc;
try {
  swaggerJSDoc = require('swagger-jsdoc');
} catch (e) {
  swaggerJSDoc = null;
}

const baseDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MusicPro Enterprise Suite - API REST & Integraciones B2B',
    version: '1.0.0',
    description: `
Consola Interactiva de API e Integraciones B2B / M2M para **MusicPro Company**.
Soporta los 5 subsistemas de la suite corporativa:

1. **💳 Tarjeta BeatPay**: Emisión de crédito, transacciones y beneficios.
2. **📦 Bodega WMS**: Maestro de artículos, movimientos y racks de almacén.
3. **🛒 Tienda E-Commerce**: Catálogo comercial, ventas POS y cupones.
4. **🚚 Transporte Logística**: Rutas de despacho y tracking courier.
5. **👥 Usuarios Sistema**: Gestión centralizada de usuarios con paginación y filtros.

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
      url: 'https://musicpro-core.vercel.app',
      description: 'Servidor Producción / Vercel Cloud API'
    }
  ],
  components: {
    securitySchemes: {
      IntegrationBearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'API-Key',
        description: 'Ingresa el Token de Integración del módulo. Ejemplo: mp_integration_usuarios_sec_2026'
      }
    }
  },
  security: [
    {
      IntegrationBearerAuth: []
    }
  ],
  tags: [
    { name: 'Usuarios Sistema', description: 'CRUD, filtros y paginación de usuarios del sistema' },
    { name: 'Tarjeta BeatPay', description: 'Cuentas de crédito, transacciones y beneficios fintech' },
    { name: 'Bodega WMS', description: 'Inventario, movimientos de almacén y ubicaciones' },
    { name: 'Tienda E-Commerce', description: 'Catálogo comercial, órdenes de compra y cupones' },
    { name: 'Transporte Logística', description: 'Rutas logísticas y guías de despacho courier' }
  ],
  paths: {
    // ==================== USUARIOS ====================
    '/backend/usuarios/api/v1/usuarios': {
      get: {
        summary: 'Obtener lista paginada y filtrada de usuarios del sistema',
        tags: ['Usuarios Sistema'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 }, description: 'Número de página (1-indexed)' },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 10 }, description: 'Cantidad de registros por página' },
          { in: 'query', name: 'search', schema: { type: 'string' }, description: 'Término de búsqueda por RUT, Nombre o Email' },
          { in: 'query', name: 'rol', schema: { type: 'string', enum: ['ADMIN', 'JEFE_BODEGA', 'CAJERO', 'OPERADOR', 'SUPERVISOR', 'VENDEDOR'] }, description: 'Filtrar por Rol' },
          { in: 'query', name: 'estado', schema: { type: 'string', enum: ['ACTIVO', 'INACTIVO'] }, description: 'Filtrar por Estado' }
        ],
        responses: {
          200: {
            description: 'Lista de usuarios paginada exitosamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'success' },
                    code: { type: 'string', example: 'USERS_FETCHED' },
                    page: { type: 'integer', example: 1 },
                    limit: { type: 'integer', example: 10 },
                    total: { type: 'integer', example: 6 },
                    totalPages: { type: 'integer', example: 1 },
                    data: { type: 'array', items: { type: 'object' } }
                  }
                }
              }
            }
          }
        }
      },
      post: {
        summary: 'Crear un nuevo usuario en el sistema',
        tags: ['Usuarios Sistema'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['rut', 'nombre', 'email', 'rol'],
                properties: {
                  rut: { type: 'string', example: '19.876.543-2' },
                  nombre: { type: 'string', example: 'Daniela Castillo' },
                  email: { type: 'string', example: 'dcastillo@musicpro.cl' },
                  rol: { type: 'string', example: 'VENDEDOR' },
                  sucursal: { type: 'string', example: 'Tienda Providencia' },
                  estado: { type: 'string', example: 'ACTIVO' }
                }
              }
            }
          }
        },
        responses: {
          201: { description: 'Usuario creado exitosamente' },
          400: { description: 'Datos requeridos faltantes' }
        }
      }
    },
    '/backend/usuarios/api/v1/usuarios/{id}': {
      get: {
        summary: 'Obtener detalle de un usuario específico por ID (Show)',
        tags: ['Usuarios Sistema'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        responses: {
          200: { description: 'Detalle del usuario' },
          404: { description: 'Usuario no encontrado' }
        }
      },
      put: {
        summary: 'Actualizar datos de un usuario existente',
        tags: ['Usuarios Sistema'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nombre: { type: 'string', example: 'Gonzalo Pérez M.' },
                  email: { type: 'string', example: 'gperez.admin@musicpro.cl' },
                  rol: { type: 'string', example: 'ADMIN' },
                  sucursal: { type: 'string', example: 'Casa Matriz (Providencia)' },
                  estado: { type: 'string', example: 'ACTIVO' }
                }
              }
            }
          }
        },
        responses: {
          200: { description: 'Usuario actualizado exitosamente' },
          404: { description: 'Usuario no encontrado' }
        }
      },
      delete: {
        summary: 'Eliminar o dar de baja a un usuario',
        tags: ['Usuarios Sistema'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 4 }],
        responses: {
          200: { description: 'Usuario eliminado exitosamente' },
          404: { description: 'Usuario no encontrado' }
        }
      }
    },

    // ==================== TARJETA BEATPAY ====================
    '/backend/tarjeta/api/v1/cuentas': {
      get: {
        summary: 'Obtener lista de clientes y cuentas de tarjeta BeatPay',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Lista de cuentas' } }
      },
      post: {
        summary: 'Evaluar y registrar nuevo cliente de tarjeta',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  rut: { type: 'string', example: '17.654.321-K' },
                  nombre: { type: 'string', example: 'Carlos Rojas' },
                  email: { type: 'string', example: 'carlos.rojas@gmail.com' },
                  cupo_solicitado: { type: 'number', example: 1500000 }
                }
              }
            }
          }
        },
        responses: { 201: { description: 'Cuenta aprobada y creada' } }
      }
    },
    '/backend/tarjeta/api/v1/cuentas/{id}': {
      put: {
        summary: 'Actualizar cupo o estado de cuenta de tarjeta',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nuevo_cupo: { type: 'number', example: 4000000 },
                  estado: { type: 'string', example: 'ACTIVO' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Cuenta actualizada exitosamente' } }
      },
      delete: {
        summary: 'Bloquear o dar de baja cuenta de tarjeta',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        responses: { 200: { description: 'Cuenta bloqueada/eliminada' } }
      }
    },
    '/backend/tarjeta/api/v1/transacciones': {
      post: {
        summary: 'Procesar cargo o avance de tarjeta vía integración',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  rut: { type: 'string', example: '18.234.567-8' },
                  monto: { type: 'number', example: 129990 },
                  comercio: { type: 'string', example: 'Tienda MusicPro Providencia' },
                  cuotas: { type: 'integer', example: 3 }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Cargo aprobado exitosamente' } }
      }
    },
    '/backend/tarjeta/api/v1/beneficios': {
      get: {
        summary: 'Consultar catálogo de beneficios vigentes',
        tags: ['Tarjeta BeatPay'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Lista de beneficios activos' } }
      }
    },

    // ==================== BODEGA WMS ====================
    '/backend/bodega/api/v1/articulos': {
      get: {
        summary: 'Consultar maestro de artículos e inventarios WMS',
        tags: ['Bodega WMS'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Catálogo de artículos WMS' } }
      }
    },
    '/backend/bodega/api/v1/articulos/{id}': {
      put: {
        summary: 'Actualizar datos o stock mínimo de artículo WMS',
        tags: ['Bodega WMS'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 101 }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  stock_minimo: { type: 'integer', example: 5 },
                  costo_unitario: { type: 'number', example: 520000 }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Artículo actualizado exitosamente' } }
      },
      delete: {
        summary: 'Dar de baja un artículo del catálogo WMS',
        tags: ['Bodega WMS'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 101 }],
        responses: { 200: { description: 'Artículo dado de baja' } }
      }
    },
    '/backend/bodega/api/v1/movimientos': {
      post: {
        summary: 'Registrar ajuste o movimiento de inventario WMS',
        tags: ['Bodega WMS'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  sku: { type: 'string', example: 'SKU-GTR-001' },
                  tipo_movimiento: { type: 'string', example: 'ENTRADA_COMPRA' },
                  cantidad: { type: 'integer', example: 10 },
                  ubicacion_destino: { type: 'string', example: 'PAS-A-RACK-03' }
                }
              }
            }
          }
        },
        responses: { 201: { description: 'Movimiento registrado exitosamente' } }
      }
    },
    '/backend/bodega/api/v1/ubicaciones': {
      get: {
        summary: 'Listar ubicaciones y disponibilidad de racks',
        tags: ['Bodega WMS'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Lista de racks y pasillos' } }
      }
    },

    // ==================== TIENDA E-COMMERCE ====================
    '/backend/tienda/api/v1/productos': {
      get: {
        summary: 'Obtener catálogo público y precios de venta E-Commerce',
        tags: ['Tienda E-Commerce'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Lista de productos en oferta' } }
      }
    },
    '/backend/tienda/api/v1/productos/{id}': {
      put: {
        summary: 'Modificar precios o visibilidad de producto en tienda',
        tags: ['Tienda E-Commerce'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  precio_oferta: { type: 'number', example: 769000 },
                  publicado: { type: 'boolean', example: true }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Producto actualizado' } }
      },
      delete: {
        summary: 'Despublicar o eliminar producto de la tienda',
        tags: ['Tienda E-Commerce'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 1 }],
        responses: { 200: { description: 'Producto despublicado/eliminado' } }
      }
    },
    '/backend/tienda/api/v1/ordenes': {
      post: {
        summary: 'Crear nueva orden de compra o venta POS',
        tags: ['Tienda E-Commerce'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  cliente_rut: { type: 'string', example: '18.234.567-8' },
                  items: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        sku: { type: 'string', example: 'SKU-GTR-001' },
                        cantidad: { type: 'integer', example: 1 }
                      }
                    }
                  },
                  metodo_pago: { type: 'string', example: 'TARJETA_MUSICPRO' }
                }
              }
            }
          }
        },
        responses: { 201: { description: 'Orden de compra emitida exitosamente' } }
      }
    },
    '/backend/tienda/api/v1/cupones': {
      post: {
        summary: 'Validar y aplicar cupón de descuento',
        tags: ['Tienda E-Commerce'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  codigo_cupon: { type: 'string', example: 'LanzaRock2026' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Cupón aplicado exitosamente' } }
      }
    },

    // ==================== TRANSPORTE LOGISTICA ====================
    '/backend/transporte/api/v1/rutas': {
      get: {
        summary: 'Consultar rutas logísticas y estado de flota en vivo',
        tags: ['Transporte Logística'],
        security: [{ IntegrationBearerAuth: [] }],
        responses: { 200: { description: 'Lista de rutas asignadas' } }
      }
    },
    '/backend/transporte/api/v1/rutas/{id}': {
      put: {
        summary: 'Reprogramar o cambiar estado de ruta logística',
        tags: ['Transporte Logística'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 42 }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  conductor: { type: 'string', example: 'Gonzalo Henríquez' },
                  estado: { type: 'string', example: 'FINALIZADA' }
                }
              }
            }
          }
        },
        responses: { 200: { description: 'Ruta reprogramada exitosamente' } }
      },
      delete: {
        summary: 'Anular o cancelar ruta de despacho',
        tags: ['Transporte Logística'],
        security: [{ IntegrationBearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' }, example: 42 }],
        responses: { 200: { description: 'Ruta anulada' } }
      }
    },
    '/backend/transporte/api/v1/envios': {
      post: {
        summary: 'Generar orden de despacho y código de tracking courier',
        tags: ['Transporte Logística'],
        security: [{ IntegrationBearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  orden_codigo: { type: 'string', example: 'ORD-2026-9812' },
                  direccion_destino: { type: 'string', example: 'Av. Pedro de Valdivia 1234, Providencia' },
                  destinatario_nombre: { type: 'string', example: 'Camila Soto' }
                }
              }
            }
          }
        },
        responses: { 201: { description: 'Despacho creado con tracking courier' } }
      }
    }
  }
};

let swaggerSpec = baseDefinition;

// Si swagger-jsdoc está disponible, intentamos combinar anotaciones dinámicas si existen
if (swaggerJSDoc) {
  try {
    const dynamicSpec = swaggerJSDoc({
      swaggerDefinition: baseDefinition,
      apis: [
        path.join(__dirname, 'routes/*.js').replace(/\\/g, '/'),
        path.join(__dirname, '../src/routes/*.js').replace(/\\/g, '/'),
        './src/routes/*.js',
        './routes/*.js'
      ]
    });
    if (dynamicSpec && dynamicSpec.paths && Object.keys(dynamicSpec.paths).length > 0) {
      swaggerSpec = {
        ...dynamicSpec,
        paths: {
          ...baseDefinition.paths,
          ...dynamicSpec.paths
        }
      };
    }
  } catch (err) {
    console.warn('[SwaggerConfig] Usando especificación OpenAPI estática:', err.message);
  }
}

module.exports = swaggerSpec;
