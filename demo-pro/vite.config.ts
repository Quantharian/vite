import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                main1: resolve(__dirname, 'pages/page1.html'),
                main2: resolve(__dirname, 'page2/index.html'),
            },
        },
    },
    //
});
