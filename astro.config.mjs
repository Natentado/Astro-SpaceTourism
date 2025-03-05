// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: false,
  },
  experimental: {
    svg: true,
  },
  integrations: [preact()]
});