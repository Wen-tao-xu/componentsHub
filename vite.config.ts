import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { GieResolver } from "@giegie/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [GieResolver(),ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [GieResolver(),ElementPlusResolver()],
    }),
  ],
});
