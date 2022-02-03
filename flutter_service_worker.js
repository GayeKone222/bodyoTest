'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "20bb9a0cbcd418779df56c5d245e2a73",
"/": "20bb9a0cbcd418779df56c5d245e2a73",
"style.css": "2f2b8df3e812b26adac5275775f6970c",
"version.json": "bca91e5021e660d0005f86d7b00086f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "d6bd847a2869e6ed42313d3bbe81ecbf",
"assets/AssetManifest.json": "99bc8bed95a94c61b2cdd3e7414c5184",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/patients-risque.svg": "64f445ef09a31e8cd5a73882fb952328",
"assets/assets/images/ro.png": "2d2110917cca1335c243af3f201dfb3d",
"assets/assets/images/go.png": "08696bab7103bf97a8e4132050af10dc",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/rt.png": "5aa02a1aea1df622c8d4037531f223d9",
"assets/assets/images/r%25C3%25A9glages.svg": "0781d756904fd60c724587d3cb55ee5a",
"assets/assets/images/back.svg": "9dea038809d30fbea6ccbad706b7c836",
"assets/assets/images/delete.svg": "b709dde47e8704e5e0c92c6c06f43cf3",
"assets/assets/images/happy.svg": "709d7812bc8511a7be6b0afb3edc3656",
"assets/assets/images/mdp_image.svg": "f2a2365dc8665066f2b9c3de01ba9ff0",
"assets/assets/images/mail.svg": "45e0d5e6c2525234d3ebe9b1b21dafaa",
"assets/assets/images/yt.png": "2fac44dbab29bcc6ea708e7f912b5017",
"assets/assets/images/bodyo_logo.png": "f8c6657248d3cf09792ea645b46d7694",
"assets/assets/images/localisation.svg": "ec093c52fe9b46b5a3cdbbe0251634df",
"assets/assets/images/infirmiere.svg": "65aee3e84f9c8ede5443169aa7a4a3db",
"assets/assets/images/good.svg": "bcc0254b659002fa390ec9fea41fc3b0",
"assets/assets/images/support.svg": "689d7ccc9128bb82e0951050a932b24a",
"assets/assets/images/pdf.svg": "dd125eac9adad0e269be7311a535533a",
"assets/assets/images/coeur-big.svg": "046ea7ab82f18509793521848b0e4a78",
"assets/assets/images/jpg.svg": "dc8d24a92aff9230777c2f817ba2e338",
"assets/assets/images/search.svg": "48e2ea1df1d0f407f951fd58738530af",
"assets/assets/images/-.svg": "f5bc25fee8c2bf51802bd7bf4b5c7f41",
"assets/assets/images/skills.svg": "105d180bcd1f405a757f2afc1397a08b",
"assets/assets/images/kin%25C3%25A9.svg": "ee84840d1f000f3628e53d7b23963a8c",
"assets/assets/images/tarifs.svg": "12a1e466bf436e899f59cec5966def38",
"assets/assets/images/Agenda.svg": "edc6c8dca3b7f8439f3d466746733cff",
"assets/assets/images/+.svg": "1591be8493088cad2fcb405a9a3e708c",
"assets/assets/images/bad.svg": "a46d2b5db43eae9224ad53d4feb81cc7",
"assets/assets/images/Nutritioniste.svg": "d965430480df6e5ae5939524c4d82602",
"assets/assets/images/left-align.svg": "4c9ae82893677fb0393f231b855b9d3b",
"assets/assets/images/phone.svg": "371e973c1c232fcee241b070f6079860",
"assets/assets/images/logout.svg": "abba86fe5ce93acece04a056628cd2a8",
"assets/assets/images/notifs.svg": "69ebe2cd6c5f9a6b7cff316aed2d7d69",
"assets/assets/images/bt.png": "dba5e87b2497a21fd2b9455583718361",
"assets/assets/images/logo-bodyo.svg": "3a8d44418e237c954d83b96bb82e9c64",
"assets/assets/images/pod.png": "209eddeb3b9d57b859b97f80991b9e66",
"assets/assets/images/Dashboard/patients%2520malade.svg": "0b10437f9e58aec2cdb2dc822ff2a2e6",
"assets/assets/images/Dashboard/envoyer-message.svg": "72e88bea13adc432b9bc1cdfa98e7a0f",
"assets/assets/images/Dashboard/patients-risque.svg": "64f445ef09a31e8cd5a73882fb952328",
"assets/assets/images/Dashboard/patient-vaccin%25C3%25A9s.svg": "5185af3a2e987e110c988d2893bca3f4",
"assets/assets/images/Dashboard/menu.svg": "6d02e787e5e65ef9a0c07b4ec7a3bd69",
"assets/assets/images/Dashboard/ordonnances.svg": "d94f41d5b05e92f152e33eba713e0900",
"assets/assets/images/Dashboard/ordonnance-attente.svg": "3f546abaaa74eb24e35095615e53419b",
"assets/assets/images/Dashboard/new-patient.svg": "89779583ffced36b7e0b7bf6ca2bf033",
"assets/assets/images/Dashboard/revenues.svg": "8ff7f77bb4a12e5b95ab2f7b489b3fec",
"assets/assets/images/Dashboard/total-patient.svg": "acaf9119b2e58ebe81ce5fae7e335031",
"assets/assets/images/Dashboard/patients-saint.svg": "3768024f8e51879267b4dcab2a9e6074",
"assets/assets/images/Dashboard/covid.svg": "55ac2254e77ad5106386c75542e398ce",
"assets/assets/images/logo.svg": "328ca2f6bb89aad77bb523250f0f0200",
"assets/assets/images/envelope.svg": "fe88acb88e5d8e05be974c3698420e5b",
"assets/assets/images/patients.svg": "be8106cefa5458e693e7b01793c65795",
"assets/assets/images/exemple.png": "ed6209ea7f08dac3c2eb1be8dd1afd40",
"assets/assets/images/complete.svg": "58fdb29ee6a578105a0b22e97e2be2bd",
"assets/assets/images/diplomes.svg": "74a085b325463ff3749a725bbfc1783f",
"assets/assets/images/liste.svg": "a7c7362f17a3efb9acf1f841f9964df8",
"assets/assets/images/mdp.svg": "638ded01e936e2971cbbf21cc3bce633",
"assets/assets/images/enveloppe.svg": "4385cbcec7e715bd319c6bdf60d7d5ed",
"assets/assets/images/gt.png": "0c4cd0387e0db5376fe6a20fef8b2da7",
"assets/assets/images/bt2.png": "b43b8e20074a8f253917e58dec77be53",
"assets/assets/images/calendar.svg": "b4f10125a25a22c41656903f2022f7ec",
"assets/assets/images/messagerie.svg": "ef2988851375c6526c1768d2fc8c5b68",
"assets/assets/images/Coach.svg": "c347ac0037e71f3fdaa39c0941f7385e",
"assets/assets/images/turn.svg": "d10da6b5940804ca5375684a582df3e1",
"assets/assets/images/autres.svg": "99fbaaf5d97e426ca71cf8b4f0db8c55",
"assets/assets/images/dashboard.svg": "6f24ebbdea0b5aaa5976544632b3ab7f",
"assets/assets/images/sensation.svg": "ebce1af6834baae6fbbb110eae477218",
"assets/assets/images/yo.png": "5152284c0b9230eb55792f70d95fb2ac",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/covid.svg": "55ac2254e77ad5106386c75542e398ce",
"assets/assets/images/pp-blank.svg": "5a2e99cfdb5ff21ef72f34cec592bea0",
"assets/assets/images/medecins.svg": "cbf42c836bc388f62c0cbf886903538a",
"assets/assets/images/sample.jpg": "92f4ee5c175938383daa3a537ff30389",
"assets/assets/Profilpatient/birthday.svg": "9c4b86174838c91108e0a87b5d60d3fc",
"assets/assets/Profilpatient/medicament%2520.svg": "039dc46c4ad083296ce4c990e3a42de0",
"assets/assets/Profilpatient/happy.svg": "709d7812bc8511a7be6b0afb3edc3656",
"assets/assets/Profilpatient/mail.svg": "b170d9bacea9a349074b030a4360f705",
"assets/assets/Profilpatient/localisation.svg": "86e322ed79c1dbdc154a6ed6e0adcfdb",
"assets/assets/Profilpatient/good.svg": "bcc0254b659002fa390ec9fea41fc3b0",
"assets/assets/Profilpatient/activit%25C3%25A9.svg": "0080d9eab48eba8769a42cb8818bc504",
"assets/assets/Profilpatient/oeil.svg": "48de673b41621829eda1c4df3adf222d",
"assets/assets/Profilpatient/thyroide.svg": "cee48aaa89bb0dcb25794678f616a397",
"assets/assets/Profilpatient/medecin.svg": "9f92044f3aeae56bf05fb953f8041d0f",
"assets/assets/Profilpatient/bad.svg": "a46d2b5db43eae9224ad53d4feb81cc7",
"assets/assets/Profilpatient/phone.svg": "912770de70cde6711ca952551eb1f261",
"assets/assets/Profilpatient/fumeur.svg": "51e66b7d53db7d578bde576b96e0ca6c",
"assets/assets/Profilpatient/Alcool.svg": "988834f5ddc4d31b3d3c1be35c6b6e1b",
"assets/assets/Profilpatient/organne.svg": "5973e88875b458754d1c1cfde0f997ea",
"assets/assets/Profilpatient/midi.svg": "596bca727ee122bfbb8e284bd2df3893",
"assets/assets/Profilpatient/matin.svg": "080c491bc3f87b4a2b87ff359bf4110d",
"assets/assets/Profilpatient/probemes-cardiauqe.svg": "0af035de3c962a6fab8d09163e0c81fa",
"assets/assets/Profilpatient/taille.svg": "acb9fa0aaca924b4914966eb7d46bc13",
"assets/assets/Profilpatient/sang.svg": "d37f32a241e6e40865ecddaec212a9c8",
"assets/assets/Profilpatient/soir.svg": "aebf9f5432367eab54ee49d4bd437752",
"assets/assets/Profilpatient/allergies.svg": "d3deb8e3a440acfd1b49d2668cefe15c",
"assets/assets/Profilpatient/poumons.svg": "f9ec2381cd2a1d759f161461254cca1d",
"assets/assets/Profilpatient/hospitalisation.svg": "63640b4f9112a97d3be6add9e09b1b24",
"assets/assets/Profilpatient/operation.svg": "175ac11933d3c5b3d89f5b03c8592b78",
"assets/assets/Profilpatient/sensation.svg": "ebce1af6834baae6fbbb110eae477218",
"assets/assets/Profilpatient/ajouter-medicament.svg": "7b56c9df0e61fb5d04036fdd3f883cfb",
"assets/assets/fonts/SoinSansNeue-Bold.otf": "e83f822545c8519666c3351a1ea1068c",
"assets/assets/fonts/SoinSansNeue-Roman.otf": "c71bc4cbce1002698d82dc8fd11ae0ab",
"assets/assets/fonts/SoinSansNeue-Medium.otf": "421ac161fe031f73b47f52fa16326389",
"assets/FontManifest.json": "9e89eab2cd434222e3cb021762eb2bea",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/apikey.json": "ed930a7d6aa0ef6d8cb8b09a8152cc90",
"manifest.json": "3b4403ef2e7b25f36c6433c2091a8db3",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"main.dart.js": "0cd383bc8d85bdbe296a2bbf8a62ac67",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
