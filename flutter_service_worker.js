'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aff616670ad931260326d4923cc164f6",
".git/config": "b804ff1757050db9ac8d348afb3f660a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cc1c7d49dffdf67d22d18a8653286785",
".git/HEAD": "0593c0aedba7e7dca07166d83ce624a9",
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
".git/index": "524f2d9618f73a4f934641dc4474c876",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3cf1e9d6682b6c13a5e1275bfad72b9",
".git/logs/refs/heads/main": "bb3b167442d0876b456f6b6138c1c659",
".git/logs/refs/heads/master": "618abd680a19e7e35b7fd958fcfd7393",
".git/logs/refs/heads/ukraina": "8290a1adb9c3d1e6b4e6d1d442df0135",
".git/logs/refs/remotes/origin/card": "e8c96a16079401c7cf0cec0fc68d2be3",
".git/logs/refs/remotes/origin/main": "a344fbc7e91c49bffb8d8d6dc65769b2",
".git/logs/refs/remotes/origin2/main": "512ab3708ed1faf3762dc2f7ed3c7215",
".git/logs/refs/remotes/origin2/ukraina": "925f74f50c5713df7b9073462f910fab",
".git/objects/03/3bcf2c4aac6cfc87d7667c889da34dc6f73d01": "60df40d6011a6e22812801a9235d9e31",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/af26a480d24cf011cd8dd56e3f594f98515277": "3fbbc6f8e5eea84ad2e3ee2a54d4cc82",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/ec639242b965c6cb74756c04ba8a8ef33b2ed6": "231a30678e32048cba36cf4cd77c53dd",
".git/objects/10/68ce4d9ae9ea996363d59cd9233c9a70339bb6": "76ea66a187ab17421c53980123886508",
".git/objects/17/2ca8256ec7c7d4519f5c1628825d2fa3bf1519": "55bc8f0d3e173de23ad84fcef05fd9fb",
".git/objects/1b/93a8c932ba375ec0f1c3660cfb422059fe40df": "5b22879798255b015667fb65dc96638c",
".git/objects/1e/45f8bd3cef53e0d62d5d86ea0a5bfd14799b4b": "4cec51b0d4a95397b390c975c2b00192",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/b146ea89d228c4ec9d13f6c4bd20d68e231dc5": "eb7c49b90d179f786e1ceaa9d79a0d54",
".git/objects/27/61e36403639fc2fb1f9f11dc7fb03ffdd9ba00": "be7fe52af4f4c06837b4cc87d55c083e",
".git/objects/27/84578de1eed507d1c94286585564222339e72c": "ba0a131816f7699c2313c0823059f2b9",
".git/objects/28/5bb153d2c6b12239e2c22b93a8a2e8fe2dc83a": "19330b412d1326607ce7398937b2f2ce",
".git/objects/28/a01d7a3554a98fee28de7429d937e5f964c6c9": "d5d4212908f9e0d7245f2ae1e5cb77e0",
".git/objects/2a/c088bc7e94c8feff46311be0ce6c1cec8b772d": "cad7eec43cb798afd16b0d0fb670beb9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/030aa007e81af69cbeb7d1d5d915bbca79a053": "527f33bb9587b646f5bac9544d8557f1",
".git/objects/2d/7e20d43c0d35454b6e7b6b3fd900d7f91977a4": "de3a969fcb5018fc83de68f03e991d10",
".git/objects/33/d4326ab1e52ecbeed333c26cde5cf828435106": "e701ad71448252fede29620bf90570ec",
".git/objects/34/065c857b706758f75922bce7c486347ade6968": "09418e600b142e0e3328ab412988caf5",
".git/objects/35/78b927b654d33e5daf0e6882f687e3aa2ec5dd": "6cbe7ea3e17a90f3b523de1cc96844fb",
".git/objects/36/0c109fdf7ef3a45a27e2bad3e065256b1c8fd7": "e44a354dfd1533ec0d9acdbc6cbe25d3",
".git/objects/36/898db93fd633ae510016cde17d47886e83c57e": "d85f0bd02b32f6283ec8857c95668852",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/484f4d92e6009999c056e1d7fdff17caf85437": "83c0940394c2688e5bbee2602f878031",
".git/objects/3e/0e88e234c9002b3d58090c85249e1147eb6024": "8043252b681683b3a774c44af88164de",
".git/objects/3f/89e19818474288906545c069969d125a54cae3": "4891938b3fdbc6627398a1f889b2aa59",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/5f8ea73fa286debb08e18113740316f8a15e5c": "26897076d2aaa7d1507e34ea97198aa4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/67c6b88a83ee576f44a15726e6f8a820753561": "908182973789bdd5334b8b2dad16b984",
".git/objects/48/863f4c70f7b67b8444537bb3bf8542530f98b0": "a27b8def0fdfaf4a6c152f1dd9dc780f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/59dd57e4698c44a7f905c43bffe25e918c9293": "0b7555525761b72ee12442b471c71a23",
".git/objects/51/102cbf22f2ad4f37b082dd058a2bd7372945b4": "98b9595614772f4dfb20d4a0bb913206",
".git/objects/54/a9595b23477c241838f86fa21a1e47328f7cf1": "1b8d3ac6d6913c5043c678871beda233",
".git/objects/56/5da6119289e24538c8c9823469fe54d5000a74": "6596d684acaf09512b0ccc2b93671bdb",
".git/objects/59/61b229259de3b6d27194d07927b1a39207d6b0": "0bd351bc5552684a48f92827ca80bf61",
".git/objects/5c/3f21c538cc3a54ce60e3de7dd9c1b187cdc550": "1f5c4bd3f36dceca4856f597485db411",
".git/objects/5e/4bb7ca0b96ceea18df97a618bdbc838e9ed926": "73113a1cbbefcff7c07bbc569c909cc1",
".git/objects/5f/55d176552d46cd9a73b925eea2e926d5cbfcac": "0ccc821e028a9da3047654cb97fd5522",
".git/objects/64/25d99ac10156ade3036a7652c624daca037fce": "1fc275ed779b9f8aece31fe42259be00",
".git/objects/65/41e9d87e656f7b341c853abb4ced9a6397ef39": "e73ebf51faff6dfce005f934b38c2ed4",
".git/objects/65/755465a2e09982867069afe6fb2af9ef602278": "097bcef64541156469d698863447fcb7",
".git/objects/65/ab3eefec7e9118e71b78d22e55ff9bef7a4775": "ace51e05bcd569d8e3df2a09d060e201",
".git/objects/69/f7a3a8781cf31f400e5b27f96675c721c756df": "ce3684ceabc6ca2bf64b0f779e323d6e",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/73/d6ccf26c0a9987515efc82fed7af87941aea98": "1a9c0d1739feada7a2711365f0b8f02b",
".git/objects/75/7e21ee3aacb98b80dc23ecede5673e92cd6688": "a5ce478ab98405b51bde734c9b693030",
".git/objects/7d/25af2e40464ef5274321b8610573f9757109fd": "a732631eb1a1bd678fb8f273e62acf0c",
".git/objects/7d/3bdf11f4aa405a7180a2c5b19cf49fab44a146": "3edaff9b7267bc3a27607c30989f568a",
".git/objects/7d/7a7fd4c031d23d44c37eff48ddf34d0e3e9c6a": "aed18dee4265e5c47ee391b1a7c78b9d",
".git/objects/85/dcd801fdb8799e72aac225779c3582f1517e9c": "807bc0685161c877e45df7ebc6da00a2",
".git/objects/87/80f9437428ee28b62b16adbcf98d1fd29f7484": "2e2cb52c6f96a2e470b7253836fd5334",
".git/objects/88/b72d81700ffda2a068c15a1390085e541246de": "0ce73d213ac6da4d42cf911c82dd0fb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9fff8c00da32fa3c8f3f4c1232c0e5346f9cf0": "3cb27fbb6c54651f7dccf6d5dce55a17",
".git/objects/8c/a434426e55228f4d836b0a6561626f1794687d": "dd7ed260e696d528f48886a1c82eab3c",
".git/objects/8c/e3ac577bf109f4a92f1d9a7eadae555ebdd547": "e2ecdf698e63c68a114a3f66f203f72d",
".git/objects/8e/b1afbe3dbe314aaf698b40dfd5051f4400c7c7": "3f8e309b771339ddffec4a9cb1324bc7",
".git/objects/8f/7bc844693565f22a6ac240fdc2d2e6522c340c": "907aba38263219a0d9b7925b12645cc2",
".git/objects/90/099092b1ec1620b6e2559c953a341048679dbe": "f2aeb6853c74a6c9d114e1a217b8a6bd",
".git/objects/91/6ddda7cea4294aeddac52d53c649e5e419761e": "2b8886b1960017f4eebdf41b9c1e7391",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9f/455d9529aa398b08b65fdf9fbf64493821ea89": "f8f8bfb0f335b29dd900c0085337e364",
".git/objects/a4/b3f3b67b16c8ebdf9e7896c28505ff5df5fbbc": "20123158ef3c099b04a40aec7e98a48f",
".git/objects/a7/dbd260ea08bf7542d9e1bf19200881900ee3cd": "832fd1dad03a5bb4dbff72906e775a6a",
".git/objects/af/85861aa674ede1a0a4465c7be5c29a96af6bae": "949c106ad9a63d43136efdd70569345c",
".git/objects/b1/1cb0a9a1f5a015847c1f9812e98dee2d3ebce6": "220c9e31ee75cf9a3c1dacded3ba5b5d",
".git/objects/b1/aff1b8569768855f22986bdf1e06c2ecd84d40": "1ede3ec81dcc2459556a077f616c9e84",
".git/objects/b5/c5c3b1a63aad50ef0189f276edf4cf92f8f378": "cefe370f2d964a9c87f88b1ce4012599",
".git/objects/b5/cb1b1e1e39e30a8a8e2597a25ee780ca28157e": "b32df373f29e008f1346ea9ee210f463",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/22efedfb046c7940b46ee6908aacf8c571396b": "8ea74cd4e5eb2dfd925fed64d4e679d5",
".git/objects/c0/54c0727351e71fe3548e70a0546e8a96d66d99": "955814150432ccd52f690ed5e8329fd8",
".git/objects/c2/daa283d5a1550cb410db70f2d147d5364e6651": "ef58c79e118d66011038f0b0f195d327",
".git/objects/c4/79ac46b31af47aef5b3105baded1416b90dd4c": "3d94c2b752f68ab66f3d2480aa492852",
".git/objects/cb/aa44912dcc32a64a9d0f8fd71b70572efd33a9": "4cc8aef2c032241bbb9980ce3bc7b831",
".git/objects/cf/e79c378fd9e4a50f0bbd559fecc501d055479c": "c8c6a5e0ef282e1b2487614727535d8e",
".git/objects/d4/54d1aee12b14b1705c929825370b536646f047": "e305991da5062295ed04782d5a019e3c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/8a8aa861de14fca03392b93afc932f4404f38d": "d2b94d9cab4571c4f63a11f9ddf66d9e",
".git/objects/e2/2b5e55bd75b374b658ed8e6c56edcef3618d0a": "b685b17db81a3ed78c6478864fb7a073",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/fd20a290940a795ed66392fdc12d6b99769005": "aa433299df6a9c3bd776e403530a887f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/c5977866617f1349e51dcfb8dfc867d4ce47d9": "fa7634aea9250285fd8eb4980375ff47",
".git/objects/f6/197f63b606127b344b70d6376e0905b232ffa3": "c3dc69aab6a5d4532789cb0c2d755597",
".git/objects/f6/b5cc86e2a80e10af43b05b2ae29b6a42b54539": "9d96d57ed94dd7ee74e6f9e4f1269978",
".git/objects/f7/ad61cd22a034ffb55721d48ef0d1e073a9919c": "3e4f8bf140778d2862634ab2e0b6ed2a",
".git/objects/f8/4770103a50dcdd91474cef10c0e73188d4d106": "751365b7ce052e129cdb77e9486b627f",
".git/objects/ff/662bab5a087c31528dfe4058edb8e136dbb230": "fe59f256f2cd21ff902cafe79c3ff0aa",
".git/objects/pack/pack-98ab2830e3bfa8ff9f4fb1afba9d579de22cd196.idx": "6b8d50e569b3a6ef2b200d566413d81b",
".git/objects/pack/pack-98ab2830e3bfa8ff9f4fb1afba9d579de22cd196.pack": "d25de6e3feab2ddef84ac66414b4d248",
".git/refs/heads/main": "7eee703b2766ff6f8c9b623184d844b2",
".git/refs/heads/master": "2081d913f092cfe18d8aa60fb55dc0b7",
".git/refs/heads/ukraina": "7eee703b2766ff6f8c9b623184d844b2",
".git/refs/remotes/origin/card": "2081d913f092cfe18d8aa60fb55dc0b7",
".git/refs/remotes/origin/main": "c133395cc08e972ea5cc89625818b994",
".git/refs/remotes/origin2/main": "7eee703b2766ff6f8c9b623184d844b2",
".git/refs/remotes/origin2/ukraina": "7eee703b2766ff6f8c9b623184d844b2",
"assets/AssetManifest.bin": "db6bddccecee61cb4962b41cb63ff7f8",
"assets/AssetManifest.bin.json": "2907c18b63926e43d9b5ce6ae7dccbbd",
"assets/AssetManifest.json": "ca360bfd597c1677ce1b786eafbb6aec",
"assets/assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/music/Mr_Smith-Azul.mp3": "9463595498dc48b3d3d6805fb7c19dc7",
"assets/assets/music/Mr_Smith-Sonorus.mp3": "9353b7bb732002062e2c9107a95f3d2a",
"assets/assets/music/Mr_Smith-Sunday_Solitude.mp3": "5fb1f2fbf4314eb5df35b62706942698",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/README.md": "33033a0943d1325f78116fcf4b8a96ec",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/FontManifest.json": "806f6b30fc84741899cf1b932dbce0fd",
"assets/fonts/MaterialIcons-Regular.otf": "2213312d04d9c13c00725d65e3190839",
"assets/NOTICES": "ae6ea117f3894371c5ec781b3cfa3148",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e95f1b725fb8469d0f62630624d21b81",
"/": "e95f1b725fb8469d0f62630624d21b81",
"main.dart.js": "05f522acd1b35813e706bcb5395f4c92",
"manifest.json": "ab1450a74276f35f3d1b9772fa456771",
"version.json": "a2576ea6eff6f1a88716d37efb215745"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
