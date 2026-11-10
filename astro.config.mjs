// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidgraciano.vercel.app',
  // El caso de Smart Decisions Platform se retiró (software bajo acuerdo de exclusividad).
  redirects: {
    '/casos/rag-y-agentes-con-mcp': '/',
    '/en/cases/rag-and-mcp-agents': '/en/',
  },
});
