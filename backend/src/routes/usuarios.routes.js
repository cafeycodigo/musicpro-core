const express = require('express');
const router = express.Router();
const { requireIntegrationToken } = require('../middleware/integration-auth.middleware');

// Base de Datos Mock en Memoria para Usuarios del Sistema MusicPro
let usuariosBD = [
  {
    id: 1,
    rut: '12.345.678-9',
    nombre: 'Gonzalo Pérez',
    email: 'gperez@musicpro.cl',
    rol: 'ADMIN',
    sucursal: 'Casa Matriz (Providencia)',
    estado: 'ACTIVO',
    created_at: '2026-01-10T10:00:00Z'
  },
  {
    id: 2,
    rut: '15.678.901-2',
    nombre: 'Carolina Rojas',
    email: 'crojas@musicpro.cl',
    rol: 'JEFE_BODEGA',
    sucursal: 'Bodega Central Pudahuel',
    estado: 'ACTIVO',
    created_at: '2026-01-15T12:30:00Z'
  },
  {
    id: 3,
    rut: '18.901.234-5',
    nombre: 'Matías Silva',
    email: 'msilva@musicpro.cl',
    rol: 'CAJERO',
    sucursal: 'Tienda Providencia',
    estado: 'ACTIVO',
    created_at: '2026-02-01T09:15:00Z'
  },
  {
    id: 4,
    rut: '16.543.210-K',
    nombre: 'Valentina Soto',
    email: 'vsoto@musicpro.cl',
    rol: 'OPERADOR',
    sucursal: 'Bodega Central Pudahuel',
    estado: 'INACTIVO',
    created_at: '2026-02-20T14:45:00Z'
  },
  {
    id: 5,
    rut: '17.890.123-4',
    nombre: 'Felipe Morales',
    email: 'fmorales@musicpro.cl',
    rol: 'SUPERVISOR',
    sucursal: 'Tienda Mall Plaza Vespucio',
    estado: 'ACTIVO',
    created_at: '2026-03-05T11:20:00Z'
  },
  {
    id: 6,
    rut: '14.123.456-7',
    nombre: 'Andrea Ibáñez',
    email: 'aibanez@musicpro.cl',
    rol: 'VENDEDOR',
    sucursal: 'Tienda Providencia',
    estado: 'ACTIVO',
    created_at: '2026-03-12T16:10:00Z'
  }
];

let nextId = 7;

/**
 * @openapi
 * /backend/usuarios/api/v1/usuarios:
 *   get:
 *     summary: Obtener lista paginada y filtrada de usuarios del sistema
 *     tags: [Usuarios Sistema]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número de página (1-indexed)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Cantidad de registros por página
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Término de búsqueda por RUT, Nombre o Email
 *       - in: query
 *         name: rol
 *         schema:
 *           type: string
 *           enum: [ADMIN, JEFE_BODEGA, CAJERO, OPERADOR, SUPERVISOR, VENDEDOR]
 *         description: Filtrar por Rol del usuario
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [ACTIVO, INACTIVO]
 *         description: Filtrar por Estado (ACTIVO / INACTIVO)
 *     responses:
 *       200:
 *         description: Lista de usuarios paginada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 code:
 *                   type: string
 *                   example: USERS_FETCHED
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 total:
 *                   type: integer
 *                   example: 6
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/usuarios', requireIntegrationToken('usuarios'), (req, res) => {
  let { page = 1, limit = 10, search = '', rol = '', estado = '' } = req.query;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  if (page < 1) page = 1;
  if (limit < 1) limit = 10;

  // Filtrado
  let resultado = usuariosBD.filter(u => {
    let cumpleSearch = true;
    let cumpleRol = true;
    let cumpleEstado = true;

    if (search.trim() !== '') {
      const term = search.toLowerCase().trim();
      cumpleSearch = u.nombre.toLowerCase().includes(term) ||
                    u.email.toLowerCase().includes(term) ||
                    u.rut.toLowerCase().includes(term);
    }

    if (rol.trim() !== '') {
      cumpleRol = u.rol.toUpperCase() === rol.toUpperCase().trim();
    }

    if (estado.trim() !== '') {
      cumpleEstado = u.estado.toUpperCase() === estado.toUpperCase().trim();
    }

    return cumpleSearch && cumpleRol && cumpleEstado;
  });

  const total = resultado.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const paginatedData = resultado.slice(startIndex, startIndex + limit);

  res.json({
    status: 'success',
    code: 'USERS_FETCHED',
    page,
    limit,
    total,
    totalPages,
    filters: {
      search: search || null,
      rol: rol || null,
      estado: estado || null
    },
    data: paginatedData
  });
});

/**
 * @openapi
 * /backend/usuarios/api/v1/usuarios/{id}:
 *   get:
 *     summary: Obtener el detalle de un usuario específico por ID (Show)
 *     tags: [Usuarios Sistema]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Detalle del usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/usuarios/:id', requireIntegrationToken('usuarios'), (req, res) => {
  const { id } = req.params;
  const usuario = usuariosBD.find(u => u.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({
      status: 'error',
      code: 'USER_NOT_FOUND',
      message: `No se encontró ningún usuario registrado con el ID ${id}`
    });
  }

  res.json({
    status: 'success',
    code: 'USER_FOUND',
    data: usuario
  });
});

/**
 * @openapi
 * /backend/usuarios/api/v1/usuarios:
 *   post:
 *     summary: Crear un nuevo usuario en el sistema
 *     tags: [Usuarios Sistema]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rut
 *               - nombre
 *               - email
 *               - rol
 *             properties:
 *               rut:
 *                 type: string
 *                 example: "19.876.543-2"
 *               nombre:
 *                 type: string
 *                 example: "Daniela Castillo"
 *               email:
 *                 type: string
 *                 example: "dcastillo@musicpro.cl"
 *               rol:
 *                 type: string
 *                 example: "VENDEDOR"
 *               sucursal:
 *                 type: string
 *                 example: "Tienda Providencia"
 *               estado:
 *                 type: string
 *                 example: "ACTIVO"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Datos faltantes o inválidos
 */
