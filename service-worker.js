"use strict";var precacheConfig=[["/index.html","3dfe26fceb773a43345e8d08fbc71d8e"],["/static/css/main.ef7e144b.css","76b8263e21091bf7d245e549006b7867"],["/static/js/main.da071c40.js","1b07f1f7608621b426fce26c6158825e"],["/static/media/Roboto-Black.313a6563.woff","313a65630d341645c13e4f2a0364381d"],["/static/media/Roboto-Black.59eb3601.woff2","59eb3601394dd87f30f82433fb39dd94"],["/static/media/Roboto-BlackItalic.cc2fadc3.woff","cc2fadc3928f2f223418887111947b40"],["/static/media/Roboto-BlackItalic.f75569f8.woff2","f75569f8a5fab0893fa712d8c0d9c3fe"],["/static/media/Roboto-Bold.50d75e48.woff","50d75e48e0a3ddab1dd15d6bfb9d3700"],["/static/media/Roboto-Bold.b52fac2b.woff2","b52fac2bb93c5858f3f2675e4b52e1de"],["/static/media/Roboto-BoldItalic.4fe0f73c.woff","4fe0f73cc919ba2b7a3c36e4540d725c"],["/static/media/Roboto-BoldItalic.94008e69.woff2","94008e69aaf05da75c0bbf8f8bb0db41"],["/static/media/Roboto-Light.c73eb1ce.woff","c73eb1ceba3321a80a0aff13ad373cb4"],["/static/media/Roboto-Light.d26871e8.woff2","d26871e8149b5759f814fd3c7a4f784b"],["/static/media/Roboto-LightItalic.13efe6cb.woff","13efe6cbc10b97144a28310ebdeda594"],["/static/media/Roboto-LightItalic.e8eaae90.woff2","e8eaae902c3a4dacb9a5062667e10576"],["/static/media/Roboto-Medium.1d659482.woff","1d6594826615607f6dc860bb49258acb"],["/static/media/Roboto-Medium.90d16760.woff2","90d1676003d9c28c04994c18bfd8b558"],["/static/media/Roboto-MediumItalic.13ec0eb5.woff2","13ec0eb5bdb821ff4930237d7c9f943f"],["/static/media/Roboto-MediumItalic.83e114c3.woff","83e114c316fcc3f23f524ec3e1c65984"],["/static/media/Roboto-Regular.35b07eb2.woff","35b07eb2f8711ae08d1f58c043880930"],["/static/media/Roboto-Regular.73f0a88b.woff2","73f0a88bbca1bec19fb1303c689d04c6"],["/static/media/Roboto-RegularItalic.4357beb8.woff2","4357beb823a5f8d65c260f045d9e019a"],["/static/media/Roboto-RegularItalic.f5902d5e.woff","f5902d5ef961717ed263902fc429e6ae"],["/static/media/Roboto-Thin.ad538a69.woff2","ad538a69b0e8615ed0419c4529344ffc"],["/static/media/Roboto-Thin.d3b47375.woff","d3b47375afd904983d9be8d6e239a949"],["/static/media/Roboto-ThinItalic.5b4a33e1.woff2","5b4a33e176ff736a74f0ca2dd9e6b396"],["/static/media/Roboto-ThinItalic.8a96edbb.woff","8a96edbbcd9a6991d79371aed0b0288e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),o=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var o="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});