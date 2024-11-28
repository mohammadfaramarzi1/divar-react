import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const paths = [
  "src",
  "services",
  "utils",
  "assets",
  "components",
  "configs",
  "layouts",
  "pages",
  "router",
  "styles ",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce((acc, cur) => ({
        ...acc,
        [cur]: `/${cur === "src" ? cur : "src/" + cur}`
      }), "")
    },
  },
});
