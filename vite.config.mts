import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    nodePolyfills({ exclude: ['fs', 'child_process'] }),
    react({ jsxImportSource: '@emotion/react' }),
  ],
  base: './',
})
