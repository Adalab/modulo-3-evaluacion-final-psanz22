import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-psanz22/",
  server: { watch: { usePolling: true } },
});
