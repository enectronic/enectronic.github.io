"use strict";var CACHE_NAME="liky_cache_v7",urlsToCache=["/index.html","/css/main.css","/js/min/main-min.js"];self.addEventListener("activate",function(e){var n=[CACHE_NAME];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){return-1===n.indexOf(e)?caches["delete"](e):void 0}))}))}),self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){return n?n:fetch(e.request)}))});