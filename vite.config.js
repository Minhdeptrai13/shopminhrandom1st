import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [], // ❌ bỏ trống, không cần entry
            refresh: true,
        }),
    ],
});
