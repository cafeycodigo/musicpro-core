const express = require('express');
const router = express.Router();
const { requireIntegrationToken } = require('../middleware/integration-auth.middleware');

/**
 * @openapi
 * /backend/tienda/api/v1/productos:
 *   get:
 *     summary: Obtener catálogo público y precios de venta E-Commerce
 *     tags: [Tienda E-Commerce]
 *     security:
 *       - IntegrationBearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos en oferta
 */
router.get('/productos', requireIntegrationToken('tienda'), (req, res) => {
  res.json({
    status: 'success',
    code: 'STORE_PRODUCTS_FETCHED',
    data: [
      { id: 1, sku: 'SKU-GTR-001', nombre: 'Guitarra Fender Stratocaster Player', precio_normal: 986000, precio_oferta: 789000, precio_tarjeta_musicpro: 729990, stock: 42, publicado: true },
      { id: 2, sku: 'SKU-AMP-004', nombre: 'Amplificador Marshall DSL40CR', precio_normal: 822000, precio_oferta: 699000, precio_tarjeta_musicpro: 649000, stock: 14, publicado: true }
    ]
  });
});

/**
 * @openapi
 * /backend/tienda/api/v1/productos/{id}:
 *   put:
 *     summary: Modificar precios o visibilidad de producto en tienda
 *     tags: [Tienda E-Commerce]
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
 *               precio_oferta:
 *                 type: number
 *                 example: 769000
 *               publicado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Producto actualizado
 */
router.put('/productos/:id', requireIntegrationToken('tienda'), (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'STORE_PRODUCT_UPDATED',
    message: `Producto ID ${id} actualizado comercialmente`,
    data: {
      producto_id: parseInt(id),
      precio_oferta: body.precio_oferta || 769000,
      publicado: body.publicado !== undefined ? body.publicado : true,
      updated_at: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/tienda/api/v1/productos/{id}:
 *   delete:
 *     summary: Despublicar o eliminar producto de la tienda
 *     tags: [Tienda E-Commerce]
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
 *         description: Producto despublicado/eliminado
 */
router.delete('/productos/:id', requireIntegrationToken('tienda'), (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    code: 'STORE_PRODUCT_REMOVED',
    message: `Producto ID ${id} retirado del catálogo público`,
    producto_id: parseInt(id),
    timestamp: new Date().toISOString()
  });
});

/**
 * @openapi
 * /backend/tienda/api/v1/ordenes:
 *   post:
 *     summary: Crear nueva orden de compra o venta POS
 *     tags: [Tienda E-Commerce]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_rut:
 *                 type: string
 *                 example: "18.234.567-8"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     sku:
 *                       type: string
 *                       example: "SKU-GTR-001"
 *                     cantidad:
 *                       type: integer
 *                       example: 1
 *               metodo_pago:
 *                 type: string
 *                 example: "TARJETA_MUSICPRO"
 *     responses:
 *       201:
 *         description: Orden de compra emitida exitosamente
 */
router.post('/ordenes', requireIntegrationToken('tienda'), (req, res) => {
  const body = req.body || {};
  res.status(201).json({
    status: 'success',
    code: 'STORE_ORDER_CREATED',
    message: 'Orden de compra procesada y enviada a torre de despacho',
    data: {
      orden_codigo: 'ORD-2026-' + Math.floor(1000 + Math.random() * 9000),
      cliente_rut: body.cliente_rut || '18.234.567-8',
      monto_total: 729990,
      metodo_pago: body.metodo_pago || 'TARJETA_MUSICPRO',
      estado: 'PAGADO',
      timestamp: new Date().toISOString()
    }
  });
});

/**
 * @openapi
 * /backend/tienda/api/v1/cupones:
 *   post:
 *     summary: Validar y aplicar cupón de descuento
 *     tags: [Tienda E-Commerce]
 *     security:
 *       - IntegrationBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo_cupon:
 *                 type: string
 *                 example: "LanzaRock2026"
 *     responses:
 *       200:
 *         description: Cupón aplicado exitosamente
 */
router.post('/cupones', requireIntegrationToken('tienda'), (req, res) => {
  const body = req.body || {};
  res.json({
    status: 'success',
    code: 'COUPON_APPLIED',
    cupon: body.codigo_cupon || 'LanzaRock2026',
    descuento_porcentaje: 15,
    valido: true
  });
});

module.exports = router;
