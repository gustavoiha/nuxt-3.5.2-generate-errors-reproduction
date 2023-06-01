import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  ssr: true,
  hooks: {
    'nitro:config' (nitroConfig) {
      nitroConfig.prerender.routes.push('/test/1', '/test/2')
    }
  }
})
