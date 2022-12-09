import {defineConfig} from "vite";
import solidStart from "solid-start/vite";
import solid from "vite-plugin-solid"

const solidPlugin = process.env.STORYBOOK ? solid() : solidStart()

export default defineConfig({
  plugins: [solidPlugin]
})