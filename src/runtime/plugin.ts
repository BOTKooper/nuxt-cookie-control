import { ref } from 'vue'
import { setConsent } from './methods'
import { Cookie, State } from './types'

import { defineNuxtPlugin } from '#imports'
import moduleOptions from '#build/cookie-control-options'

export default defineNuxtPlugin((_nuxtApp) => {
  const isConsentGiven = ref<boolean>()
  const cookiesEnabled = ref<Cookie[]>([])
  const cookiesEnabledIds = ref<string[]>([])
  const isModalActive = ref<boolean>()

  const state = {
    isConsentGiven,
    cookiesEnabled,
    cookiesEnabledIds,
    isModalActive,
    moduleOptions,
  } as State

  setConsent({
    isInit: !process.client,
    isConsentGiven,
    moduleOptions,
    cookiesEnabled,
    cookiesEnabledIds,
  })

  return {
    provide: {
      cookies: state,
    },
  }
})
