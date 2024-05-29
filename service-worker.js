/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "55381029a4bd14a0f85dada20b3164b0"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "89512a55056d2c66a695b9f3781483d9"
  },
  {
    "url": "assets/css/0.styles.d6ccfc65.css",
    "revision": "8d4fc21c332db405e4adfcda36efb8c2"
  },
  {
    "url": "assets/img/get_all.51b3bade.png",
    "revision": "51b3bade81b66b9e6262b3e507433d72"
  },
  {
    "url": "assets/img/post.c8815e86.png",
    "revision": "c8815e860062546f7d570c642094b0d2"
  },
  {
    "url": "assets/img/put.f6ea3ac5.png",
    "revision": "f6ea3ac5127c4c7b49e4265baf76b1c4"
  },
  {
    "url": "assets/img/relational_scheme.50c04084.png",
    "revision": "50c0408448f359da6c0793e327723a83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.d1ab44fb.png",
    "revision": "d1ab44fbfeb0917bf042371d14a4014b"
  },
  {
    "url": "assets/js/1.f42d559c.js",
    "revision": "6e56be7a0573ab4abea05d05f2834989"
  },
  {
    "url": "assets/js/10.097c4cdc.js",
    "revision": "23ac23efd98eebcf0f5663e3e14dd49b"
  },
  {
    "url": "assets/js/13.049a8eeb.js",
    "revision": "3fd6e4912b9cab592d5d630cea9cd3a5"
  },
  {
    "url": "assets/js/14.43a7b754.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.ed37bd58.js",
    "revision": "390a608774f894a9e876c484358d1d0e"
  },
  {
    "url": "assets/js/16.bd0e684d.js",
    "revision": "6479af5c2264c96ad6b6cda554d2dcfd"
  },
  {
    "url": "assets/js/17.12c58c73.js",
    "revision": "b9b5d97ecd8029a5d4d995f6cdd51757"
  },
  {
    "url": "assets/js/18.59921fba.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.b3fcf576.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.398adf72.js",
    "revision": "55158a31136055260bbdd1985a16d8e9"
  },
  {
    "url": "assets/js/20.24174089.js",
    "revision": "0e3d5d085509cbdd07267f277cccea03"
  },
  {
    "url": "assets/js/21.580b3db8.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.3b8eb9fa.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.b8f503c4.js",
    "revision": "a929961ff0642b06d76701132958af5e"
  },
  {
    "url": "assets/js/25.f6d2044a.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.a2bea33f.js",
    "revision": "dd10a9d7faa030ff1279ccf8d690c5bb"
  },
  {
    "url": "assets/js/27.35d6e3a6.js",
    "revision": "ec59beb9f1062f53fc36361248a2e157"
  },
  {
    "url": "assets/js/28.bd47a65c.js",
    "revision": "9fbb4aeea0fd3fca3796015a5ca7a0aa"
  },
  {
    "url": "assets/js/29.cd61d8a6.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.fe685aea.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.945c1a65.js",
    "revision": "cd0f0b7c70c72941eba1f0f5ee205b03"
  },
  {
    "url": "assets/js/31.a0e6f086.js",
    "revision": "1fbb5e2c00468da8d838084f11af525d"
  },
  {
    "url": "assets/js/32.fd532e2c.js",
    "revision": "b91bf7a2e6d588e2bf02083546fed999"
  },
  {
    "url": "assets/js/33.f8b18207.js",
    "revision": "619990a40a01a531e479b34c0aded6d3"
  },
  {
    "url": "assets/js/34.28e3a07b.js",
    "revision": "ffe33a63c1caafd39f5945f19ebc8ae6"
  },
  {
    "url": "assets/js/35.33e09841.js",
    "revision": "e92015d089df7d1b5cd14e7ab1da06e6"
  },
  {
    "url": "assets/js/36.42e374b0.js",
    "revision": "00c43b93aba8a72e0b73651b8cef255d"
  },
  {
    "url": "assets/js/37.eca50f9f.js",
    "revision": "da5932ea6939ef1acc2e348b60ffeb78"
  },
  {
    "url": "assets/js/38.2c20f247.js",
    "revision": "d08d913679dcdb004cbc0346880602f2"
  },
  {
    "url": "assets/js/39.4d2c770f.js",
    "revision": "92dcae4b58f7939d4d393636fa2d5b0a"
  },
  {
    "url": "assets/js/4.d0570c75.js",
    "revision": "8902448c2edc6447ebc0636c9dd3307c"
  },
  {
    "url": "assets/js/40.0d436407.js",
    "revision": "fab27c333a2df4a38b432e948c250b5a"
  },
  {
    "url": "assets/js/42.fcadf7a9.js",
    "revision": "df7fe423adac6d306249223a6c79d7c5"
  },
  {
    "url": "assets/js/5.e42d80b3.js",
    "revision": "977978d46b6da6156f62d5e071805660"
  },
  {
    "url": "assets/js/6.e6677894.js",
    "revision": "a4167323f63e302423afd942b1949879"
  },
  {
    "url": "assets/js/7.45c47954.js",
    "revision": "e7d518553d9a27a0824c3085d1c16d96"
  },
  {
    "url": "assets/js/8.3b4d8728.js",
    "revision": "b4b900fd079dbda46f781d5f92c36133"
  },
  {
    "url": "assets/js/9.09b1f8c2.js",
    "revision": "d6046be85d431c2b7671649f6a064224"
  },
  {
    "url": "assets/js/app.15feaacf.js",
    "revision": "6afade4a6d75a68771930662edbe1a4d"
  },
  {
    "url": "assets/js/vendors~docsearch.37bb06f6.js",
    "revision": "d38e622911e87af68d3279de7ee224a3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c03529e0e63a0fbad1e3305a3721152b"
  },
  {
    "url": "design/index.html",
    "revision": "d8774b4a54e4ab7fb8d247b22b3731a3"
  },
  {
    "url": "index.html",
    "revision": "5977ef3b98391258f7564ca3513157fc"
  },
  {
    "url": "intro/index.html",
    "revision": "ebaa6b9d9d8805d1bd272d796e407523"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8b6d04c4bffbebfeb0c99767da0b0828"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "13f6f2bcf5d46b0a19ae9f0400c6c65a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8c0d7fddfbd390a46d45c0b8313114ad"
  },
  {
    "url": "software/index.html",
    "revision": "65399aa59e012316922fcf867e611d82"
  },
  {
    "url": "test/index.html",
    "revision": "0e9be5a4d88193925ff4905a0c663eb0"
  },
  {
    "url": "use-cases/index.html",
    "revision": "e4bc9290f045f63beda1662a6f2cce02"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
