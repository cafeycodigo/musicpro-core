/**
 * MusicPro Developer Portal - Custom Swagger UI Styles & Brand Theme
 * Aplica diseño Dark Mode Premium, fuentes Google Fonts 'Outfit' & 'Plus Jakarta Sans',
 * tipografía elegante, colores corporativos Emerald, Amber, Cyan, y marca MusicPro.
 */

const customCss = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

  /* RESET & BASE DARK THEME */
  body, .swagger-ui {
    background-color: #0b0f19 !important;
    color: #cbd5e1 !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
  }

  /* HEADER & TOPBAR MUSICPRO BRAND */
  .swagger-ui .topbar {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #064e3b 100%) !important;
    border-b: 1px solid rgba(255, 255, 255, 0.1) !important;
    padding: 14px 24px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
  }

  .swagger-ui .topbar a {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
  }

  .swagger-ui .topbar a img {
    display: none !important;
  }

  .swagger-ui .topbar a::before {
    content: "🎵 MUSICPRO";
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    font-size: 20px !important;
    letter-spacing: -0.5px !important;
    background: linear-gradient(135deg, #10b981 0%, #38bdf8 50%, #f59e0b 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }

  .swagger-ui .topbar a::after {
    content: "DEVELOPER PORTAL & API SUITE";
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    color: #94a3b8 !important;
    background: rgba(255, 255, 255, 0.08) !important;
    padding: 3px 8px !important;
    border-radius: 6px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    letter-spacing: 0.5px !important;
  }

  /* CONTAINER & TITLE */
  .swagger-ui .info {
    margin: 30px 0 !important;
    background: #1e293b !important;
    border: 1px solid #334155 !important;
    border-radius: 20px !important;
    padding: 32px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
  }

  .swagger-ui .info .title {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    font-size: 30px !important;
    letter-spacing: -0.5px !important;
  }

  .swagger-ui .info p, .swagger-ui .info li {
    color: #94a3b8 !important;
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .swagger-ui .info a {
    color: #34d399 !important;
    font-weight: 600 !important;
  }

  /* BUTTON AUTHORIZE (CANDADO VERDE DE INTEGRACION) */
  .swagger-ui .btn.authorize {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%) !important;
    color: #ffffff !important;
    border-radius: 12px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    border: none !important;
    box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3) !important;
    padding: 8px 20px !important;
    transition: all 0.2s ease !important;
  }

  .swagger-ui .btn.authorize:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4) !important;
  }

  .swagger-ui .btn.authorize svg {
    fill: #ffffff !important;
  }

  /* MODAL DE AUTORIZACION */
  .swagger-ui .dialog-ux .modal-ux {
    background: #0f172a !important;
    border: 1px solid #334155 !important;
    border-radius: 24px !important;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6) !important;
  }

  .swagger-ui .dialog-ux .modal-ux-header {
    border-b: 1px solid #1e293b !important;
    padding: 20px !important;
  }

  .swagger-ui .dialog-ux .modal-ux-header h3 {
    color: #ffffff !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 700 !important;
  }

  .swagger-ui .dialog-ux .modal-ux-content {
    color: #cbd5e1 !important;
    padding: 24px !important;
  }

  .swagger-ui .dialog-ux .modal-ux-content h4 {
    color: #38bdf8 !important;
  }

  /* TAGS & CATEGORIAS */
  .swagger-ui .opblock-tag {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    font-size: 20px !important;
    color: #f8fafc !important;
    border-bottom: 2px solid #334155 !important;
    padding: 16px 0 !important;
    margin-top: 30px !important;
  }

  .swagger-ui .opblock-tag small {
    color: #64748b !important;
    font-weight: 500 !important;
  }

  /* OPERATION BLOCKS (ENDPOINTS) */
  .swagger-ui .opblock {
    border-radius: 16px !important;
    border: 1px solid #334155 !important;
    background: #1e293b !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
    margin-bottom: 14px !important;
    overflow: hidden !important;
    transition: transform 0.2s ease, border-color 0.2s ease !important;
  }

  .swagger-ui .opblock:hover {
    border-color: #475569 !important;
  }

  .swagger-ui .opblock .opblock-summary {
    padding: 12px 18px !important;
  }

  /* HTTP METHODS BADGES */
  .swagger-ui .opblock .opblock-summary-method {
    border-radius: 8px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    font-size: 12px !important;
    min-width: 70px !important;
    text-align: center !important;
    padding: 6px 10px !important;
    text-shadow: none !important;
  }

  .swagger-ui .opblock.opblock-get {
    border-color: rgba(6, 182, 212, 0.3) !important;
    background: rgba(15, 23, 42, 0.8) !important;
  }

  .swagger-ui .opblock.opblock-get .opblock-summary-method {
    background: #06b6d4 !important;
    color: #0f172a !important;
  }

  .swagger-ui .opblock.opblock-post {
    border-color: rgba(16, 185, 129, 0.3) !important;
    background: rgba(15, 23, 42, 0.8) !important;
  }

  .swagger-ui .opblock.opblock-post .opblock-summary-method {
    background: #10b981 !important;
    color: #0f172a !important;
  }

  .swagger-ui .opblock.opblock-put {
    border-color: rgba(245, 158, 11, 0.3) !important;
    background: rgba(15, 23, 42, 0.8) !important;
  }

  .swagger-ui .opblock.opblock-put .opblock-summary-method {
    background: #f59e0b !important;
    color: #0f172a !important;
  }

  .swagger-ui .opblock.opblock-delete {
    border-color: rgba(244, 63, 94, 0.3) !important;
    background: rgba(15, 23, 42, 0.8) !important;
  }

  .swagger-ui .opblock.opblock-delete .opblock-summary-method {
    background: #f43f5e !important;
    color: #ffffff !important;
  }

  .swagger-ui .opblock .opblock-summary-path {
    font-family: 'Plus Jakarta Sans', monospace !important;
    font-weight: 700 !important;
    color: #f1f5f9 !important;
    font-size: 13px !important;
  }

  .swagger-ui .opblock .opblock-summary-description {
    color: #94a3b8 !important;
    font-size: 12px !important;
  }

  /* INPUTS & SELECTS */
  .swagger-ui input[type=text], .swagger-ui select {
    background: #0f172a !important;
    border: 1px solid #334155 !important;
    color: #f8fafc !important;
    border-radius: 10px !important;
    padding: 8px 12px !important;
    font-size: 12px !important;
  }

  .swagger-ui input[type=text]:focus, .swagger-ui select:focus {
    border-color: #10b981 !important;
    outline: none !important;
  }

  /* TABLES & SCHEMAS */
  .swagger-ui table {
    border-collapse: separate !important;
    border-spacing: 0 !important;
  }

  .swagger-ui table thead tr th {
    color: #94a3b8 !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 11px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border-bottom: 1px solid #334155 !important;
  }

  .swagger-ui table tbody tr td {
    color: #cbd5e1 !important;
    border-bottom: 1px solid #1e293b !important;
    font-size: 12px !important;
  }

  .swagger-ui section.models {
    border: 1px solid #334155 !important;
    border-radius: 20px !important;
    background: #1e293b !important;
    padding: 20px !important;
  }

  .swagger-ui section.models h8 {
    color: #f8fafc !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 18px !important;
  }

  /* RESPONSE JSON HIGHLIGHT */
  .swagger-ui .highlight-code pre {
    background: #090d16 !important;
    border-radius: 12px !important;
    border: 1px solid #1e293b !important;
    color: #38bdf8 !important;
    font-family: 'Plus Jakarta Sans', monospace !important;
  }

  .swagger-ui .microlight {
    color: #38bdf8 !important;
  }

  /* BUTTON TRY IT OUT & EXECUTE */
  .swagger-ui .btn.try-out__btn {
    background: #334155 !important;
    color: #f8fafc !important;
    border-radius: 8px !important;
    border: none !important;
    font-weight: 700 !important;
  }

  .swagger-ui .btn.execute {
    background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%) !important;
    color: #ffffff !important;
    border-radius: 10px !important;
    border: none !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 700 !important;
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3) !important;
  }
`;

const swaggerUiOptions = {
  customCss,
  customSiteTitle: 'MusicPro API Suite & Developer Portal',
  customfavIcon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/svgs/solid/music.svg',
  swaggerOptions: {
    docExpansion: 'list',
    filter: true,
    displayRequestDuration: true
  }
};

module.exports = {
  customCss,
  swaggerUiOptions
};
