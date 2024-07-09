import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        watch: {
            usePolling: true
          }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        server: {
          deps: {
            inline: ['vuetify'],
          },
        },
      },
});
