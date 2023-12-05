import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: "remote_app",
    filename: "remoteEntry.js",
    remotes: {
      remoteStore: "http://localhost:5003/assets/remoteEntry.js",
      remoteAuth: "http://localhost:5002/assets/remoteEntry.js",
    },
    exposes: {
      "./JournalRoutes": "./src/routes/JournalRoutes",
    },
    shared: ["react", "react-dom", 'react-router-dom', 'react-redux'],
  }),],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
