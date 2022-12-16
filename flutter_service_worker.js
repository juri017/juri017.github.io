'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "92c7b4855d4733976b59cd5106ab213c",
".git/config": "57ea5bd5fe73930017b6b57acbc90493",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ce058d4e2305610de289e4cffb64e188",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f053f9d0cc9d9ef222ecab3654d6fe4f",
".git/logs/refs/heads/main": "b480403c514c2676ec22a45b59a278b5",
".git/logs/refs/remotes/origin/main": "4e930f4b66ff16a26acd325dac99fae3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/1f3e23c07b724dc875120a148fe6a3b99b0ce4": "302ffa4b7e5f389896dfce21c25a9046",
".git/objects/0d/07a8076d4c5c682ac6d022bd355204cd41799f": "718f25bc238adf034424c59375505e44",
".git/objects/0e/85ab6f07a0e3169fb19869d80430d98722af3d": "8cdac8e755d998b6c13a12283c4fe937",
".git/objects/11/94c1785e3935ef8ff7b234cb61bfd0c8289055": "90bcc84708d810a6c7a5c6d342313e79",
".git/objects/17/45bb8663d9798bc53eb5957cb6a397f6c0a884": "3864454728f698b9cca76d1ccb027085",
".git/objects/18/592512ef6a1fc7ad8aa77ae1d6dd1d310b67f5": "3bdb44c45eca0d0b016312eaecd26c2b",
".git/objects/19/9ab3958bda282937d21f6d2a62522cb1e7ded3": "c686599912cbc50009b545ee18306cb6",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/71fb6b6fb0cecb5b41a8af64980c7169012a4d": "b2650f0fecbf0575a02715da34667cff",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/6ea8d4481149fa4d2fd38dfb56d968f7c6a3cf": "1dc6d8d918589eeb55b407fd9db4e311",
".git/objects/3d/05bbe80582197bec511b5c30fec956ac8a8d78": "bb6eda4c207c2c7001f08e9f49257ed2",
".git/objects/3e/39cfd7f10bcd54d7e933ca0c0fbb15b938a1ff": "0bd3454f61688beb027a6153e336d90d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/ae3fb84d752e9e3246556df498c7e02282a8cd": "d899e038beb6ce61e55bd8a58fd21d2c",
".git/objects/43/6e27adfdb79fab8a5d2c016190221a937c9077": "11892e5e116abc716011fbbab1c9b7f2",
".git/objects/45/08e24654b255d41ee05094be8eedd144c75b81": "a4d8805dec35d35d0a08aa2deff4570b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/67/a0aff95b28f194ec9b22ae3f66553fec3d5aff": "07bdad61ee28fc724689591414c2c064",
".git/objects/6b/cef55b7c98b154d1c32766fbad7be275913d96": "26a8ca01daa62f9a68d073403280d0cb",
".git/objects/6b/e57fdbbe0f125fd53a5f35f83ecd75a70819d0": "f93c01cd5bd647fc2a5d59e04d2630e9",
".git/objects/6e/e2b37ddc3e4b9f657fc131598fff87b048c3f5": "17e9fdea25d524b047f21c40ef66df24",
".git/objects/72/a722a4bcc9b07105c27027388f5a6bec22628e": "a9ffcab4ae4e05ee8867df228900dd13",
".git/objects/75/91bf7c2a15d1cf9f4fc978fe87e0d6d652828b": "b51266c2b926e5ab79a6c422bf17cfc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/aa4f6f9fa8597e10cd439f39504fef6b2fe66e": "21d5bfcc5032fda30dfb7cac6c6294bb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/abf5f39bd2089ff6a3ba211da16513a534a5e8": "404ca1d691be234243ef4bbaac22a5e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/d596c711eff5b08819e8b8c83b2540eb4acaa9": "29cc35d1973d6022a191ad12ed7776d7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/04f0db14dd1f63fdc9925413dc848a1423b925": "ccb52a7a7992ba144b5422e9b98df57c",
".git/objects/a0/f5db390ac870fb7dd3ac348ca594cbc463d2f5": "569dd25f9dd941a27ebd9043cbd4bb04",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/95b94901a5616e351f0d0024ef46814dbaaf10": "bda4ba5e49ad72edc0ff51884a4b46dd",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/ab38f6179665cb43dba9b28e0192a573cb181f": "bd57d3871225caefa23dfabdc1901f3b",
".git/objects/d4/0a92ecd1fdea4e2e7af32c100acc15f3afd5f2": "705b53af7e9964719674d6751ffe1380",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/422a3d50b293a577616a75abb27b974cabcda3": "cadbc0b8fbe1fadad5e4a2f60df607fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/0b6c42e5c74e358a3958462a3da0763e107935": "feda0b8f771ce7438084e31755d14720",
".git/refs/heads/main": "7892bb5a8dd044e294776e358f4ec690",
".git/refs/remotes/origin/main": "7892bb5a8dd044e294776e358f4ec690",
"assets/AssetManifest.json": "b297131bebbb3881ecde22bd55bdd6da",
"assets/assets/images/Logo.png": "e251eba44f47c8dfbb0590452e2290d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d3f4d14111dfaf9a861b63067dc56b52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "16c95696ad814b624d400995b193b4ca",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-icon-144x144.png": "25c791bf5bca0e11db98272677e245c5",
"icons/android-icon-192x192.png": "7c35e1bbc4e1816bab52af2efb6af00c",
"icons/android-icon-36x36.png": "b879b8bdc937060e44d2c15917437481",
"icons/android-icon-48x48.png": "8705361dbc1f6ff1c14487daac23ab4b",
"icons/android-icon-72x72.png": "d7c43b69651e7bf199e322385617bc4d",
"icons/android-icon-96x96.png": "7bb3385a15b5f76cdfba38ab50b11728",
"icons/apple-icon-114x114.png": "1071648946ee742880ce7eff88a4816a",
"icons/apple-icon-120x120.png": "dfeb9889baf1cfa9398b97ac60270296",
"icons/apple-icon-144x144.png": "25c791bf5bca0e11db98272677e245c5",
"icons/apple-icon-152x152.png": "b10bf9dd0ae64c909c8c5d8f7a79e855",
"icons/apple-icon-180x180.png": "789397e1ac8f6f836674bad7b5bef948",
"icons/apple-icon-57x57.png": "ecb3a1436f79c10a62c7450b9bceefb5",
"icons/apple-icon-60x60.png": "e9e15045008b3c73e7663019d339065a",
"icons/apple-icon-72x72.png": "d7c43b69651e7bf199e322385617bc4d",
"icons/apple-icon-76x76.png": "1a25cb9bf5debea3cede0574e58a22d4",
"icons/apple-icon-precomposed.png": "9d1c5536620cfc153c2802cb72713c74",
"icons/apple-icon.png": "9d1c5536620cfc153c2802cb72713c74",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "302009b79812af6feb56cbd20a605726",
"icons/favicon-32x32.png": "b117890ea42fcf9333282da7fe9bbea9",
"icons/favicon-96x96.png": "7bb3385a15b5f76cdfba38ab50b11728",
"icons/favicon.ico": "5da13842886d36333cc746afde04c7a5",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "25c791bf5bca0e11db98272677e245c5",
"icons/ms-icon-150x150.png": "253db67358010acecd5cb373f3fb5f06",
"icons/ms-icon-310x310.png": "766ea47ad557e95c1312a3af8e74963f",
"icons/ms-icon-70x70.png": "2f1a2ebf2910146ef9b9693c8655cdf8",
"index.html": "8b2be0a1b72a8d9683e3ec2905fd243f",
"/": "8b2be0a1b72a8d9683e3ec2905fd243f",
"main.dart.js": "874b7b4e8fb98dbe9914c8b7de449cdc",
"manifest.json": "1fb89c3a2000c175706e24e2db27886b",
"version.json": "bee4ddfad5c4b0d9185dd05d4b60b838"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
