const express = require('express');
const router = express.Router();
const { requireIntegrationToken } = require('../middleware/integration-auth.middleware');

/**
 * @openapi
 * /backend/bodega/api/v1/articulos:
 *   get:
 *     summary: Consultar maestro de artículos e inventarios WMS
 *     tags: [Bodega WMS]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Catálogo de artículos WMS
 */
router.get('/articulos', requireIntegrationToken('bodega'), (req, res) => {
  res.json({
    status: 'success',
    code: 'WMS_INVENTORY_FETCHED',
    total: 2,
    data: [
      { id: 101, sku: 'SKU-GTR-001', nombre: 'Guitarra Fender Stratocaster Player', stock_pudahuel: 30, stock_providencia: 10, costo_unitario: 516000 },
      { id: 102, sku: 'SKU-AMP-004', nombre: 'Amplificador Marshall DSL40CR', stock_pudahuel: 14, stock_providencia: 4, costo_unitario: 420000 }
    ]
  });
});

/**
 * @openapi
 * /backend/bodega/api/v1/articulos/{id}:
 *   put:
 *     summary: Actualizar datos o stock mínimo de artículo WMS
 *     tags: [Bodega WMS]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 101
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stock_minimo:
 *                 type: integer
 *                 example: 5
 *               costo_unitario:
 *                 type: number
 *                 example: 520000
 *     responses:
 *       200:
 *         description: Artículo actualizado exitosamente
 */
router.put('/articulos/:id', requireIntegrationToken('bodega'), (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'WMS_ARTICLE_UPDATED',
    message: `Artículo ID ${id} actualizado en el maestro WMS`,
    data: {
      articulo_id: parseInt(id),
      stock_minimo: body.stock_minimo || 5,
      costo_unitario: body.costo_unitario || 520000,
      updated_at: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/bodega/api/v1/articulos/{id}:
 *   delete:
 *     summary: Dar de baja un artículo del catálogo WMS
 *     tags: [Bodega WMS]
 *     security:
 *       - IntegrationBearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 101
 *     responses:
 *       200:
 *         description: Artículo dado de baja
 */
router.delete('/articulos/:id', requireIntegrationToken('bodega'), (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    code: 'WMS_ARTICLE_DELETED',
    message: `Artículo ID ${id} ha sido deshabilitado del catálogo WMS`,
    articulo_id: parseInt(id),
    timestamp: new Date().toISOString()
  });
});

/**
 * @openapi
 * /backend/bodega/api/v1/movimientos:
 *   post:
 *     summary: Registrar ajuste o movimiento de inventario WMS
 *     tags: [Bodega WMS]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *                 example: "SKU-GTR-001"
 *               tipo_movimiento:
 *                 type: string
 *                 example: "ENTRADA_COMPRA"
 *               cantidad:
 *                 type: integer
 *                 example: 10
 *               ubicacion_destino:
 *                 type: string
 *                 example: "PAS-A-RACK-03"
 *     responses:
 *       201:
 *         description: Movimiento registrado exitosamente
 */
router.post('/movimientos', requireIntegrationToken('bodega'), (req, res) => {
  const body = req.body || {};
  res.status(201).json({
    status: 'success',
    code: 'WMS_MOVEMENT_CREATED',
    message: 'Movimiento de inventario registrado correctamente en WMS Pudahuel',
    data: {
      movement_id: 'MOV-WMS-' + Math.floor(10000 + Math.random() * 90000),
      sku: body.sku || 'SKU-GTR-001',
      tipo: body.tipo_movimiento || 'ENTRADA_COMPRA',
      cantidad: body.cantidad || 10,
      ubicacion_destino: body.ubicacion_destino || 'PAS-A-RACK-03',
      timestamp: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/bodega/api/v1/ubicaciones:
 *   get:
 *     summary: Listar ubicaciones y disponibilidad de racks
 *     tags: [Bodega WMS]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de racks y pasillos
 */
router.get('/ubicaciones', requireIntegrationToken('bodega'), (req, res) => {
  res.json({
    status: 'success',
    data: [
      { codigo: 'PAS-A-RACK-01', zona: 'Guitarras', ocupacion: '92%' },
      { codigo: 'PAS-A-RACK-03', zona: 'Guitarras & Baixos', ocupacion: '85%' },
      { codigo: 'PAS-B-RACK-05', zona: 'Amplificación', ocupacion: '60%' }
    ]
  });
});

module.exports = router;
