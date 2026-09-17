const express = require('express');
const router = express.Router();
const { requireIntegrationToken } = require('../middleware/integration-auth.middleware');

/**
 * @openapi
 * /backend/transporte/api/v1/rutas:
 *   get:
 *     summary: Consultar rutas logísticas y estado de flota en vivo
 *     tags: [Transporte Logística]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de rutas asignadas
 */
router.get('/rutas', requireIntegrationToken('transporte'), (req, res) => {
  res.json({
    status: 'success',
    code: 'LOGISTICS_ROUTES_FETCHED',
    data: [
      { id: 42, codigo_ruta: 'RUTA-RM-042', vehiculo_patente: 'PPDD-88', conductor: 'Mario Silva', zona: 'Sector Oriente RM', estado: 'EN_TRANSITO' },
      { id: 43, codigo_ruta: 'RUTA-VALP-001', vehiculo_patente: 'KKL-99', conductor: 'Gonzalo Henríquez', zona: 'Valparaíso / Viña', estado: 'EN_ESPERA' }
    ]
  });
});

/**
 * @openapi
 * /backend/transporte/api/v1/rutas/{id}:
 *   put:
 *     summary: Reprogramar o cambiar estado de ruta logística
 *     tags: [Transporte Logística]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 42
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               conductor:
 *                 type: string
 *                 example: "Gonzalo Henríquez"
 *               estado:
 *                 type: string
 *                 example: "FINALIZADA"
 *     responses:
 *       200:
 *         description: Ruta reprogramada exitosamente
 */
router.put('/rutas/:id', requireIntegrationToken('transporte'), (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'LOGISTICS_ROUTE_UPDATED',
    message: `Ruta ID ${id} modificada en la torre de control`,
    data: {
      ruta_id: parseInt(id),
      conductor: body.conductor || 'Gonzalo Henríquez',
      estado: body.estado || 'FINALIZADA',
      updated_at: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/transporte/api/v1/rutas/{id}:
 *   delete:
 *     summary: Anular o cancelar ruta de despacho
 *     tags: [Transporte Logística]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 42
 *     responses:
 *       200:
 *         description: Ruta anulada
 */
router.delete('/rutas/:id', requireIntegrationToken('transporte'), (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    code: 'LOGISTICS_ROUTE_CANCELLED',
    message: `Ruta ID ${id} anulada en la torre logísitca`,
    ruta_id: parseInt(id),
    timestamp: new Date().toISOString()
  });
});

/**
 * @openapi
 * /backend/transporte/api/v1/envios:
 *   post:
 *     summary: Generar orden de despacho y código de tracking courier
 *     tags: [Transporte Logística]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orden_codigo:
 *                 type: string
 *                 example: "ORD-2026-9812"
 *               direccion_destino:
 *                 type: string
 *                 example: "Av. Pedro de Valdivia 1234, Providencia"
 *               destinatario_nombre:
 *                 type: string
 *                 example: "Camila Soto"
 *     responses:
 *       201:
 *         description: Despacho creado con tracking courier
 */
router.post('/envios', requireIntegrationToken('transporte'), (req, res) => {
  const body = req.body || {};
  res.status(201).json({
    status: 'success',
    code: 'DISPATCH_ORDER_CREATED',
    message: 'Guía de despacho courier emitida vía integración logísitca',
    data: {
      tracking_number: 'TRK-MP-' + Math.floor(1000000 + Math.random() * 9000000),
      orden_asociada: body.orden_codigo || 'ORD-2026-9812',
      direccion_destino: body.direccion_destino || 'Av. Pedro de Valdivia 1234, Providencia',
      destinatario: body.destinatario_nombre || 'Camila Soto',
      sla_estimado: '24 Horas Hábiles (RM Express)',
      created_at: new Date().toISOString()
    }
  });
});

module.exports = router;
