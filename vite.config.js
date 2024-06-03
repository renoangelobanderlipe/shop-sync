import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    // build: {
    //     minify: process.env.APP_ENV === 'production' ? 'esbuild' : false,
    //     cssMinify: process.env.APP_ENV === 'production',
    // },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
            "@pages": path.resolve(__dirname, "./resources/js/pages"),
            "@components": path.resolve(__dirname, "./resources/js/components"),
            "@assets": path.resolve(__dirname, "./resources/js/assets"),
            "@hooks": path.resolve(__dirname, "./resources/js/hooks"),
            "@routes": path.resolve(__dirname, "./resources/js/routes"),
            "@services": path.resolve(__dirname, "./resources/js/services"),
            "@utils": path.resolve(__dirname, "./resources/js/utils"),
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/main.jsx"],
            refresh: true,
        }),
        react(),
    ],
});
