'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0ec1ae3f6fa2355cdce0a76140e43d15",
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
".git/index": "ad605c1b94d070fcd9d93de39715e0d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9deb5b69614adfba6d6bf3fd82d416e6",
".git/logs/refs/heads/main": "b858eae7961d61a5133ede3f7ca8b0f0",
".git/logs/refs/remotes/origin/main": "4e43825be89417da2291d300c0cf33b0",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/d19f3ccbbe27d1e810e9af61c0df87d99f0c5f": "751fea99d9d687b6062ffb0207fceba0",
".git/objects/07/1f3e23c07b724dc875120a148fe6a3b99b0ce4": "302ffa4b7e5f389896dfce21c25a9046",
".git/objects/0c/1f039abe30e157cd97f075e604d236289d498c": "78ba3e869c59012e20cb43ca43766418",
".git/objects/0d/07a8076d4c5c682ac6d022bd355204cd41799f": "718f25bc238adf034424c59375505e44",
".git/objects/0e/85ab6f07a0e3169fb19869d80430d98722af3d": "8cdac8e755d998b6c13a12283c4fe937",
".git/objects/11/94c1785e3935ef8ff7b234cb61bfd0c8289055": "90bcc84708d810a6c7a5c6d342313e79",
".git/objects/14/6c64a64f41c333e9c18aa3a4b9603d4af72e89": "c9933a02a09a155e8b1e93fe20ca9772",
".git/objects/17/45bb8663d9798bc53eb5957cb6a397f6c0a884": "3864454728f698b9cca76d1ccb027085",
".git/objects/18/592512ef6a1fc7ad8aa77ae1d6dd1d310b67f5": "3bdb44c45eca0d0b016312eaecd26c2b",
".git/objects/19/9ab3958bda282937d21f6d2a62522cb1e7ded3": "c686599912cbc50009b545ee18306cb6",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/a76ada6c7316cda94858f20f6f3d9e85e8f5d2": "911e6d06cd1ddb1b7562b25a80fbf1ea",
".git/objects/21/c3e3fa827f5baf36f02f9d6d33b1e6f67e28b5": "40badfa854616358b7f6ff9b99e12240",
".git/objects/22/71fb6b6fb0cecb5b41a8af64980c7169012a4d": "b2650f0fecbf0575a02715da34667cff",
".git/objects/26/aca60812ddce1a3cb5e026179028fc6865bd13": "d3c1baa16888521a24bfb3892047f862",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/3b97ee1b88d0c19b2493cca86423142f0b1ec2": "38644292d17d431a7fde25a76024028f",
".git/objects/2d/0493da66ae12c77c921fad764e471ac562d66e": "52d5a78bfb5a871b8f4d338370d6dc5d",
".git/objects/2d/06a3642adcbab3f44687da57a0bb3a929021ee": "c01b10fafd9cbffcc4e0bd3735fd1ee1",
".git/objects/2d/c5b02f711c5e12f23f7f57babd84af8c9eb5e4": "9ba1b7bb279f01383327100f3ce63569",
".git/objects/2e/1bcefde12ce96bf7a8f47794c304b90a6be712": "55e0c74bba6669b191ea1ca0cff93592",
".git/objects/31/6ea8d4481149fa4d2fd38dfb56d968f7c6a3cf": "1dc6d8d918589eeb55b407fd9db4e311",
".git/objects/38/60d949aec0f38c169302b0c0ca582b3267896c": "fd88b2ecccd342d6ad9fcf000486ca65",
".git/objects/39/db913a3bbb65399548e9f7a072a5478c9526b2": "116df3a717e712ae38764e65622cc041",
".git/objects/3c/e42d905840bf04d39a3b212b7749bb7b582240": "0d12c6289cbf3172f039e9c8dd9d4250",
".git/objects/3d/05bbe80582197bec511b5c30fec956ac8a8d78": "bb6eda4c207c2c7001f08e9f49257ed2",
".git/objects/3e/39cfd7f10bcd54d7e933ca0c0fbb15b938a1ff": "0bd3454f61688beb027a6153e336d90d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/3cfd6522ee5ce29996f330cea2342e6e141664": "b271f9f1233bf85682e6225a6885110d",
".git/objects/42/ae3fb84d752e9e3246556df498c7e02282a8cd": "d899e038beb6ce61e55bd8a58fd21d2c",
".git/objects/43/6e27adfdb79fab8a5d2c016190221a937c9077": "11892e5e116abc716011fbbab1c9b7f2",
".git/objects/44/06c9c9af9ecc1de17c26e51bd0395e736814db": "4871b7bc35dd0119affe5562a753c774",
".git/objects/45/08e24654b255d41ee05094be8eedd144c75b81": "a4d8805dec35d35d0a08aa2deff4570b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/4e36805aef935fad9bdc16a394952195db74ea": "347c8d24b82dab1fe5611a863b9a38d9",
".git/objects/54/337cb1d39d8bba50ea2ff501f1d061c2cc9439": "ed85ad1c0166595a4d10a2e1e9968cb5",
".git/objects/55/fcea0714ed920c613f5d8e30011a678d482e0f": "7539c8326f455b27a82639aec8da67c4",
".git/objects/5d/c21e96986d0b7172f97368c25294f4d476a059": "23b560f73cfd3eb1c70cd750ca1f8853",
".git/objects/67/a0aff95b28f194ec9b22ae3f66553fec3d5aff": "07bdad61ee28fc724689591414c2c064",
".git/objects/67/f802da02189fc9c2f5841ea5184be8fefb4757": "bde90f7110f824ad84159f2a57296cdf",
".git/objects/6b/cef55b7c98b154d1c32766fbad7be275913d96": "26a8ca01daa62f9a68d073403280d0cb",
".git/objects/6b/e57fdbbe0f125fd53a5f35f83ecd75a70819d0": "f93c01cd5bd647fc2a5d59e04d2630e9",
".git/objects/6c/835abc92eb6386e83dc679e9986e535ac2cd79": "05282ef5c8577aadcfa8154cdfe52210",
".git/objects/6e/e2b37ddc3e4b9f657fc131598fff87b048c3f5": "17e9fdea25d524b047f21c40ef66df24",
".git/objects/72/a722a4bcc9b07105c27027388f5a6bec22628e": "a9ffcab4ae4e05ee8867df228900dd13",
".git/objects/72/bc211351fd0e7475d5617b943c9309c2aee1bf": "f412fb3235cc995688f8901bfe112c84",
".git/objects/75/91bf7c2a15d1cf9f4fc978fe87e0d6d652828b": "b51266c2b926e5ab79a6c422bf17cfc4",
".git/objects/76/99364ce3205e090cd2218a284c9debe3cd82da": "207445faab364f0c1905b05040ce1904",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/aa4f6f9fa8597e10cd439f39504fef6b2fe66e": "21d5bfcc5032fda30dfb7cac6c6294bb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/47f97b25c1b86e1a26b9057d7db50f34a1a092": "9dce5d3e7102d73a1a84a14ab2de8a9c",
".git/objects/81/61b2fca8ef85ef73d665ebf585d354f443a5bd": "3bb9d6246776fef8708bbcab079f58a9",
".git/objects/82/abf5f39bd2089ff6a3ba211da16513a534a5e8": "404ca1d691be234243ef4bbaac22a5e5",
".git/objects/84/79f7eab896e542dd8b5c34aab0bc9dacc056b0": "10d26899f43702859101517f26bd4704",
".git/objects/87/182ca1b8cacf72f42f7f12eface6d7ddc49151": "d838d282562d4813675a2964be684b17",
".git/objects/88/a90b38b76ad68dddfcb7ea290fbd96c555698f": "d9590345eb58359f1c0c2545130157c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/1d3721c9ac054f0e760e1362e9d67138cab8c1": "9b7e35ff587426fac2bc7c5147118a34",
".git/objects/91/1eadc0ca306b85fa7577bc83861b5ab6bd597e": "997c73409c88a29795f47cfe2a9e2601",
".git/objects/94/922c8a7adb9e1a44832e62e0c0278cd93ce417": "553ad24db156a146052384c5039121d9",
".git/objects/95/566a8508e36a8380dcff3a39c61da43c30e7d6": "d054407ed3138e41babc707c307a669b",
".git/objects/95/d596c711eff5b08819e8b8c83b2540eb4acaa9": "29cc35d1973d6022a191ad12ed7776d7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/5742e306a711dd952af2b468e428af4ec81bf9": "c39b9deaf2c08c3d6e09c4fae0b6204d",
".git/objects/9c/bada542d3c78047e39acfcbb85611053ad2b41": "8df1697167606ab7040996af29c34be7",
".git/objects/9e/04f0db14dd1f63fdc9925413dc848a1423b925": "ccb52a7a7992ba144b5422e9b98df57c",
".git/objects/a0/f5db390ac870fb7dd3ac348ca594cbc463d2f5": "569dd25f9dd941a27ebd9043cbd4bb04",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7b2b5a36420f621213e3fe3b17519928bf4246": "c4074e466534dba7ea92b4ae2a10e9cf",
".git/objects/a5/efc90cbb8a23db713698893641becb8ef68686": "3adf09c54d0ad01d6d976d9b4d058bbf",
".git/objects/aa/b45a7d7f67549d567e691db44995808c3ab7cf": "be3041db84df3cf463c7273a24dbcea9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2a964e158d0b4049b963a294e3e4cda70041d6": "9f19b14c754602bcc9f85e4e9b362f0a",
".git/objects/ad/8d716fd7d11ab93e9b7d302e338a65e0307e1a": "1b8dceb078f9434c96abdf04660abc8d",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b0/21ee39c29ba294329d3c22d03cde037f1110d2": "459abecd743d1070fe5069142382556f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/70784be154136306559d92d3d065591bcf1b17": "0e88a449482a00b1a49aee2a88b91a33",
".git/objects/bd/1fddd2bbf113dd5f37439a23148f406d8ec969": "d6ee3e15d7f825d7d96dea56a2ca4d69",
".git/objects/be/b836a5e735accd5d9a71f2251476e7d1abd391": "568cc4b887d372ff949a42a34ffabff6",
".git/objects/c0/a26eea191da4a9bf6a3ef709427a2c2ea56ca0": "a9fb45e6dca61b7198ea0959e0fe1afb",
".git/objects/c3/320757e90417333cdd1cb9aff1fb728990b07e": "9458184cc723fc6af1628938d481b3ce",
".git/objects/c3/95b94901a5616e351f0d0024ef46814dbaaf10": "bda4ba5e49ad72edc0ff51884a4b46dd",
".git/objects/c4/01a9c75c3782fb7d07b71fdf469aa3cd0c980f": "b3c890b6d8e1c37c529258e71648febe",
".git/objects/c4/e2297bf967e092f935da499bf532cf75aad77b": "5625e7f6207c2cf6b274114e1a8e6da4",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c6/c942d4b9c84f92b1ca81a03b08fb96392acf80": "a4ea05cf5dfa75abb2ab52078a94fa50",
".git/objects/cb/497cf551f7aa0fc7bcfec98b9327fab8b87773": "200f49fd704bb92df4ebffa1df202075",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/ab38f6179665cb43dba9b28e0192a573cb181f": "bd57d3871225caefa23dfabdc1901f3b",
".git/objects/d4/0a92ecd1fdea4e2e7af32c100acc15f3afd5f2": "705b53af7e9964719674d6751ffe1380",
".git/objects/d4/132eeb4277d974ec75e400d2931268c82cb129": "df9fd0998658ca61154af2518abaa815",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/69dae873d5a13b52f3270331fc1ac3943321f3": "220ca2d4fe18958226ba260a653217e2",
".git/objects/da/88365f95ae126a0cd42aa6ee8eb1474c4f08dd": "c27cf4e99d9ba6c64c60ba980ac3a056",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/2e6590817af88686ff312530b45248054e4e0b": "2f53bb2d2c214936516716fa20095bc9",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/422a3d50b293a577616a75abb27b974cabcda3": "cadbc0b8fbe1fadad5e4a2f60df607fb",
".git/objects/e3/3cf5511eed0f389954bff496ef6fa268fef744": "5452ae241ee900455dc0025595f8dafb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/0b6c42e5c74e358a3958462a3da0763e107935": "feda0b8f771ce7438084e31755d14720",
".git/objects/f6/530bbc541c2b10b597c776ac7c0b08d6c8e7cf": "760f98c79bb29396f16254ef99010c93",
".git/objects/f7/37d3577d445d5d206c7c0f60f698566550ec4f": "2a7db68988c2004ca4434f83285e701e",
".git/objects/f7/59f63c3fe4795515c409f84c62d4e703be9924": "a16737f27f0aaa51304de820c657835a",
".git/refs/heads/main": "e372be7a9e779f877b28878fd8687e38",
".git/refs/remotes/origin/main": "e372be7a9e779f877b28878fd8687e38",
"assets/AssetManifest.json": "b297131bebbb3881ecde22bd55bdd6da",
"assets/assets/images/Logo.png": "ea62eb5378d83131c5dfaa2ce47f67fa",
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
"index.html": "8fe9691c0b50c1ba4a0ecf8a28960c92",
"/": "8fe9691c0b50c1ba4a0ecf8a28960c92",
"main.dart.js": "a3644dbc5abb59b8589078369647a649",
"manifest.json": "73b6478f5f7486fbe6682e9408fc8760",
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
