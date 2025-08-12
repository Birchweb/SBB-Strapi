export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Hier overschrijven we de publieke URL voor de Strapi-instantie
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: false,
  },
  admin: {
    // Deze admin URL is cruciaal voor Codespaces
    // We gebruiken een omgevingsvariabele om de publieke URL te specificeren
    url: env('ADMIN_URL', '/admin'), 
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'een-lange-sterke-geheime-sleutel'),
    },
    watchIgnoreFiles: ['**/config/sync/**', '**/.env'],
  },
});
