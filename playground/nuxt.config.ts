export default defineNuxtConfig({
  app: {
    head: {
      title: 'Playground',
    },
  },
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@dargmuesli/nuxt-cookie-control'],
  typescript: {
    includeWorkspace: true,
  },

  // module options
  cookieControl: {
    colors: {
      checkboxActiveBackground: '#00A34A', // text-green-600
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          description: {
            de: 'Funkcne desc',
            en: 'Funkcne desc',
          },
          id: 'ncc_f',
          name: {
            de: 'Funkcne',
            en: 'Funkcne',
          },
        },
      ],
      optional: [
        {
          id: 'stat',
          name: 'Stat Cookie',
          links: {
            '/': 'Local Privacy Policy',
            'https://example.com': '3rd Party Privacy Policy',
            'https://example.cop': null,
          },
          targetCookieIds: ['_o', '_p', '_t'],
        },
        {
          id: 'marketing',
          name: 'Marketing Cookie',
          links: {
            '/': 'Local Privacy Policy',
            'https://example.com': '3rd Party Privacy Policy',
            'https://example.cop': null,
          },
          targetCookieIds: ['_a', '_b', '_c'],
        },
      ],
    },
    isCookieIdVisible: true,
    isIframeBlocked: true,
    locales: ['en', 'de'],
    localeTexts: {
      de: {
        iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
      },
    },
  },
})
