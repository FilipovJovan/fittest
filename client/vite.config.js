import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "/logo-RMM5KPhj.png",
        "/robots.txt",
        "/apple-touch-icon.png",
      ],
      manifest: {
        name: "My Fitness App",
        short_name: "FitnessApp",
        description: "Your personal fitness and diet coach.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-500x500.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-500x500.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      "/api/v1": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
      },
    },
  },
});
