// Dit bestand hoort in de root van de `strapi-sbb` map.
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/config/**', '**/.env'],
    },
  },
});
