import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  plugins: [
    '../dist/index.mjs'
  ]
})