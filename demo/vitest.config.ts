import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import angular from "@analogjs/vite-plugin-angular";

//we use only browser config since the lib is mostly for graphical components and hence heavily depends on the DOM

export default defineConfig(({mode})=>({
    plugins: [
        angular()
    ],
    resolve: mode === 'development'
        ? {
            alias: {
                'ngx-emfular-integration': '../src/public-api.ts'
            }
        }
        : {},
    optimizeDeps: {
        include: [
            '@angular/compiler',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/core/testing',
            '@angular/platform-browser-dynamic/testing',
            'zone.js',
            'zone.js/testing',
            'ngx-emfular-diagram',
            '@angular/platform-browser',
            '@angular/router',
            'shiki'
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: ['.']
            }
        }
    },

    test: {
        include: ['src/**/*.spec.ts'],
        exclude: [
            'node_modules/**',
            'dist/**'
        ],
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        browser: {
            enabled: true,
            provider: playwright(),
            // https://vitest.dev/config/browser/playwright
            instances: [
                {browser: 'chromium'}
            ],
        },
    },
}))
