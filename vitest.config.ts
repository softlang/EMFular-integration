import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import angular from "@analogjs/vite-plugin-angular";

//we use only browser config since the lib is mostly for graphical components and hence heavily depends on the DOM

export default defineConfig({
    plugins: [
        angular()
    ],
    optimizeDeps: {
        include: [
            '@angular/compiler',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/core/testing',
            '@angular/platform-browser-dynamic/testing',
            'zone.js',
            'zone.js/testing'
        ]
    },
    test: {
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
})
