
![Nuxt Cookie Control](https://drive.google.com/a/broj42.com/uc?id=12TegiHCNYG1NO84CmQ2CfMAzzn-5o027)
# Nuxt Cookie Control
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

//template
//CookieControl component is registered globally, you don't need to register it anywhere.
<CookieControl/>
//or
<CookieControl></CookieControl>

//to open cookie modal anywhere:
$cookies.modal = true
//or
this.$cookies.modal = true
```
## Slot
If you want to add elements to the cookie bar you can do it like this
```html
<CookieControl>
  <h3>Bar title</h3>
  <p>Bar description (it can be $cookies.text.barDescription also)</p>
  <n-link>Go somewhere</n-link>
</CookieControl>
```

## Props
### Locale
```html
<CookieControl locale="de"/>
```
**Default**: en, 
**Currently available**: 'en', 'de', hr'

## Options
Options in nuxt.config.js
```javascript
modules: [
  ['nuxt-cookie-control', {
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
      checkboxUnactiveBackground:  '#000',
      modalButtonHoverBackground:  '#333',
      checkboxDisabledBackground:  '#ddd',
      checkboxActiveCircleBackground:  '#fff',
      checkboxUnactiveCircleBackground:  '#fff',
      checkboxDisabledCircleBackground:  '#fff',
    },

    //default texts
    text: {
      barTitle: 'Cookies',
      barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
      acceptAll: 'Accept all',
      declineAll: 'Delete all',
      controlCookies: 'Manage cookies',
      unsaved: 'You have unsaved settings',
      close: 'Close',
      save: 'Save',
      necessary: 'Necessary cookies',
      optional: 'Optional cookies',
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
  necessary: {
    cookies: [
      {
        name:  'Default Cookies',
        //if multilanguage
        description: {
          en:  'Used for cookie control.'
        },
        //else
        description:  'Used for cookie control.'
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ]
  },
  optional: {
    cookies: [
      {
        name:  'Google Analitycs',
        //if multilanguage
        description: {
          en:  'Google Analytics is a web analytics ...'
        },
        //else
        description:  'Google Analytics is a web analytics...',
        src:  'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () =>{
          (function(){
            window.dataLayer = window.dataLayer || [];
            function  gtag(){dataLayer.push(arguments);}
            gtag('js', new  Date());
            gtag('config', '<API-KEY>');
          })
        },
        declined: () =>{
        }
      }
    ]
  }
}
```
### Multilanguage
Set **locale** prop
```html
<CookieControl locale="de">
```
**Default**: en, 
**Currently available**: 'en', 'de', hr'

If you don't like default texts you can change them in options (**nuxt.config.js**)
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
