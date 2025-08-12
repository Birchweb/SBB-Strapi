import path from 'path';

export default ({ env }) => {
  const client = 'sqlite';

  const connections = {
    // We forceren de client om SQLite te gebruiken
    sqlite: {
      connection: {
        // Gebruik een absoluut pad om de locatie van de database te garanderen
        filename: '/workspaces/SBB-Strapi/strapi-sbb/.tmp/data.db',
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
