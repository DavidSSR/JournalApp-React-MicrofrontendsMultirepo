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
    },
    exposes: {
      "./AuthRoutes": "./src/routes/AuthRoutes",
      "./CheckingAuth": "./src/ui/components/CheckingAuth",
      "./useForm":"./src/hooks/useForm",
      "./UseCheckAuth":"./src/hooks/useCheckAuth",

    },
    shared: ["react", "react-dom", 'react-router-dom', 'react-redux', 'firebase/auth'],
  }),],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
