import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages publica /docs diretamente, inclusive a pasta /public.
  // Desativar o tratamento especial mantém os mesmos caminhos no Vite local.
  publicDir: false,
});
