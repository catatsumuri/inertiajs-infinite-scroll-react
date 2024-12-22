import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    server: {
        hmr: {
            host: process.env.VITE_HMR_HOST,
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
