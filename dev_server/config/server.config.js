/**
 * Development Server Configuration
 * Configuration for development server setup
 */

module.exports = {
  // Server settings
  port: process.env.PORT || 8000,
  host: process.env.HOST || '0.0.0.0',
  
  // Paths
  frontendPath: '../frontend',
  backendPath: '../backend',
  
  // Development settings
  hotReload: true,
  watchMode: true,
  
  // TypeScript settings
  typescript: {
    transpile: true,
    cache: true,
  },
  
  // CORS settings
  cors: {
    enabled: true,
    origin: '*',
  },
  
  // Logging
  logging: {
    level: 'info',
    format: 'dev',
  },
};

