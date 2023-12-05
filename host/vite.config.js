import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [react(),
  federation({
    name: "app",
    remotes: {
      remoteJournal: "http://localhost:5001/assets/remoteEntry.js",
      remoteAuth: "http://localhost:5002/assets/remoteEntry.js",
      remoteStore: "http://localhost:5003/assets/remoteEntry.js",
    },
    shared: ["react", "react-dom", 'react-router-dom', 'react-redux'],
  }),],
})
