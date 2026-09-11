import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-router') || id.includes('/react/') || id.includes('/react-dom/')) return 'vendor_react';
            if (id.includes('@headlessui') || id.includes('@heroicons')) return 'vendor_ui';
            if (id.includes('react-helmet-async')) return 'vendor_seo';
            if (id.includes('@vercel')) return 'vendor_analytics';
            if (id.includes('@fortawesome') || id.includes('fontawesome')) return 'vendor_icons';
          }
        },
      },
    },
  },
})