router.post('/usuarios', requireIntegrationToken('usuarios'), (req, res) => {
  const { rut, nombre, email, rol, sucursal, estado } = req.body || {};

  if (!rut || !nombre || !email || !rol) {
    return res.status(400).json({
      status: 'error',
      code: 'MISSING_REQUIRED_FIELDS',
      message: 'Los campos rut, nombre, email y rol son obligatorios para crear un usuario.'
    });
  }

  const nuevoUsuario = {
    id: nextId++,
    rut,
    nombre,
    email,
    rol: rol.toUpperCase(),
    sucursal: sucursal || 'Casa Matriz (Providencia)',
    estado: (estado || 'ACTIVO').toUpperCase(),
    created_at: new Date().toISOString()
  };

  usuariosBD.push(nuevoUsuario);

  res.status(201).json({
    status: 'success',
    code: 'USER_CREATED',
    message: 'Usuario registrado exitosamente en la plataforma',
    data: nuevoUsuario
  });
});

/**
 * @openapi
 * /backend/usuarios/api/v1/usuarios/{id}:
 *   put:
 *     summary: Actualizar datos de un usuario existente
 *     tags: [Usuarios Sistema]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Gonzalo Pérez M."
 *               email:
 *                 type: string
 *                 example: "gperez.admin@musicpro.cl"
 *               rol:
 *                 type: string
 *                 example: "ADMIN"
 *               sucursal:
 *                 type: string
 *                 example: "Casa Matriz (Providencia)"
 *               estado:
 *                 type: string
 *                 example: "ACTIVO"
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/usuarios/:id', requireIntegrationToken('usuarios'), (req, res) => {
  const { id } = req.params;
  const index = usuariosBD.findIndex(u => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      code: 'USER_NOT_FOUND',
      message: `No se encontró el usuario ID ${id} para actualizar.`
    });
  }

  const usuarioActual = usuariosBD[index];
  const { nombre, email, rol, sucursal, estado } = req.body || {};

  usuariosBD[index] = {
    ...usuarioActual,
    ...(nombre && { nombre }),
    ...(email && { email }),
    ...(rol && { rol: rol.toUpperCase() }),
    ...(sucursal && { sucursal }),
    ...(estado && { estado: estado.toUpperCase() }),
    updated_at: new Date().toISOString()
  };

  res.json({
    status: 'success',
    code: 'USER_UPDATED',
    message: `Usuario ID ${id} ha sido actualizado correctamente.`,
    data: usuariosBD[index]
  });
});

/**
 * @openapi
 * /backend/usuarios/api/v1/usuarios/{id}:
 *   delete:
 *     summary: Eliminar o desactivar un usuario por ID
 *     tags: [Usuarios Sistema]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 4
 *     responses:
 *       200:
 *         description: Usuario eliminado o desactivado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/usuarios/:id', requireIntegrationToken('usuarios'), (req, res) => {
  const { id } = req.params;
  const index = usuariosBD.findIndex(u => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      code: 'USER_NOT_FOUND',
      message: `No se encontró el usuario ID ${id} para eliminar.`
    });
  }

  const usuarioEliminado = usuariosBD.splice(index, 1)[0];

  res.json({
    status: 'success',
    code: 'USER_DELETED',
    message: `Usuario '${usuarioEliminado.nombre}' (ID: ${id}) eliminado exitosamente del sistema.`,
    data: usuarioEliminado
  });
});

module.exports = router;
