const express = require('express');
const router = express.Router();
const { requireIntegrationToken } = require('../middleware/integration-auth.middleware');

/**
 * @openapi
 * /backend/tarjeta/api/v1/cuentas:
 *   get:
 *     summary: Obtener lista de clientes y cuentas de tarjeta BeatPay
 *     tags: [Tarjeta BeatPay]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cuentas retornada exitosamente
 */
router.get('/cuentas', requireIntegrationToken('tarjeta'), (req, res) => {
  res.json({
    status: 'success',
    code: 'TARJETA_ACCOUNTS_FETCHED',
    total: 3,
    data: [
      { id: 1, rut: '18.234.567-8', titular: 'Camila Soto Morales', tarjeta_pan: '4532-XXXX-XXXX-1234', plan: 'Black Musician', cupo_total: 3500000, cupo_disponible: 2450000, estado: 'ACTIVO' },
      { id: 2, rut: '19.876.543-2', titular: 'Benjamín Valenzuela', tarjeta_pan: '4532-XXXX-XXXX-8899', plan: 'Gold Student', cupo_total: 1200000, cupo_disponible: 890000, estado: 'ACTIVO' },
      { id: 3, rut: '16.543.210-9', titular: 'Lucía Pardo', tarjeta_pan: '4532-XXXX-XXXX-9900', plan: 'Classic Beat', cupo_total: 500000, cupo_disponible: 370000, estado: 'ACTIVO' }
    ]
  });
});

/**
 * @openapi
 * /backend/tarjeta/api/v1/cuentas:
 *   post:
 *     summary: Evaluar y registrar nuevo cliente de tarjeta
 *     tags: [Tarjeta BeatPay]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rut:
 *                 type: string
 *                 example: "17.654.321-K"
 *               nombre:
 *                 type: string
 *                 example: "Carlos Rojas"
 *               email:
 *                 type: string
 *                 example: "carlos.rojas@gmail.com"
 *               cupo_solicitado:
 *                 type: number
 *                 example: 1500000
 *     responses:
 *       201:
 *         description: Cuenta aprobada y creada por integración
 */
router.post('/cuentas', requireIntegrationToken('tarjeta'), (req, res) => {
  const body = req.body || {};
  res.status(201).json({
    status: 'success',
    code: 'TARJETA_ACCOUNT_APPROVED',
    message: 'Evaluación de riesgo superada. Cuenta de tarjeta emitida vía integración.',
    data: {
      account_id: Math.floor(1000 + Math.random() * 9000),
      rut: body.rut || '17.654.321-K',
      titular: body.nombre || 'Nuevo Titular',
      email: body.email || 'cliente@musicpro.cl',
      tarjeta_pan: '4532-XXXX-XXXX-' + Math.floor(1000 + Math.random() * 9000),
      cupo_aprobado: body.cupo_solicitado || 1500000,
      scoring_riesgo: 'A1 - BAJO RIESGO',
      created_at: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/tarjeta/api/v1/cuentas/{id}:
 *   put:
 *     summary: Actualizar cupo o estado de cuenta de tarjeta
 *     tags: [Tarjeta BeatPay]
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
 *               nuevo_cupo:
 *                 type: number
 *                 example: 4000000
 *               estado:
 *                 type: string
 *                 example: "ACTIVO"
 *     responses:
 *       200:
 *         description: Cuenta actualizada exitosamente
 */
router.put('/cuentas/:id', requireIntegrationToken('tarjeta'), (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'TARJETA_ACCOUNT_UPDATED',
    message: `Cuenta ID ${id} actualizada vía integración`,
    data: {
      account_id: parseInt(id),
      nuevo_cupo: body.nuevo_cupo || 4000000,
      estado: body.estado || 'ACTIVO',
      updated_at: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/tarjeta/api/v1/cuentas/{id}:
 *   delete:
 *     summary: Bloquear o dar de baja cuenta de tarjeta
 *     tags: [Tarjeta BeatPay]
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
 *         description: Cuenta bloqueada/eliminada
 */
router.delete('/cuentas/:id', requireIntegrationToken('tarjeta'), (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    code: 'TARJETA_ACCOUNT_BLOCKED',
    message: `Cuenta ID ${id} ha sido bloqueada y suspendida en el sistema fintech`,
    account_id: parseInt(id),
    timestamp: new Date().toISOString()
  });
});

/**
 * @openapi
 * /backend/tarjeta/api/v1/transacciones:
 *   post:
 *     summary: Procesar cargo o avance de tarjeta vía integración
 *     tags: [Tarjeta BeatPay]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rut:
 *                 type: string
 *                 example: "18.234.567-8"
 *               monto:
 *                 type: number
 *                 example: 129990
 *               comercio:
 *                 type: string
 *                 example: "Tienda MusicPro Providencia"
 *               cuotas:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Cargo aprobado exitosamente
 */
router.post('/transacciones', requireIntegrationToken('tarjeta'), (req, res) => {
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'TRANSACTION_APPROVED',
    authorization_code: 'AUTH-' + Math.floor(100000 + Math.random() * 900000),
    monto: body.monto || 129990,
    cuotas: body.cuotas || 3,
    comercio: body.comercio || 'Tienda MusicPro Providencia',
    timestamp: new Date().toISOString()
  });
});

/**
 * @openapi
 * /backend/tarjeta/api/v1/beneficios:
 *   get:
 *     summary: Consultar catálogo de beneficios vigentes
 *     tags: [Tarjeta BeatPay]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de beneficios activos
 */
router.get('/beneficios', requireIntegrationToken('tarjeta'), (req, res) => {
  res.json({
    status: 'success',
    data: [
      { id: 1, titulo: '3 Cuotas Sin Interés en Tienda MusicPro', descuento_porcentaje: 0, cuotas: 3, estado: 'ACTIVO' },
      { id: 2, titulo: '15% Cashback en Compras Presenciales', descuento_porcentaje: 15, cuotas: 1, estado: 'ACTIVO' }
    ]
  });
});

module.exports = router;
