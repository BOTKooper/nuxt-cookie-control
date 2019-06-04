
![Nuxt Cookie Control](https://drive.google.com/a/broj42.com/uc?id=12TegiHCNYG1NO84CmQ2CfMAzzn-5o027)
# Nuxt Cookie Control
Try it out here:
[Nuxt.js Cookie Control](https://codesandbox.io/s/vkwqmm577)
## Usage
| npm install nuxt-cookie-control | yarn add nuxt-cookie-control |
|--|--|
```javascript
//nuxt.config.js
modules: [
  'nuxt-cookie-control'
]
//or
modules: [
  ['nuxt-cookie-control', {
    //your options
  }]
]

//to open cookie modal anywhere:
$cookies.modal = true
//or
this.$cookies.modal = true
```
```html
<!--template-->
<!--
  CookieControl component is registered globally,
  you don't need to register it anywhere.
-->
<CookieControl/>
<!--or-->
<CookieControl></CookieControl>
```
## Slot
If you want to add elements to the cookie bar you can do it like this
```html
<CookieControl>
  <h3>Bar title</h3>
  <p>Bar description (you can use $cookies.text.barDescription)</p>
  <n-link>Go somewhere</n-link>
</CookieControl>
```

## Props
### Locale
```html
<CookieControl locale="de"/>
```
#### Default: en,
#### Currently available: 
- en
- de
- it
- es
- fr
- hr

## Options
Options in nuxt.config.js
```javascript
modules: [
  ['nuxt-cookie-control', {
    //block iframes to prevent them from adding additional cookies
    blockIframe: true,
    //position of cookie bar:
    //'top-left', 'top-right', 'top-full',
    //'bottom-left', 'bottom-right', 'bottom-full'
    barPosition: 'bottom-right',
    //default colors
    colors: {
      barTextColor:  '#fff',
      modalOverlay:  '#000',
      barBackground:  '#000',
      barButtonColor:  '#000',
      modalTextColor:  '#000',
      modalBackground:  '#fff',
      modalOverlayOpacity:  0.8;
      modalButtonColor: '#fff',
      modalUnsavedColor:  '#fff',
      barButtonHoverColor:  '#fff',
      barButtonBackground:  '#fff',
      modalButtonHoverColor:  '#fff',
      modalButtonBackground:  '#000',
      barButtonHoverBackground:  '#333',
      checkboxActiveBackground:  '#000',
      checkboxInactiveBackground:  '#000',
      modalButtonHoverBackground:  '#333',
      checkboxDisabledBackground:  '#ddd',
      checkboxActiveCircleBackground:  '#fff',
      checkboxInactiveCircleBackground:  '#fff',
      checkboxDisabledCircleBackground:  '#fff',
    },

    //default texts
    text: {
      barTitle: 'Cookies',
      barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
      acceptAll: 'Accept all',
      declineAll: 'Delete all',
      manageCookies: 'Manage cookies',
      unsaved: 'You have unsaved settings',
      close: 'Close',
      save: 'Save',
      necessary: 'Necessary cookies',
      optional: 'Optional cookies',
      functional: 'Functional cookies',
      blockedIframe: 'To see this, please enable functional cookies',
      here: 'here'
    }
  ]
]

//for multilanguage see - Multilanguage
```
without options (Simple)
```javascript
modules: [
'nuxt-cookie-control'
]
```
### Cookies
```javascript
modules: [
'nuxt-cookie-control'
]
...
...
...
cookies: {
  necessary: [
    {
      name:  'Default Cookies',
      //if multilanguage
      description: {
        en:  'Used for cookie control.'
      },
      //else
      description:  'Used for cookie control.',
      cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
    }
  ],
  optional: [
    {
      name:  'Google Analitycs',
      //if multilanguage
      description: {
        en:  'Google GTM is ...'
      },
      //else
      description:  'Google GTM is...',
      src:  'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
      async:  true,
      cookies: ['_ga', '_gat', '_gid'],
      accepted: () =>{
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
      },
      declined: () =>{
      }
    }
  ]
}
```
### Multilanguage
Set **locale** prop
```html
<CookieControl locale="de"/>
```
#### Default: en,
#### Currently available: 
- en
- de
- it
- es
- fr
- hr

If you don't like the default texts you can change them in options (**nuxt.config.js**)
```javascript
text: {
  locale: {
    en: {
      barTitle:  'Cookies Different',
      barDescription:  'We use our own cookies and third-party...',
    },

    de: {
      ...
    }
  }

  //this will override locale text
  barTitle: 'Override Title'
}
```
