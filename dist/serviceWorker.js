const staticAssets=["./index.html","./assets/favicon.ico","./css/index.css","./js/index.bundle.js","./js/single.bundle.js"];async function cacheFirst(t){return caches.match(t)||fetch(t)}async function networkFirst(t){const s=await caches.open("dynamic-cache");try{const c=await fetch(t);return s.put(t,c.clone()),c}catch(c){return await s.match(t)}}self.addEventListener("install",(async()=>{(await caches.open("static-cache")).addAll(staticAssets)})),self.addEventListener("fetch",(t=>{const s=t.request;new URL(s.url).origin===location.url?t.respondWith(cacheFirst(s)):t.respondWith(networkFirst(s))}));