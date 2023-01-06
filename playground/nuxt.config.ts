export default defineNuxtConfig({
  modules: [
    [
      '@dargmuesli/nuxt-cookie-control',
      {
        locales: ['en', 'de'],
        cookies: {
          necessary: [
            {
              description: {
                de: 'Dieser Cookie tut etwas.',
                en: 'This cookie does something.',
              },
              name: {
                de: 'Notwendiger Cookie',
                en: 'Necessary Cookie',
              },
              targetCookieIds: ['NEC'],
            },
          ],
          optional: [
            {
              name: 'Optional Cookie',
              id: 'op',
              targetCookieIds: ['_o', '_p', '_t'],
            },
          ],
        },
      },
    ],
  ],
  typescript: {
    includeWorkspace: true,
  },
})
