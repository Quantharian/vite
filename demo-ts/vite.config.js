/// <reference types="vitest" />
import { defineConfig } from 'vitest/config.js';
import { resolve } from 'path';

export default defineConfig({
    test: {
        // include: ['**/*.test.ts'],
        globals: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
            },
        },
    },
});
