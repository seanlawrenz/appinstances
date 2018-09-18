(function () {
  'use strict';

  var initViews,
    hideViews,
    onShowClick,
    onHideClick,
    ui,
    initFontAwesomeIconChooser,
    fontAwesomeIconSet;

  // This code was (thankfully) generated automatically by the Font Awesome introspection utility
  fontAwesomeIconSet = [
  {
    "name": "American Sign Language Interpreting",
    "id": "american-sign-language-interpreting",
    "unicode": "f2a3",
    "category": "Accessibility Icons",
    "aliases": [
      "asl-interpreting"
    ]
  },
  {
    "name": "Assistive Listening Systems",
    "id": "assistive-listening-systems",
    "unicode": "f2a2",
    "category": "Accessibility Icons"
  },
  {
    "name": "Audio Description",
    "id": "audio-description",
    "unicode": "f29e",
    "category": "Accessibility Icons"
  },
  {
    "name": "Blind",
    "id": "blind",
    "unicode": "f29d",
    "category": "Accessibility Icons"
  },
  {
    "name": "Braille",
    "id": "braille",
    "unicode": "f2a1",
    "category": "Accessibility Icons"
  },
  {
    "name": "Closed Captions",
    "id": "cc",
    "unicode": "f20a",
    "category": "Accessibility Icons"
  },
  {
    "name": "Deaf",
    "id": "deaf",
    "unicode": "f2a4",
    "category": "Accessibility Icons",
    "aliases": [
      "deafness",
      "hard-of-hearing"
    ]
  },
  {
    "name": "Low Vision",
    "id": "low-vision",
    "unicode": "f2a8",
    "category": "Accessibility Icons"
  },
  {
    "name": "Question Circle Outlined",
    "id": "question-circle-o",
    "unicode": "f29c",
    "category": "Accessibility Icons"
  },
  {
    "name": "Sign Language",
    "id": "sign-language",
    "unicode": "f2a7",
    "category": "Accessibility Icons",
    "aliases": [
      "signing"
    ]
  },
  {
    "name": "TTY",
    "id": "tty",
    "unicode": "f1e4",
    "category": "Accessibility Icons"
  },
  {
    "name": "Universal Access",
    "id": "universal-access",
    "unicode": "f29a",
    "category": "Accessibility Icons"
  },
  {
    "name": "Volume Control Phone",
    "id": "volume-control-phone",
    "unicode": "f2a0",
    "category": "Accessibility Icons"
  },
  {
    "name": "Wheelchair",
    "id": "wheelchair",
    "unicode": "f193",
    "category": "Accessibility Icons"
  },
  {
    "name": "Wheelchair Alt",
    "id": "wheelchair-alt",
    "unicode": "f29b",
    "category": "Accessibility Icons"
  },
  {
    "name": "500px",
    "id": "500px",
    "unicode": "f26e",
    "category": "Brand Icons"
  },
  {
    "name": "Amazon",
    "id": "amazon",
    "unicode": "f270",
    "category": "Brand Icons"
  },
  {
    "name": "Android",
    "id": "android",
    "unicode": "f17b",
    "category": "Brand Icons"
  },
  {
    "name": "AngelList",
    "id": "angellist",
    "unicode": "f209",
    "category": "Brand Icons"
  },
  {
    "name": "App.net",
    "id": "adn",
    "unicode": "f170",
    "category": "Brand Icons"
  },
  {
    "name": "Apple",
    "id": "apple",
    "unicode": "f179",
    "category": "Brand Icons"
  },
  {
    "name": "Bandcamp",
    "id": "bandcamp",
    "unicode": "f2d5",
    "category": "Brand Icons"
  },
  {
    "name": "Behance",
    "id": "behance",
    "unicode": "f1b4",
    "category": "Brand Icons"
  },
  {
    "name": "Behance Square",
    "id": "behance-square",
    "unicode": "f1b5",
    "category": "Brand Icons"
  },
  {
    "name": "Bitbucket",
    "id": "bitbucket",
    "unicode": "f171",
    "category": "Brand Icons"
  },
  {
    "name": "Bitbucket Square",
    "id": "bitbucket-square",
    "unicode": "f172",
    "category": "Brand Icons"
  },
  {
    "name": "Bluetooth",
    "id": "bluetooth",
    "unicode": "f293",
    "category": "Brand Icons"
  },
  {
    "name": "Bluetooth",
    "id": "bluetooth-b",
    "unicode": "f294",
    "category": "Brand Icons"
  },
  {
    "name": "BuySellAds",
    "id": "buysellads",
    "unicode": "f20d",
    "category": "Brand Icons"
  },
  {
    "name": "Chrome",
    "id": "chrome",
    "unicode": "f268",
    "category": "Brand Icons"
  },
  {
    "name": "Codepen",
    "id": "codepen",
    "unicode": "f1cb",
    "category": "Brand Icons"
  },
  {
    "name": "Codie Pie",
    "id": "codiepie",
    "unicode": "f284",
    "category": "Brand Icons"
  },
  {
    "name": "Connect Develop",
    "id": "connectdevelop",
    "unicode": "f20e",
    "category": "Brand Icons"
  },
  {
    "name": "Contao",
    "id": "contao",
    "unicode": "f26d",
    "category": "Brand Icons"
  },
  {
    "name": "CSS 3 Logo",
    "id": "css3",
    "unicode": "f13c",
    "category": "Brand Icons"
  },
  {
    "name": "DashCube",
    "id": "dashcube",
    "unicode": "f210",
    "category": "Brand Icons"
  },
  {
    "name": "Delicious Logo",
    "id": "delicious",
    "unicode": "f1a5",
    "category": "Brand Icons"
  },
  {
    "name": "deviantART",
    "id": "deviantart",
    "unicode": "f1bd",
    "category": "Brand Icons"
  },
  {
    "name": "Digg Logo",
    "id": "digg",
    "unicode": "f1a6",
    "category": "Brand Icons"
  },
  {
    "name": "Dribbble",
    "id": "dribbble",
    "unicode": "f17d",
    "category": "Brand Icons"
  },
  {
    "name": "Dropbox",
    "id": "dropbox",
    "unicode": "f16b",
    "category": "Brand Icons"
  },
  {
    "name": "Drupal Logo",
    "id": "drupal",
    "unicode": "f1a9",
    "category": "Brand Icons"
  },
  {
    "name": "Edge Browser",
    "id": "edge",
    "unicode": "f282",
    "category": "Brand Icons"
  },
  {
    "name": "Eercast",
    "id": "eercast",
    "unicode": "f2da",
    "category": "Brand Icons"
  },
  {
    "name": "Envira Gallery",
    "id": "envira",
    "unicode": "f299",
    "category": "Brand Icons"
  },
  {
    "name": "Etsy",
    "id": "etsy",
    "unicode": "f2d7",
    "category": "Brand Icons"
  },
  {
    "name": "ExpeditedSSL",
    "id": "expeditedssl",
    "unicode": "f23e",
    "category": "Brand Icons"
  },
  {
    "name": "Facebook",
    "id": "facebook",
    "unicode": "f09a",
    "category": "Brand Icons",
    "aliases": [
      "facebook-f"
    ]
  },
  {
    "name": "Facebook Official",
    "id": "facebook-official",
    "unicode": "f230",
    "category": "Brand Icons"
  },
  {
    "name": "Facebook Square",
    "id": "facebook-square",
    "unicode": "f082",
    "category": "Brand Icons"
  },
  {
    "name": "Firefox",
    "id": "firefox",
    "unicode": "f269",
    "category": "Brand Icons"
  },
  {
    "name": "First Order",
    "id": "first-order",
    "unicode": "f2b0",
    "category": "Brand Icons"
  },
  {
    "name": "Flickr",
    "id": "flickr",
    "unicode": "f16e",
    "category": "Brand Icons"
  },
  {
    "name": "Font Awesome",
    "id": "font-awesome",
    "unicode": "f2b4",
    "category": "Brand Icons",
    "aliases": [
      "fa"
    ]
  },
  {
    "name": "Font Awesome Black Tie",
    "id": "black-tie",
    "unicode": "f27e",
    "category": "Brand Icons"
  },
  {
    "name": "Fonticons",
    "id": "fonticons",
    "unicode": "f280",
    "category": "Brand Icons"
  },
  {
    "name": "Fort Awesome",
    "id": "fort-awesome",
    "unicode": "f286",
    "category": "Brand Icons"
  },
  {
    "name": "Forumbee",
    "id": "forumbee",
    "unicode": "f211",
    "category": "Brand Icons"
  },
  {
    "name": "Foursquare",
    "id": "foursquare",
    "unicode": "f180",
    "category": "Brand Icons"
  },
  {
    "name": "Free Code Camp",
    "id": "free-code-camp",
    "unicode": "f2c5",
    "category": "Brand Icons"
  },
  {
    "name": "Galactic Empire",
    "id": "empire",
    "unicode": "f1d1",
    "category": "Brand Icons",
    "aliases": [
      "ge"
    ]
  },
  {
    "name": "Get Pocket",
    "id": "get-pocket",
    "unicode": "f265",
    "category": "Brand Icons"
  },
  {
    "name": "Git",
    "id": "git",
    "unicode": "f1d3",
    "category": "Brand Icons"
  },
  {
    "name": "Git Square",
    "id": "git-square",
    "unicode": "f1d2",
    "category": "Brand Icons"
  },
  {
    "name": "GitHub",
    "id": "github",
    "unicode": "f09b",
    "category": "Brand Icons"
  },
  {
    "name": "GitHub Alt",
    "id": "github-alt",
    "unicode": "f113",
    "category": "Brand Icons"
  },
  {
    "name": "GitHub Square",
    "id": "github-square",
    "unicode": "f092",
    "category": "Brand Icons"
  },
  {
    "name": "GitLab",
    "id": "gitlab",
    "unicode": "f296",
    "category": "Brand Icons"
  },
  {
    "name": "Glide",
    "id": "glide",
    "unicode": "f2a5",
    "category": "Brand Icons"
  },
  {
    "name": "Glide G",
    "id": "glide-g",
    "unicode": "f2a6",
    "category": "Brand Icons"
  },
  {
    "name": "Google Logo",
    "id": "google",
    "unicode": "f1a0",
    "category": "Brand Icons"
  },
  {
    "name": "Google Plus",
    "id": "google-plus",
    "unicode": "f0d5",
    "category": "Brand Icons"
  },
  {
    "name": "Google Plus Official",
    "id": "google-plus-official",
    "unicode": "f2b3",
    "category": "Brand Icons",
    "aliases": [
      "google-plus-circle"
    ]
  },
  {
    "name": "Google Plus Square",
    "id": "google-plus-square",
    "unicode": "f0d4",
    "category": "Brand Icons"
  },
  {
    "name": "Gratipay (Gittip)",
    "id": "gratipay",
    "unicode": "f184",
    "category": "Brand Icons",
    "aliases": [
      "gittip"
    ]
  },
  {
    "name": "Grav",
    "id": "grav",
    "unicode": "f2d6",
    "category": "Brand Icons"
  },
  {
    "name": "Hacker News",
    "id": "hacker-news",
    "unicode": "f1d4",
    "category": "Brand Icons",
    "aliases": [
      "y-combinator-square",
      "yc-square"
    ]
  },
  {
    "name": "Houzz",
    "id": "houzz",
    "unicode": "f27c",
    "category": "Brand Icons"
  },
  {
    "name": "HTML 5 Logo",
    "id": "html5",
    "unicode": "f13b",
    "category": "Brand Icons"
  },
  {
    "name": "IMDB",
    "id": "imdb",
    "unicode": "f2d8",
    "category": "Brand Icons"
  },
  {
    "name": "Instagram",
    "id": "instagram",
    "unicode": "f16d",
    "category": "Brand Icons"
  },
  {
    "name": "Internet-explorer",
    "id": "internet-explorer",
    "unicode": "f26b",
    "category": "Brand Icons"
  },
  {
    "name": "ioxhost",
    "id": "ioxhost",
    "unicode": "f208",
    "category": "Brand Icons"
  },
  {
    "name": "Joomla Logo",
    "id": "joomla",
    "unicode": "f1aa",
    "category": "Brand Icons"
  },
  {
    "name": "jsFiddle",
    "id": "jsfiddle",
    "unicode": "f1cc",
    "category": "Brand Icons"
  },
  {
    "name": "last.fm",
    "id": "lastfm",
    "unicode": "f202",
    "category": "Brand Icons"
  },
  {
    "name": "last.fm Square",
    "id": "lastfm-square",
    "unicode": "f203",
    "category": "Brand Icons"
  },
  {
    "name": "Leanpub",
    "id": "leanpub",
    "unicode": "f212",
    "category": "Brand Icons"
  },
  {
    "name": "LinkedIn",
    "id": "linkedin",
    "unicode": "f0e1",
    "category": "Brand Icons"
  },
  {
    "name": "LinkedIn Square",
    "id": "linkedin-square",
    "unicode": "f08c",
    "category": "Brand Icons"
  },
  {
    "name": "Linode",
    "id": "linode",
    "unicode": "f2b8",
    "category": "Brand Icons"
  },
  {
    "name": "Linux",
    "id": "linux",
    "unicode": "f17c",
    "category": "Brand Icons"
  },
  {
    "name": "MaxCDN",
    "id": "maxcdn",
    "unicode": "f136",
    "category": "Brand Icons"
  },
  {
    "name": "meanpath",
    "id": "meanpath",
    "unicode": "f20c",
    "category": "Brand Icons"
  },
  {
    "name": "Medium",
    "id": "medium",
    "unicode": "f23a",
    "category": "Brand Icons"
  },
  {
    "name": "Meetup",
    "id": "meetup",
    "unicode": "f2e0",
    "category": "Brand Icons"
  },
  {
    "name": "Mixcloud",
    "id": "mixcloud",
    "unicode": "f289",
    "category": "Brand Icons"
  },
  {
    "name": "MODX",
    "id": "modx",
    "unicode": "f285",
    "category": "Brand Icons"
  },
  {
    "name": "Odnoklassniki",
    "id": "odnoklassniki",
    "unicode": "f263",
    "category": "Brand Icons"
  },
  {
    "name": "Odnoklassniki Square",
    "id": "odnoklassniki-square",
    "unicode": "f264",
    "category": "Brand Icons"
  },
  {
    "name": "OpenCart",
    "id": "opencart",
    "unicode": "f23d",
    "category": "Brand Icons"
  },
  {
    "name": "OpenID",
    "id": "openid",
    "unicode": "f19b",
    "category": "Brand Icons"
  },
  {
    "name": "Opera",
    "id": "opera",
    "unicode": "f26a",
    "category": "Brand Icons"
  },
  {
    "name": "Optin Monster",
    "id": "optin-monster",
    "unicode": "f23c",
    "category": "Brand Icons"
  },
  {
    "name": "Pagelines",
    "id": "pagelines",
    "unicode": "f18c",
    "category": "Brand Icons"
  },
  {
    "name": "Pied Piper Alternate Logo",
    "id": "pied-piper-alt",
    "unicode": "f1a8",
    "category": "Brand Icons"
  },
  {
    "name": "Pied Piper Logo",
    "id": "pied-piper",
    "unicode": "f2ae",
    "category": "Brand Icons"
  },
  {
    "name": "Pied Piper PP Logo (Old)",
    "id": "pied-piper-pp",
    "unicode": "f1a7",
    "category": "Brand Icons"
  },
  {
    "name": "Pinterest",
    "id": "pinterest",
    "unicode": "f0d2",
    "category": "Brand Icons"
  },
  {
    "name": "Pinterest P",
    "id": "pinterest-p",
    "unicode": "f231",
    "category": "Brand Icons"
  },
  {
    "name": "Pinterest Square",
    "id": "pinterest-square",
    "unicode": "f0d3",
    "category": "Brand Icons"
  },
  {
    "name": "Product Hunt",
    "id": "product-hunt",
    "unicode": "f288",
    "category": "Brand Icons"
  },
  {
    "name": "QQ",
    "id": "qq",
    "unicode": "f1d6",
    "category": "Brand Icons"
  },
  {
    "name": "Quora",
    "id": "quora",
    "unicode": "f2c4",
    "category": "Brand Icons"
  },
  {
    "name": "Ravelry",
    "id": "ravelry",
    "unicode": "f2d9",
    "category": "Brand Icons"
  },
  {
    "name": "Rebel Alliance",
    "id": "rebel",
    "unicode": "f1d0",
    "category": "Brand Icons",
    "aliases": [
      "ra",
      "resistance"
    ]
  },
  {
    "name": "reddit Alien",
    "id": "reddit-alien",
    "unicode": "f281",
    "category": "Brand Icons"
  },
  {
    "name": "reddit Logo",
    "id": "reddit",
    "unicode": "f1a1",
    "category": "Brand Icons"
  },
  {
    "name": "reddit Square",
    "id": "reddit-square",
    "unicode": "f1a2",
    "category": "Brand Icons"
  },
  {
    "name": "Renren",
    "id": "renren",
    "unicode": "f18b",
    "category": "Brand Icons"
  },
  {
    "name": "Safari",
    "id": "safari",
    "unicode": "f267",
    "category": "Brand Icons"
  },
  {
    "name": "Scribd",
    "id": "scribd",
    "unicode": "f28a",
    "category": "Brand Icons"
  },
  {
    "name": "Sellsy",
    "id": "sellsy",
    "unicode": "f213",
    "category": "Brand Icons"
  },
  {
    "name": "Share Alt",
    "id": "share-alt",
    "unicode": "f1e0",
    "category": "Brand Icons"
  },
  {
    "name": "Share Alt Square",
    "id": "share-alt-square",
    "unicode": "f1e1",
    "category": "Brand Icons"
  },
  {
    "name": "Shirts in Bulk",
    "id": "shirtsinbulk",
    "unicode": "f214",
    "category": "Brand Icons"
  },
  {
    "name": "SimplyBuilt",
    "id": "simplybuilt",
    "unicode": "f215",
    "category": "Brand Icons"
  },
  {
    "name": "skyatlas",
    "id": "skyatlas",
    "unicode": "f216",
    "category": "Brand Icons"
  },
  {
    "name": "Skype",
    "id": "skype",
    "unicode": "f17e",
    "category": "Brand Icons"
  },
  {
    "name": "Slack Logo",
    "id": "slack",
    "unicode": "f198",
    "category": "Brand Icons"
  },
  {
    "name": "Slideshare",
    "id": "slideshare",
    "unicode": "f1e7",
    "category": "Brand Icons"
  },
  {
    "name": "Snapchat",
    "id": "snapchat",
    "unicode": "f2ab",
    "category": "Brand Icons"
  },
  {
    "name": "Snapchat Ghost",
    "id": "snapchat-ghost",
    "unicode": "f2ac",
    "category": "Brand Icons"
  },
  {
    "name": "Snapchat Square",
    "id": "snapchat-square",
    "unicode": "f2ad",
    "category": "Brand Icons"
  },
  {
    "name": "SoundCloud",
    "id": "soundcloud",
    "unicode": "f1be",
    "category": "Brand Icons"
  },
  {
    "name": "Spotify",
    "id": "spotify",
    "unicode": "f1bc",
    "category": "Brand Icons"
  },
  {
    "name": "Stack Exchange",
    "id": "stack-exchange",
    "unicode": "f18d",
    "category": "Brand Icons"
  },
  {
    "name": "Stack Overflow",
    "id": "stack-overflow",
    "unicode": "f16c",
    "category": "Brand Icons"
  },
  {
    "name": "Steam",
    "id": "steam",
    "unicode": "f1b6",
    "category": "Brand Icons"
  },
  {
    "name": "Steam Square",
    "id": "steam-square",
    "unicode": "f1b7",
    "category": "Brand Icons"
  },
  {
    "name": "StumbleUpon Circle",
    "id": "stumbleupon-circle",
    "unicode": "f1a3",
    "category": "Brand Icons"
  },
  {
    "name": "StumbleUpon Logo",
    "id": "stumbleupon",
    "unicode": "f1a4",
    "category": "Brand Icons"
  },
  {
    "name": "Superpowers",
    "id": "superpowers",
    "unicode": "f2dd",
    "category": "Brand Icons"
  },
  {
    "name": "Telegram",
    "id": "telegram",
    "unicode": "f2c6",
    "category": "Brand Icons"
  },
  {
    "name": "Tencent Weibo",
    "id": "tencent-weibo",
    "unicode": "f1d5",
    "category": "Brand Icons"
  },
  {
    "name": "ThemeIsle",
    "id": "themeisle",
    "unicode": "f2b2",
    "category": "Brand Icons"
  },
  {
    "name": "Trello",
    "id": "trello",
    "unicode": "f181",
    "category": "Brand Icons"
  },
  {
    "name": "TripAdvisor",
    "id": "tripadvisor",
    "unicode": "f262",
    "category": "Brand Icons"
  },
  {
    "name": "Tumblr",
    "id": "tumblr",
    "unicode": "f173",
    "category": "Brand Icons"
  },
  {
    "name": "Tumblr Square",
    "id": "tumblr-square",
    "unicode": "f174",
    "category": "Brand Icons"
  },
  {
    "name": "Twitch",
    "id": "twitch",
    "unicode": "f1e8",
    "category": "Brand Icons"
  },
  {
    "name": "Twitter",
    "id": "twitter",
    "unicode": "f099",
    "category": "Brand Icons"
  },
  {
    "name": "Twitter Square",
    "id": "twitter-square",
    "unicode": "f081",
    "category": "Brand Icons"
  },
  {
    "name": "USB",
    "id": "usb",
    "unicode": "f287",
    "category": "Brand Icons"
  },
  {
    "name": "Viadeo",
    "id": "viadeo",
    "unicode": "f2a9",
    "category": "Brand Icons"
  },
  {
    "name": "Viadeo Square",
    "id": "viadeo-square",
    "unicode": "f2aa",
    "category": "Brand Icons"
  },
  {
    "name": "Vimeo",
    "id": "vimeo",
    "unicode": "f27d",
    "category": "Brand Icons"
  },
  {
    "name": "Vimeo Square",
    "id": "vimeo-square",
    "unicode": "f194",
    "category": "Brand Icons"
  },
  {
    "name": "Vine",
    "id": "vine",
    "unicode": "f1ca",
    "category": "Brand Icons"
  },
  {
    "name": "VK",
    "id": "vk",
    "unicode": "f189",
    "category": "Brand Icons"
  },
  {
    "name": "Weibo",
    "id": "weibo",
    "unicode": "f18a",
    "category": "Brand Icons"
  },
  {
    "name": "Weixin (WeChat)",
    "id": "weixin",
    "unicode": "f1d7",
    "category": "Brand Icons",
    "aliases": [
      "wechat"
    ]
  },
  {
    "name": "What's App",
    "id": "whatsapp",
    "unicode": "f232",
    "category": "Brand Icons"
  },
  {
    "name": "Wikipedia W",
    "id": "wikipedia-w",
    "unicode": "f266",
    "category": "Brand Icons"
  },
  {
    "name": "Windows",
    "id": "windows",
    "unicode": "f17a",
    "category": "Brand Icons"
  },
  {
    "name": "WordPress Logo",
    "id": "wordpress",
    "unicode": "f19a",
    "category": "Brand Icons"
  },
  {
    "name": "WPBeginner",
    "id": "wpbeginner",
    "unicode": "f297",
    "category": "Brand Icons"
  },
  {
    "name": "WPExplorer",
    "id": "wpexplorer",
    "unicode": "f2de",
    "category": "Brand Icons"
  },
  {
    "name": "WPForms",
    "id": "wpforms",
    "unicode": "f298",
    "category": "Brand Icons"
  },
  {
    "name": "Xing",
    "id": "xing",
    "unicode": "f168",
    "category": "Brand Icons"
  },
  {
    "name": "Xing Square",
    "id": "xing-square",
    "unicode": "f169",
    "category": "Brand Icons"
  },
  {
    "name": "Y Combinator",
    "id": "y-combinator",
    "unicode": "f23b",
    "category": "Brand Icons",
    "aliases": [
      "yc"
    ]
  },
  {
    "name": "Yahoo Logo",
    "id": "yahoo",
    "unicode": "f19e",
    "category": "Brand Icons"
  },
  {
    "name": "Yelp",
    "id": "yelp",
    "unicode": "f1e9",
    "category": "Brand Icons"
  },
  {
    "name": "Yoast",
    "id": "yoast",
    "unicode": "f2b1",
    "category": "Brand Icons"
  },
  {
    "name": "YouTube",
    "id": "youtube",
    "unicode": "f167",
    "category": "Brand Icons"
  },
  {
    "name": "YouTube Square",
    "id": "youtube-square",
    "unicode": "f166",
    "category": "Brand Icons"
  },
  {
    "name": "Area Chart",
    "id": "area-chart",
    "unicode": "f1fe",
    "category": "Chart Icons"
  },
  {
    "name": "Bar Chart",
    "id": "bar-chart",
    "unicode": "f080",
    "category": "Chart Icons",
    "aliases": [
      "bar-chart-o"
    ]
  },
  {
    "name": "Line Chart",
    "id": "line-chart",
    "unicode": "f201",
    "category": "Chart Icons"
  },
  {
    "name": "Pie Chart",
    "id": "pie-chart",
    "unicode": "f200",
    "category": "Chart Icons"
  },
  {
    "name": "Bitcoin (BTC)",
    "id": "btc",
    "unicode": "f15a",
    "category": "Currency Icons",
    "aliases": [
      "bitcoin"
    ]
  },
  {
    "name": "Euro (EUR)",
    "id": "eur",
    "unicode": "f153",
    "category": "Currency Icons",
    "aliases": [
      "euro"
    ]
  },
  {
    "name": "GBP",
    "id": "gbp",
    "unicode": "f154",
    "category": "Currency Icons"
  },
  {
    "name": "GG Currency",
    "id": "gg",
    "unicode": "f260",
    "category": "Currency Icons"
  },
  {
    "name": "GG Currency Circle",
    "id": "gg-circle",
    "unicode": "f261",
    "category": "Currency Icons"
  },
  {
    "name": "Indian Rupee (INR)",
    "id": "inr",
    "unicode": "f156",
    "category": "Currency Icons",
    "aliases": [
      "rupee"
    ]
  },
  {
    "name": "Japanese Yen (JPY)",
    "id": "jpy",
    "unicode": "f157",
    "category": "Currency Icons",
    "aliases": [
      "cny",
      "rmb",
      "yen"
    ]
  },
  {
    "name": "Korean Won (KRW)",
    "id": "krw",
    "unicode": "f159",
    "category": "Currency Icons",
    "aliases": [
      "won"
    ]
  },
  {
    "name": "Money",
    "id": "money",
    "unicode": "f0d6",
    "category": "Currency Icons"
  },
  {
    "name": "Russian Ruble (RUB)",
    "id": "rub",
    "unicode": "f158",
    "category": "Currency Icons",
    "aliases": [
      "ruble",
      "rouble"
    ]
  },
  {
    "name": "Shekel (ILS)",
    "id": "ils",
    "unicode": "f20b",
    "category": "Currency Icons",
    "aliases": [
      "shekel",
      "sheqel"
    ]
  },
  {
    "name": "Turkish Lira (TRY)",
    "id": "try",
    "unicode": "f195",
    "category": "Currency Icons",
    "aliases": [
      "turkish-lira"
    ]
  },
  {
    "name": "US Dollar",
    "id": "usd",
    "unicode": "f155",
    "category": "Currency Icons",
    "aliases": [
      "dollar"
    ]
  },
  {
    "name": "Viacoin (VIA)",
    "id": "viacoin",
    "unicode": "f237",
    "category": "Currency Icons"
  },
  {
    "name": "Angle Double Down",
    "id": "angle-double-down",
    "unicode": "f103",
    "category": "Directional Icons"
  },
  {
    "name": "Angle Double Left",
    "id": "angle-double-left",
    "unicode": "f100",
    "category": "Directional Icons"
  },
  {
    "name": "Angle Double Right",
    "id": "angle-double-right",
    "unicode": "f101",
    "category": "Directional Icons"
  },
  {
    "name": "Angle Double Up",
    "id": "angle-double-up",
    "unicode": "f102",
    "category": "Directional Icons"
  },
  {
    "name": "angle-down",
    "id": "angle-down",
    "unicode": "f107",
    "category": "Directional Icons"
  },
  {
    "name": "angle-left",
    "id": "angle-left",
    "unicode": "f104",
    "category": "Directional Icons"
  },
  {
    "name": "angle-right",
    "id": "angle-right",
    "unicode": "f105",
    "category": "Directional Icons"
  },
  {
    "name": "angle-up",
    "id": "angle-up",
    "unicode": "f106",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Down",
    "id": "arrow-circle-down",
    "unicode": "f0ab",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Left",
    "id": "arrow-circle-left",
    "unicode": "f0a8",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Outlined Down",
    "id": "arrow-circle-o-down",
    "unicode": "f01a",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Outlined Left",
    "id": "arrow-circle-o-left",
    "unicode": "f190",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Outlined Right",
    "id": "arrow-circle-o-right",
    "unicode": "f18e",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Outlined Up",
    "id": "arrow-circle-o-up",
    "unicode": "f01b",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Right",
    "id": "arrow-circle-right",
    "unicode": "f0a9",
    "category": "Directional Icons"
  },
  {
    "name": "Arrow Circle Up",
    "id": "arrow-circle-up",
    "unicode": "f0aa",
    "category": "Directional Icons"
  },
  {
    "name": "arrow-down",
    "id": "arrow-down",
    "unicode": "f063",
    "category": "Directional Icons"
  },
  {
    "name": "arrow-left",
    "id": "arrow-left",
    "unicode": "f060",
    "category": "Directional Icons"
  },
  {
    "name": "arrow-right",
    "id": "arrow-right",
    "unicode": "f061",
    "category": "Directional Icons"
  },
  {
    "name": "Arrows",
    "id": "arrows",
    "unicode": "f047",
    "category": "Directional Icons"
  },
  {
    "name": "Arrows Horizontal",
    "id": "arrows-h",
    "unicode": "f07e",
    "category": "Directional Icons"
  },
  {
    "name": "Arrows Vertical",
    "id": "arrows-v",
    "unicode": "f07d",
    "category": "Directional Icons"
  },
  {
    "name": "arrow-up",
    "id": "arrow-up",
    "unicode": "f062",
    "category": "Directional Icons"
  },
  {
    "name": "Caret Down",
    "id": "caret-down",
    "unicode": "f0d7",
    "category": "Directional Icons"
  },
  {
    "name": "Caret Left",
    "id": "caret-left",
    "unicode": "f0d9",
    "category": "Directional Icons"
  },
  {
    "name": "Caret Right",
    "id": "caret-right",
    "unicode": "f0da",
    "category": "Directional Icons"
  },
  {
    "name": "Caret Square Outlined Down",
    "id": "caret-square-o-down",
    "unicode": "f150",
    "category": "Directional Icons",
    "aliases": [
      "toggle-down"
    ]
  },
  {
    "name": "Caret Square Outlined Left",
    "id": "caret-square-o-left",
    "unicode": "f191",
    "category": "Directional Icons",
    "aliases": [
      "toggle-left"
    ]
  },
  {
    "name": "Caret Square Outlined Right",
    "id": "caret-square-o-right",
    "unicode": "f152",
    "category": "Directional Icons",
    "aliases": [
      "toggle-right"
    ]
  },
  {
    "name": "Caret Square Outlined Up",
    "id": "caret-square-o-up",
    "unicode": "f151",
    "category": "Directional Icons",
    "aliases": [
      "toggle-up"
    ]
  },
  {
    "name": "Caret Up",
    "id": "caret-up",
    "unicode": "f0d8",
    "category": "Directional Icons"
  },
  {
    "name": "Chevron Circle Down",
    "id": "chevron-circle-down",
    "unicode": "f13a",
    "category": "Directional Icons"
  },
  {
    "name": "Chevron Circle Left",
    "id": "chevron-circle-left",
    "unicode": "f137",
    "category": "Directional Icons"
  },
  {
    "name": "Chevron Circle Right",
    "id": "chevron-circle-right",
    "unicode": "f138",
    "category": "Directional Icons"
  },
  {
    "name": "Chevron Circle Up",
    "id": "chevron-circle-up",
    "unicode": "f139",
    "category": "Directional Icons"
  },
  {
    "name": "chevron-down",
    "id": "chevron-down",
    "unicode": "f078",
    "category": "Directional Icons"
  },
  {
    "name": "chevron-left",
    "id": "chevron-left",
    "unicode": "f053",
    "category": "Directional Icons"
  },
  {
    "name": "chevron-right",
    "id": "chevron-right",
    "unicode": "f054",
    "category": "Directional Icons"
  },
  {
    "name": "chevron-up",
    "id": "chevron-up",
    "unicode": "f077",
    "category": "Directional Icons"
  },
  {
    "name": "Exchange",
    "id": "exchange",
    "unicode": "f0ec",
    "category": "Directional Icons"
  },
  {
    "name": "Hand Outlined Down",
    "id": "hand-o-down",
    "unicode": "f0a7",
    "category": "Directional Icons"
  },
  {
    "name": "Hand Outlined Left",
    "id": "hand-o-left",
    "unicode": "f0a5",
    "category": "Directional Icons"
  },
  {
    "name": "Hand Outlined Right",
    "id": "hand-o-right",
    "unicode": "f0a4",
    "category": "Directional Icons"
  },
  {
    "name": "Hand Outlined Up",
    "id": "hand-o-up",
    "unicode": "f0a6",
    "category": "Directional Icons"
  },
  {
    "name": "Long Arrow Down",
    "id": "long-arrow-down",
    "unicode": "f175",
    "category": "Directional Icons"
  },
  {
    "name": "Long Arrow Left",
    "id": "long-arrow-left",
    "unicode": "f177",
    "category": "Directional Icons"
  },
  {
    "name": "Long Arrow Right",
    "id": "long-arrow-right",
    "unicode": "f178",
    "category": "Directional Icons"
  },
  {
    "name": "Long Arrow Up",
    "id": "long-arrow-up",
    "unicode": "f176",
    "category": "Directional Icons"
  },
  {
    "name": "Archive File Outlined",
    "id": "file-archive-o",
    "unicode": "f1c6",
    "category": "File Type Icons",
    "aliases": [
      "file-zip-o"
    ]
  },
  {
    "name": "Audio File Outlined",
    "id": "file-audio-o",
    "unicode": "f1c7",
    "category": "File Type Icons",
    "aliases": [
      "file-sound-o"
    ]
  },
  {
    "name": "Code File Outlined",
    "id": "file-code-o",
    "unicode": "f1c9",
    "category": "File Type Icons"
  },
  {
    "name": "Excel File Outlined",
    "id": "file-excel-o",
    "unicode": "f1c3",
    "category": "File Type Icons"
  },
  {
    "name": "File",
    "id": "file",
    "unicode": "f15b",
    "category": "File Type Icons"
  },
  {
    "name": "File Outlined",
    "id": "file-o",
    "unicode": "f016",
    "category": "File Type Icons"
  },
  {
    "name": "File Text",
    "id": "file-text",
    "unicode": "f15c",
    "category": "File Type Icons"
  },
  {
    "name": "File Text Outlined",
    "id": "file-text-o",
    "unicode": "f0f6",
    "category": "File Type Icons"
  },
  {
    "name": "Image File Outlined",
    "id": "file-image-o",
    "unicode": "f1c5",
    "category": "File Type Icons",
    "aliases": [
      "file-photo-o",
      "file-picture-o"
    ]
  },
  {
    "name": "PDF File Outlined",
    "id": "file-pdf-o",
    "unicode": "f1c1",
    "category": "File Type Icons"
  },
  {
    "name": "Powerpoint File Outlined",
    "id": "file-powerpoint-o",
    "unicode": "f1c4",
    "category": "File Type Icons"
  },
  {
    "name": "Video File Outlined",
    "id": "file-video-o",
    "unicode": "f1c8",
    "category": "File Type Icons",
    "aliases": [
      "file-movie-o"
    ]
  },
  {
    "name": "Word File Outlined",
    "id": "file-word-o",
    "unicode": "f1c2",
    "category": "File Type Icons"
  },
  {
    "name": "Check Square",
    "id": "check-square",
    "unicode": "f14a",
    "category": "Form Control Icons"
  },
  {
    "name": "Check Square Outlined",
    "id": "check-square-o",
    "unicode": "f046",
    "category": "Form Control Icons"
  },
  {
    "name": "Circle",
    "id": "circle",
    "unicode": "f111",
    "category": "Form Control Icons"
  },
  {
    "name": "Circle Outlined",
    "id": "circle-o",
    "unicode": "f10c",
    "category": "Form Control Icons"
  },
  {
    "name": "Dot Circle Outlined",
    "id": "dot-circle-o",
    "unicode": "f192",
    "category": "Form Control Icons"
  },
  {
    "name": "Minus Square",
    "id": "minus-square",
    "unicode": "f146",
    "category": "Form Control Icons"
  },
  {
    "name": "Minus Square Outlined",
    "id": "minus-square-o",
    "unicode": "f147",
    "category": "Form Control Icons"
  },
  {
    "name": "Plus Square Outlined",
    "id": "plus-square-o",
    "unicode": "f196",
    "category": "Form Control Icons"
  },
  {
    "name": "Square",
    "id": "square",
    "unicode": "f0c8",
    "category": "Form Control Icons"
  },
  {
    "name": "Square Outlined",
    "id": "square-o",
    "unicode": "f096",
    "category": "Form Control Icons"
  },
  {
    "name": "Hand Peace",
    "id": "hand-peace-o",
    "unicode": "f25b",
    "category": "Hand Icons"
  },
  {
    "name": "Hand Pointer",
    "id": "hand-pointer-o",
    "unicode": "f25a",
    "category": "Hand Icons"
  },
  {
    "name": "Lizard (Hand)",
    "id": "hand-lizard-o",
    "unicode": "f258",
    "category": "Hand Icons"
  },
  {
    "name": "Paper (Hand)",
    "id": "hand-paper-o",
    "unicode": "f256",
    "category": "Hand Icons",
    "aliases": [
      "hand-stop-o"
    ]
  },
  {
    "name": "Rock (Hand)",
    "id": "hand-rock-o",
    "unicode": "f255",
    "category": "Hand Icons",
    "aliases": [
      "hand-grab-o"
    ]
  },
  {
    "name": "Scissors (Hand)",
    "id": "hand-scissors-o",
    "unicode": "f257",
    "category": "Hand Icons"
  },
  {
    "name": "Spock (Hand)",
    "id": "hand-spock-o",
    "unicode": "f259",
    "category": "Hand Icons"
  },
  {
    "name": "Thumbs Down Outlined",
    "id": "thumbs-o-down",
    "unicode": "f088",
    "category": "Hand Icons"
  },
  {
    "name": "Thumbs Up Outlined",
    "id": "thumbs-o-up",
    "unicode": "f087",
    "category": "Hand Icons"
  },
  {
    "name": "thumbs-down",
    "id": "thumbs-down",
    "unicode": "f165",
    "category": "Hand Icons"
  },
  {
    "name": "thumbs-up",
    "id": "thumbs-up",
    "unicode": "f164",
    "category": "Hand Icons"
  },
  {
    "name": "ambulance",
    "id": "ambulance",
    "unicode": "f0f9",
    "category": "Medical Icons"
  },
  {
    "name": "H Square",
    "id": "h-square",
    "unicode": "f0fd",
    "category": "Medical Icons"
  },
  {
    "name": "Heart",
    "id": "heart",
    "unicode": "f004",
    "category": "Medical Icons"
  },
  {
    "name": "Heart Outlined",
    "id": "heart-o",
    "unicode": "f08a",
    "category": "Medical Icons"
  },
  {
    "name": "Heartbeat",
    "id": "heartbeat",
    "unicode": "f21e",
    "category": "Medical Icons"
  },
  {
    "name": "hospital Outlined",
    "id": "hospital-o",
    "unicode": "f0f8",
    "category": "Medical Icons"
  },
  {
    "name": "medkit",
    "id": "medkit",
    "unicode": "f0fa",
    "category": "Medical Icons"
  },
  {
    "name": "Plus Square",
    "id": "plus-square",
    "unicode": "f0fe",
    "category": "Medical Icons"
  },
  {
    "name": "Stethoscope",
    "id": "stethoscope",
    "unicode": "f0f1",
    "category": "Medical Icons"
  },
  {
    "name": "user-md",
    "id": "user-md",
    "unicode": "f0f0",
    "category": "Medical Icons"
  },
  {
    "name": "American Express Credit Card",
    "id": "cc-amex",
    "unicode": "f1f3",
    "category": "Payment Icons"
  },
  {
    "name": "Credit Card",
    "id": "credit-card-alt",
    "unicode": "f283",
    "category": "Payment Icons"
  },
  {
    "name": "credit-card",
    "id": "credit-card",
    "unicode": "f09d",
    "category": "Payment Icons"
  },
  {
    "name": "Diner's Club Credit Card",
    "id": "cc-diners-club",
    "unicode": "f24c",
    "category": "Payment Icons"
  },
  {
    "name": "Discover Credit Card",
    "id": "cc-discover",
    "unicode": "f1f2",
    "category": "Payment Icons"
  },
  {
    "name": "Google Wallet",
    "id": "google-wallet",
    "unicode": "f1ee",
    "category": "Payment Icons"
  },
  {
    "name": "JCB Credit Card",
    "id": "cc-jcb",
    "unicode": "f24b",
    "category": "Payment Icons"
  },
  {
    "name": "MasterCard Credit Card",
    "id": "cc-mastercard",
    "unicode": "f1f1",
    "category": "Payment Icons"
  },
  {
    "name": "Paypal",
    "id": "paypal",
    "unicode": "f1ed",
    "category": "Payment Icons"
  },
  {
    "name": "Paypal Credit Card",
    "id": "cc-paypal",
    "unicode": "f1f4",
    "category": "Payment Icons"
  },
  {
    "name": "Stripe Credit Card",
    "id": "cc-stripe",
    "unicode": "f1f5",
    "category": "Payment Icons"
  },
  {
    "name": "Visa Credit Card",
    "id": "cc-visa",
    "unicode": "f1f0",
    "category": "Payment Icons"
  },
  {
    "name": "Circle Outlined Notched",
    "id": "circle-o-notch",
    "unicode": "f1ce",
    "category": "Spinner Icons"
  },
  {
    "name": "cog",
    "id": "cog",
    "unicode": "f013",
    "category": "Spinner Icons",
    "aliases": [
      "gear"
    ]
  },
  {
    "name": "refresh",
    "id": "refresh",
    "unicode": "f021",
    "category": "Spinner Icons"
  },
  {
    "name": "Spinner",
    "id": "spinner",
    "unicode": "f110",
    "category": "Spinner Icons"
  },
  {
    "name": "align-center",
    "id": "align-center",
    "unicode": "f037",
    "category": "Text Editor Icons"
  },
  {
    "name": "align-justify",
    "id": "align-justify",
    "unicode": "f039",
    "category": "Text Editor Icons"
  },
  {
    "name": "align-left",
    "id": "align-left",
    "unicode": "f036",
    "category": "Text Editor Icons"
  },
  {
    "name": "align-right",
    "id": "align-right",
    "unicode": "f038",
    "category": "Text Editor Icons"
  },
  {
    "name": "bold",
    "id": "bold",
    "unicode": "f032",
    "category": "Text Editor Icons"
  },
  {
    "name": "Chain Broken",
    "id": "chain-broken",
    "unicode": "f127",
    "category": "Text Editor Icons",
    "aliases": [
      "unlink"
    ]
  },
  {
    "name": "Clipboard",
    "id": "clipboard",
    "unicode": "f0ea",
    "category": "Text Editor Icons",
    "aliases": [
      "paste"
    ]
  },
  {
    "name": "Columns",
    "id": "columns",
    "unicode": "f0db",
    "category": "Text Editor Icons"
  },
  {
    "name": "eraser",
    "id": "eraser",
    "unicode": "f12d",
    "category": "Text Editor Icons"
  },
  {
    "name": "Files Outlined",
    "id": "files-o",
    "unicode": "f0c5",
    "category": "Text Editor Icons",
    "aliases": [
      "copy"
    ]
  },
  {
    "name": "Floppy Outlined",
    "id": "floppy-o",
    "unicode": "f0c7",
    "category": "Text Editor Icons",
    "aliases": [
      "save"
    ]
  },
  {
    "name": "font",
    "id": "font",
    "unicode": "f031",
    "category": "Text Editor Icons"
  },
  {
    "name": "header",
    "id": "header",
    "unicode": "f1dc",
    "category": "Text Editor Icons"
  },
  {
    "name": "Indent",
    "id": "indent",
    "unicode": "f03c",
    "category": "Text Editor Icons"
  },
  {
    "name": "italic",
    "id": "italic",
    "unicode": "f033",
    "category": "Text Editor Icons"
  },
  {
    "name": "Link",
    "id": "link",
    "unicode": "f0c1",
    "category": "Text Editor Icons",
    "aliases": [
      "chain"
    ]
  },
  {
    "name": "list",
    "id": "list",
    "unicode": "f03a",
    "category": "Text Editor Icons"
  },
  {
    "name": "list-alt",
    "id": "list-alt",
    "unicode": "f022",
    "category": "Text Editor Icons"
  },
  {
    "name": "list-ol",
    "id": "list-ol",
    "unicode": "f0cb",
    "category": "Text Editor Icons"
  },
  {
    "name": "list-ul",
    "id": "list-ul",
    "unicode": "f0ca",
    "category": "Text Editor Icons"
  },
  {
    "name": "Outdent",
    "id": "outdent",
    "unicode": "f03b",
    "category": "Text Editor Icons",
    "aliases": [
      "dedent"
    ]
  },
  {
    "name": "Paperclip",
    "id": "paperclip",
    "unicode": "f0c6",
    "category": "Text Editor Icons"
  },
  {
    "name": "paragraph",
    "id": "paragraph",
    "unicode": "f1dd",
    "category": "Text Editor Icons"
  },
  {
    "name": "Repeat",
    "id": "repeat",
    "unicode": "f01e",
    "category": "Text Editor Icons",
    "aliases": [
      "rotate-right"
    ]
  },
  {
    "name": "Scissors",
    "id": "scissors",
    "unicode": "f0c4",
    "category": "Text Editor Icons",
    "aliases": [
      "cut"
    ]
  },
  {
    "name": "Strikethrough",
    "id": "strikethrough",
    "unicode": "f0cc",
    "category": "Text Editor Icons"
  },
  {
    "name": "subscript",
    "id": "subscript",
    "unicode": "f12c",
    "category": "Text Editor Icons"
  },
  {
    "name": "superscript",
    "id": "superscript",
    "unicode": "f12b",
    "category": "Text Editor Icons"
  },
  {
    "name": "table",
    "id": "table",
    "unicode": "f0ce",
    "category": "Text Editor Icons"
  },
  {
    "name": "text-height",
    "id": "text-height",
    "unicode": "f034",
    "category": "Text Editor Icons"
  },
  {
    "name": "text-width",
    "id": "text-width",
    "unicode": "f035",
    "category": "Text Editor Icons"
  },
  {
    "name": "th",
    "id": "th",
    "unicode": "f00a",
    "category": "Text Editor Icons"
  },
  {
    "name": "th-large",
    "id": "th-large",
    "unicode": "f009",
    "category": "Text Editor Icons"
  },
  {
    "name": "th-list",
    "id": "th-list",
    "unicode": "f00b",
    "category": "Text Editor Icons"
  },
  {
    "name": "Underline",
    "id": "underline",
    "unicode": "f0cd",
    "category": "Text Editor Icons"
  },
  {
    "name": "Undo",
    "id": "undo",
    "unicode": "f0e2",
    "category": "Text Editor Icons",
    "aliases": [
      "rotate-left"
    ]
  },
  {
    "name": "Bicycle",
    "id": "bicycle",
    "unicode": "f206",
    "category": "Transportation Icons"
  },
  {
    "name": "Bus",
    "id": "bus",
    "unicode": "f207",
    "category": "Transportation Icons"
  },
  {
    "name": "Car",
    "id": "car",
    "unicode": "f1b9",
    "category": "Transportation Icons",
    "aliases": [
      "automobile"
    ]
  },
  {
    "name": "fighter-jet",
    "id": "fighter-jet",
    "unicode": "f0fb",
    "category": "Transportation Icons"
  },
  {
    "name": "Motorcycle",
    "id": "motorcycle",
    "unicode": "f21c",
    "category": "Transportation Icons"
  },
  {
    "name": "plane",
    "id": "plane",
    "unicode": "f072",
    "category": "Transportation Icons"
  },
  {
    "name": "rocket",
    "id": "rocket",
    "unicode": "f135",
    "category": "Transportation Icons"
  },
  {
    "name": "Ship",
    "id": "ship",
    "unicode": "f21a",
    "category": "Transportation Icons"
  },
  {
    "name": "Space Shuttle",
    "id": "space-shuttle",
    "unicode": "f197",
    "category": "Transportation Icons"
  },
  {
    "name": "Subway",
    "id": "subway",
    "unicode": "f239",
    "category": "Transportation Icons"
  },
  {
    "name": "Taxi",
    "id": "taxi",
    "unicode": "f1ba",
    "category": "Transportation Icons",
    "aliases": [
      "cab"
    ]
  },
  {
    "name": "Train",
    "id": "train",
    "unicode": "f238",
    "category": "Transportation Icons"
  },
  {
    "name": "truck",
    "id": "truck",
    "unicode": "f0d1",
    "category": "Transportation Icons"
  },
  {
    "name": "Genderless",
    "id": "genderless",
    "unicode": "f22d",
    "category": "Uncategorized"
  },
  {
    "name": "Mars",
    "id": "mars",
    "unicode": "f222",
    "category": "Uncategorized"
  },
  {
    "name": "Mars Double",
    "id": "mars-double",
    "unicode": "f227",
    "category": "Uncategorized"
  },
  {
    "name": "Mars Stroke",
    "id": "mars-stroke",
    "unicode": "f229",
    "category": "Uncategorized"
  },
  {
    "name": "Mars Stroke Horizontal",
    "id": "mars-stroke-h",
    "unicode": "f22b",
    "category": "Uncategorized"
  },
  {
    "name": "Mars Stroke Vertical",
    "id": "mars-stroke-v",
    "unicode": "f22a",
    "category": "Uncategorized"
  },
  {
    "name": "Mercury",
    "id": "mercury",
    "unicode": "f223",
    "category": "Uncategorized"
  },
  {
    "name": "Neuter",
    "id": "neuter",
    "unicode": "f22c",
    "category": "Uncategorized"
  },
  {
    "name": "Transgender",
    "id": "transgender",
    "unicode": "f224",
    "category": "Uncategorized",
    "aliases": [
      "intersex"
    ]
  },
  {
    "name": "Transgender Alt",
    "id": "transgender-alt",
    "unicode": "f225",
    "category": "Uncategorized"
  },
  {
    "name": "Venus",
    "id": "venus",
    "unicode": "f221",
    "category": "Uncategorized"
  },
  {
    "name": "Venus Double",
    "id": "venus-double",
    "unicode": "f226",
    "category": "Uncategorized"
  },
  {
    "name": "Venus Mars",
    "id": "venus-mars",
    "unicode": "f228",
    "category": "Uncategorized"
  },
  {
    "name": "Arrows Alt",
    "id": "arrows-alt",
    "unicode": "f0b2",
    "category": "Video Player Icons"
  },
  {
    "name": "backward",
    "id": "backward",
    "unicode": "f04a",
    "category": "Video Player Icons"
  },
  {
    "name": "Compress",
    "id": "compress",
    "unicode": "f066",
    "category": "Video Player Icons"
  },
  {
    "name": "eject",
    "id": "eject",
    "unicode": "f052",
    "category": "Video Player Icons"
  },
  {
    "name": "Expand",
    "id": "expand",
    "unicode": "f065",
    "category": "Video Player Icons"
  },
  {
    "name": "fast-backward",
    "id": "fast-backward",
    "unicode": "f049",
    "category": "Video Player Icons"
  },
  {
    "name": "fast-forward",
    "id": "fast-forward",
    "unicode": "f050",
    "category": "Video Player Icons"
  },
  {
    "name": "forward",
    "id": "forward",
    "unicode": "f04e",
    "category": "Video Player Icons"
  },
  {
    "name": "pause",
    "id": "pause",
    "unicode": "f04c",
    "category": "Video Player Icons"
  },
  {
    "name": "Pause Circle",
    "id": "pause-circle",
    "unicode": "f28b",
    "category": "Video Player Icons"
  },
  {
    "name": "Pause Circle Outlined",
    "id": "pause-circle-o",
    "unicode": "f28c",
    "category": "Video Player Icons"
  },
  {
    "name": "play",
    "id": "play",
    "unicode": "f04b",
    "category": "Video Player Icons"
  },
  {
    "name": "Play Circle",
    "id": "play-circle",
    "unicode": "f144",
    "category": "Video Player Icons"
  },
  {
    "name": "Play Circle Outlined",
    "id": "play-circle-o",
    "unicode": "f01d",
    "category": "Video Player Icons"
  },
  {
    "name": "random",
    "id": "random",
    "unicode": "f074",
    "category": "Video Player Icons"
  },
  {
    "name": "step-backward",
    "id": "step-backward",
    "unicode": "f048",
    "category": "Video Player Icons"
  },
  {
    "name": "step-forward",
    "id": "step-forward",
    "unicode": "f051",
    "category": "Video Player Icons"
  },
  {
    "name": "stop",
    "id": "stop",
    "unicode": "f04d",
    "category": "Video Player Icons"
  },
  {
    "name": "Stop Circle",
    "id": "stop-circle",
    "unicode": "f28d",
    "category": "Video Player Icons"
  },
  {
    "name": "Stop Circle Outlined",
    "id": "stop-circle-o",
    "unicode": "f28e",
    "category": "Video Player Icons"
  },
  {
    "name": "YouTube Play",
    "id": "youtube-play",
    "unicode": "f16a",
    "category": "Video Player Icons"
  },
  {
    "name": "Add to Shopping Cart",
    "id": "cart-plus",
    "unicode": "f217",
    "category": "Web Application Icons"
  },
  {
    "name": "Add User",
    "id": "user-plus",
    "unicode": "f234",
    "category": "Web Application Icons"
  },
  {
    "name": "Address Book",
    "id": "address-book",
    "unicode": "f2b9",
    "category": "Web Application Icons"
  },
  {
    "name": "Address Book Outlined",
    "id": "address-book-o",
    "unicode": "f2ba",
    "category": "Web Application Icons"
  },
  {
    "name": "Address Card",
    "id": "address-card",
    "unicode": "f2bb",
    "category": "Web Application Icons",
    "aliases": [
      "vcard"
    ]
  },
  {
    "name": "Address Card Outlined",
    "id": "address-card-o",
    "unicode": "f2bc",
    "category": "Web Application Icons",
    "aliases": [
      "vcard-o"
    ]
  },
  {
    "name": "adjust",
    "id": "adjust",
    "unicode": "f042",
    "category": "Web Application Icons"
  },
  {
    "name": "Anchor",
    "id": "anchor",
    "unicode": "f13d",
    "category": "Web Application Icons"
  },
  {
    "name": "Archive",
    "id": "archive",
    "unicode": "f187",
    "category": "Web Application Icons"
  },
  {
    "name": "asterisk",
    "id": "asterisk",
    "unicode": "f069",
    "category": "Web Application Icons"
  },
  {
    "name": "At",
    "id": "at",
    "unicode": "f1fa",
    "category": "Web Application Icons"
  },
  {
    "name": "Balance Scale",
    "id": "balance-scale",
    "unicode": "f24e",
    "category": "Web Application Icons"
  },
  {
    "name": "ban",
    "id": "ban",
    "unicode": "f05e",
    "category": "Web Application Icons"
  },
  {
    "name": "barcode",
    "id": "barcode",
    "unicode": "f02a",
    "category": "Web Application Icons"
  },
  {
    "name": "Bars",
    "id": "bars",
    "unicode": "f0c9",
    "category": "Web Application Icons",
    "aliases": [
      "navicon",
      "reorder"
    ]
  },
  {
    "name": "Bath",
    "id": "bath",
    "unicode": "f2cd",
    "category": "Web Application Icons",
    "aliases": [
      "bathtub",
      "s15"
    ]
  },
  {
    "name": "Battery 1/2 Full",
    "id": "battery-half",
    "unicode": "f242",
    "category": "Web Application Icons",
    "aliases": [
      "battery-2"
    ]
  },
  {
    "name": "Battery 1/4 Full",
    "id": "battery-quarter",
    "unicode": "f243",
    "category": "Web Application Icons",
    "aliases": [
      "battery-1"
    ]
  },
  {
    "name": "Battery 3/4 Full",
    "id": "battery-three-quarters",
    "unicode": "f241",
    "category": "Web Application Icons",
    "aliases": [
      "battery-3"
    ]
  },
  {
    "name": "Battery Empty",
    "id": "battery-empty",
    "unicode": "f244",
    "category": "Web Application Icons",
    "aliases": [
      "battery-0"
    ]
  },
  {
    "name": "Battery Full",
    "id": "battery-full",
    "unicode": "f240",
    "category": "Web Application Icons",
    "aliases": [
      "battery-4",
      "battery"
    ]
  },
  {
    "name": "Bed",
    "id": "bed",
    "unicode": "f236",
    "category": "Web Application Icons",
    "aliases": [
      "hotel"
    ]
  },
  {
    "name": "beer",
    "id": "beer",
    "unicode": "f0fc",
    "category": "Web Application Icons"
  },
  {
    "name": "bell",
    "id": "bell",
    "unicode": "f0f3",
    "category": "Web Application Icons"
  },
  {
    "name": "Bell Outlined",
    "id": "bell-o",
    "unicode": "f0a2",
    "category": "Web Application Icons"
  },
  {
    "name": "Bell Slash",
    "id": "bell-slash",
    "unicode": "f1f6",
    "category": "Web Application Icons"
  },
  {
    "name": "Bell Slash Outlined",
    "id": "bell-slash-o",
    "unicode": "f1f7",
    "category": "Web Application Icons"
  },
  {
    "name": "Binoculars",
    "id": "binoculars",
    "unicode": "f1e5",
    "category": "Web Application Icons"
  },
  {
    "name": "Birthday Cake",
    "id": "birthday-cake",
    "unicode": "f1fd",
    "category": "Web Application Icons"
  },
  {
    "name": "Bomb",
    "id": "bomb",
    "unicode": "f1e2",
    "category": "Web Application Icons"
  },
  {
    "name": "book",
    "id": "book",
    "unicode": "f02d",
    "category": "Web Application Icons"
  },
  {
    "name": "bookmark",
    "id": "bookmark",
    "unicode": "f02e",
    "category": "Web Application Icons"
  },
  {
    "name": "Bookmark Outlined",
    "id": "bookmark-o",
    "unicode": "f097",
    "category": "Web Application Icons"
  },
  {
    "name": "Briefcase",
    "id": "briefcase",
    "unicode": "f0b1",
    "category": "Web Application Icons"
  },
  {
    "name": "Bug",
    "id": "bug",
    "unicode": "f188",
    "category": "Web Application Icons"
  },
  {
    "name": "Building",
    "id": "building",
    "unicode": "f1ad",
    "category": "Web Application Icons"
  },
  {
    "name": "Building Outlined",
    "id": "building-o",
    "unicode": "f0f7",
    "category": "Web Application Icons"
  },
  {
    "name": "bullhorn",
    "id": "bullhorn",
    "unicode": "f0a1",
    "category": "Web Application Icons"
  },
  {
    "name": "Bullseye",
    "id": "bullseye",
    "unicode": "f140",
    "category": "Web Application Icons"
  },
  {
    "name": "Calculator",
    "id": "calculator",
    "unicode": "f1ec",
    "category": "Web Application Icons"
  },
  {
    "name": "calendar",
    "id": "calendar",
    "unicode": "f073",
    "category": "Web Application Icons"
  },
  {
    "name": "Calendar Check Outlined",
    "id": "calendar-check-o",
    "unicode": "f274",
    "category": "Web Application Icons"
  },
  {
    "name": "Calendar Minus Outlined",
    "id": "calendar-minus-o",
    "unicode": "f272",
    "category": "Web Application Icons"
  },
  {
    "name": "Calendar Plus Outlined",
    "id": "calendar-plus-o",
    "unicode": "f271",
    "category": "Web Application Icons"
  },
  {
    "name": "Calendar Times Outlined",
    "id": "calendar-times-o",
    "unicode": "f273",
    "category": "Web Application Icons"
  },
  {
    "name": "calendar-o",
    "id": "calendar-o",
    "unicode": "f133",
    "category": "Web Application Icons"
  },
  {
    "name": "camera",
    "id": "camera",
    "unicode": "f030",
    "category": "Web Application Icons"
  },
  {
    "name": "camera-retro",
    "id": "camera-retro",
    "unicode": "f083",
    "category": "Web Application Icons"
  },
  {
    "name": "certificate",
    "id": "certificate",
    "unicode": "f0a3",
    "category": "Web Application Icons"
  },
  {
    "name": "Check",
    "id": "check",
    "unicode": "f00c",
    "category": "Web Application Icons"
  },
  {
    "name": "Check Circle",
    "id": "check-circle",
    "unicode": "f058",
    "category": "Web Application Icons"
  },
  {
    "name": "Check Circle Outlined",
    "id": "check-circle-o",
    "unicode": "f05d",
    "category": "Web Application Icons"
  },
  {
    "name": "Child",
    "id": "child",
    "unicode": "f1ae",
    "category": "Web Application Icons"
  },
  {
    "name": "Circle Outlined Thin",
    "id": "circle-thin",
    "unicode": "f1db",
    "category": "Web Application Icons"
  },
  {
    "name": "Clock Outlined",
    "id": "clock-o",
    "unicode": "f017",
    "category": "Web Application Icons"
  },
  {
    "name": "Clone",
    "id": "clone",
    "unicode": "f24d",
    "category": "Web Application Icons"
  },
  {
    "name": "Cloud",
    "id": "cloud",
    "unicode": "f0c2",
    "category": "Web Application Icons"
  },
  {
    "name": "Cloud Download",
    "id": "cloud-download",
    "unicode": "f0ed",
    "category": "Web Application Icons"
  },
  {
    "name": "Cloud Upload",
    "id": "cloud-upload",
    "unicode": "f0ee",
    "category": "Web Application Icons"
  },
  {
    "name": "Code",
    "id": "code",
    "unicode": "f121",
    "category": "Web Application Icons"
  },
  {
    "name": "code-fork",
    "id": "code-fork",
    "unicode": "f126",
    "category": "Web Application Icons"
  },
  {
    "name": "Coffee",
    "id": "coffee",
    "unicode": "f0f4",
    "category": "Web Application Icons"
  },
  {
    "name": "cogs",
    "id": "cogs",
    "unicode": "f085",
    "category": "Web Application Icons",
    "aliases": [
      "gears"
    ]
  },
  {
    "name": "comment",
    "id": "comment",
    "unicode": "f075",
    "category": "Web Application Icons"
  },
  {
    "name": "Commenting",
    "id": "commenting",
    "unicode": "f27a",
    "category": "Web Application Icons"
  },
  {
    "name": "Commenting Outlined",
    "id": "commenting-o",
    "unicode": "f27b",
    "category": "Web Application Icons"
  },
  {
    "name": "comment-o",
    "id": "comment-o",
    "unicode": "f0e5",
    "category": "Web Application Icons"
  },
  {
    "name": "comments",
    "id": "comments",
    "unicode": "f086",
    "category": "Web Application Icons"
  },
  {
    "name": "comments-o",
    "id": "comments-o",
    "unicode": "f0e6",
    "category": "Web Application Icons"
  },
  {
    "name": "Compass",
    "id": "compass",
    "unicode": "f14e",
    "category": "Web Application Icons"
  },
  {
    "name": "Copyright",
    "id": "copyright",
    "unicode": "f1f9",
    "category": "Web Application Icons"
  },
  {
    "name": "Creative Commons",
    "id": "creative-commons",
    "unicode": "f25e",
    "category": "Web Application Icons"
  },
  {
    "name": "crop",
    "id": "crop",
    "unicode": "f125",
    "category": "Web Application Icons"
  },
  {
    "name": "Crosshairs",
    "id": "crosshairs",
    "unicode": "f05b",
    "category": "Web Application Icons"
  },
  {
    "name": "Cube",
    "id": "cube",
    "unicode": "f1b2",
    "category": "Web Application Icons"
  },
  {
    "name": "Cubes",
    "id": "cubes",
    "unicode": "f1b3",
    "category": "Web Application Icons"
  },
  {
    "name": "Cutlery",
    "id": "cutlery",
    "unicode": "f0f5",
    "category": "Web Application Icons"
  },
  {
    "name": "Database",
    "id": "database",
    "unicode": "f1c0",
    "category": "Web Application Icons"
  },
  {
    "name": "Desktop",
    "id": "desktop",
    "unicode": "f108",
    "category": "Web Application Icons"
  },
  {
    "name": "Diamond",
    "id": "diamond",
    "unicode": "f219",
    "category": "Web Application Icons"
  },
  {
    "name": "Download",
    "id": "download",
    "unicode": "f019",
    "category": "Web Application Icons"
  },
  {
    "name": "Ellipsis Horizontal",
    "id": "ellipsis-h",
    "unicode": "f141",
    "category": "Web Application Icons"
  },
  {
    "name": "Ellipsis Vertical",
    "id": "ellipsis-v",
    "unicode": "f142",
    "category": "Web Application Icons"
  },
  {
    "name": "Envelope",
    "id": "envelope",
    "unicode": "f0e0",
    "category": "Web Application Icons"
  },
  {
    "name": "Envelope Open",
    "id": "envelope-open",
    "unicode": "f2b6",
    "category": "Web Application Icons"
  },
  {
    "name": "Envelope Open Outlined",
    "id": "envelope-open-o",
    "unicode": "f2b7",
    "category": "Web Application Icons"
  },
  {
    "name": "Envelope Outlined",
    "id": "envelope-o",
    "unicode": "f003",
    "category": "Web Application Icons"
  },
  {
    "name": "Envelope Square",
    "id": "envelope-square",
    "unicode": "f199",
    "category": "Web Application Icons"
  },
  {
    "name": "exclamation",
    "id": "exclamation",
    "unicode": "f12a",
    "category": "Web Application Icons"
  },
  {
    "name": "Exclamation Circle",
    "id": "exclamation-circle",
    "unicode": "f06a",
    "category": "Web Application Icons"
  },
  {
    "name": "Exclamation Triangle",
    "id": "exclamation-triangle",
    "unicode": "f071",
    "category": "Web Application Icons",
    "aliases": [
      "warning"
    ]
  },
  {
    "name": "External Link",
    "id": "external-link",
    "unicode": "f08e",
    "category": "Web Application Icons"
  },
  {
    "name": "External Link Square",
    "id": "external-link-square",
    "unicode": "f14c",
    "category": "Web Application Icons"
  },
  {
    "name": "Eye",
    "id": "eye",
    "unicode": "f06e",
    "category": "Web Application Icons"
  },
  {
    "name": "Eye Slash",
    "id": "eye-slash",
    "unicode": "f070",
    "category": "Web Application Icons"
  },
  {
    "name": "Eyedropper",
    "id": "eyedropper",
    "unicode": "f1fb",
    "category": "Web Application Icons"
  },
  {
    "name": "Fax",
    "id": "fax",
    "unicode": "f1ac",
    "category": "Web Application Icons"
  },
  {
    "name": "Female",
    "id": "female",
    "unicode": "f182",
    "category": "Web Application Icons"
  },
  {
    "name": "Film",
    "id": "film",
    "unicode": "f008",
    "category": "Web Application Icons"
  },
  {
    "name": "Filter",
    "id": "filter",
    "unicode": "f0b0",
    "category": "Web Application Icons"
  },
  {
    "name": "fire",
    "id": "fire",
    "unicode": "f06d",
    "category": "Web Application Icons"
  },
  {
    "name": "fire-extinguisher",
    "id": "fire-extinguisher",
    "unicode": "f134",
    "category": "Web Application Icons"
  },
  {
    "name": "flag",
    "id": "flag",
    "unicode": "f024",
    "category": "Web Application Icons"
  },
  {
    "name": "Flag Outlined",
    "id": "flag-o",
    "unicode": "f11d",
    "category": "Web Application Icons"
  },
  {
    "name": "flag-checkered",
    "id": "flag-checkered",
    "unicode": "f11e",
    "category": "Web Application Icons"
  },
  {
    "name": "Flask",
    "id": "flask",
    "unicode": "f0c3",
    "category": "Web Application Icons"
  },
  {
    "name": "Folder",
    "id": "folder",
    "unicode": "f07b",
    "category": "Web Application Icons"
  },
  {
    "name": "Folder Open",
    "id": "folder-open",
    "unicode": "f07c",
    "category": "Web Application Icons"
  },
  {
    "name": "Folder Open Outlined",
    "id": "folder-open-o",
    "unicode": "f115",
    "category": "Web Application Icons"
  },
  {
    "name": "Folder Outlined",
    "id": "folder-o",
    "unicode": "f114",
    "category": "Web Application Icons"
  },
  {
    "name": "Frown Outlined",
    "id": "frown-o",
    "unicode": "f119",
    "category": "Web Application Icons"
  },
  {
    "name": "Futbol Outlined",
    "id": "futbol-o",
    "unicode": "f1e3",
    "category": "Web Application Icons",
    "aliases": [
      "soccer-ball-o"
    ]
  },
  {
    "name": "Gamepad",
    "id": "gamepad",
    "unicode": "f11b",
    "category": "Web Application Icons"
  },
  {
    "name": "Gavel",
    "id": "gavel",
    "unicode": "f0e3",
    "category": "Web Application Icons",
    "aliases": [
      "legal"
    ]
  },
  {
    "name": "gift",
    "id": "gift",
    "unicode": "f06b",
    "category": "Web Application Icons"
  },
  {
    "name": "Glass",
    "id": "glass",
    "unicode": "f000",
    "category": "Web Application Icons"
  },
  {
    "name": "Globe",
    "id": "globe",
    "unicode": "f0ac",
    "category": "Web Application Icons"
  },
  {
    "name": "Graduation Cap",
    "id": "graduation-cap",
    "unicode": "f19d",
    "category": "Web Application Icons",
    "aliases": [
      "mortar-board"
    ]
  },
  {
    "name": "Handshake Outlined",
    "id": "handshake-o",
    "unicode": "f2b5",
    "category": "Web Application Icons"
  },
  {
    "name": "Hashtag",
    "id": "hashtag",
    "unicode": "f292",
    "category": "Web Application Icons"
  },
  {
    "name": "HDD",
    "id": "hdd-o",
    "unicode": "f0a0",
    "category": "Web Application Icons"
  },
  {
    "name": "headphones",
    "id": "headphones",
    "unicode": "f025",
    "category": "Web Application Icons"
  },
  {
    "name": "History",
    "id": "history",
    "unicode": "f1da",
    "category": "Web Application Icons"
  },
  {
    "name": "home",
    "id": "home",
    "unicode": "f015",
    "category": "Web Application Icons"
  },
  {
    "name": "Hourglass",
    "id": "hourglass",
    "unicode": "f254",
    "category": "Web Application Icons"
  },
  {
    "name": "Hourglass End",
    "id": "hourglass-end",
    "unicode": "f253",
    "category": "Web Application Icons",
    "aliases": [
      "hourglass-3"
    ]
  },
  {
    "name": "Hourglass Half",
    "id": "hourglass-half",
    "unicode": "f252",
    "category": "Web Application Icons",
    "aliases": [
      "hourglass-2"
    ]
  },
  {
    "name": "Hourglass Outlined",
    "id": "hourglass-o",
    "unicode": "f250",
    "category": "Web Application Icons"
  },
  {
    "name": "Hourglass Start",
    "id": "hourglass-start",
    "unicode": "f251",
    "category": "Web Application Icons",
    "aliases": [
      "hourglass-1"
    ]
  },
  {
    "name": "I Beam Cursor",
    "id": "i-cursor",
    "unicode": "f246",
    "category": "Web Application Icons"
  },
  {
    "name": "Identification Badge",
    "id": "id-badge",
    "unicode": "f2c1",
    "category": "Web Application Icons"
  },
  {
    "name": "Identification Card",
    "id": "id-card",
    "unicode": "f2c2",
    "category": "Web Application Icons",
    "aliases": [
      "drivers-license"
    ]
  },
  {
    "name": "Identification Card Outlined",
    "id": "id-card-o",
    "unicode": "f2c3",
    "category": "Web Application Icons",
    "aliases": [
      "drivers-license-o"
    ]
  },
  {
    "name": "inbox",
    "id": "inbox",
    "unicode": "f01c",
    "category": "Web Application Icons"
  },
  {
    "name": "Industry",
    "id": "industry",
    "unicode": "f275",
    "category": "Web Application Icons"
  },
  {
    "name": "Info",
    "id": "info",
    "unicode": "f129",
    "category": "Web Application Icons"
  },
  {
    "name": "Info Circle",
    "id": "info-circle",
    "unicode": "f05a",
    "category": "Web Application Icons"
  },
  {
    "name": "key",
    "id": "key",
    "unicode": "f084",
    "category": "Web Application Icons"
  },
  {
    "name": "Keyboard Outlined",
    "id": "keyboard-o",
    "unicode": "f11c",
    "category": "Web Application Icons"
  },
  {
    "name": "Language",
    "id": "language",
    "unicode": "f1ab",
    "category": "Web Application Icons"
  },
  {
    "name": "Laptop",
    "id": "laptop",
    "unicode": "f109",
    "category": "Web Application Icons"
  },
  {
    "name": "leaf",
    "id": "leaf",
    "unicode": "f06c",
    "category": "Web Application Icons"
  },
  {
    "name": "Lemon Outlined",
    "id": "lemon-o",
    "unicode": "f094",
    "category": "Web Application Icons"
  },
  {
    "name": "Level Down",
    "id": "level-down",
    "unicode": "f149",
    "category": "Web Application Icons"
  },
  {
    "name": "Level Up",
    "id": "level-up",
    "unicode": "f148",
    "category": "Web Application Icons"
  },
  {
    "name": "Life Ring",
    "id": "life-ring",
    "unicode": "f1cd",
    "category": "Web Application Icons",
    "aliases": [
      "life-bouy",
      "life-buoy",
      "life-saver",
      "support"
    ]
  },
  {
    "name": "Lightbulb Outlined",
    "id": "lightbulb-o",
    "unicode": "f0eb",
    "category": "Web Application Icons"
  },
  {
    "name": "Lightning Bolt",
    "id": "bolt",
    "unicode": "f0e7",
    "category": "Web Application Icons",
    "aliases": [
      "flash"
    ]
  },
  {
    "name": "location-arrow",
    "id": "location-arrow",
    "unicode": "f124",
    "category": "Web Application Icons"
  },
  {
    "name": "lock",
    "id": "lock",
    "unicode": "f023",
    "category": "Web Application Icons"
  },
  {
    "name": "magic",
    "id": "magic",
    "unicode": "f0d0",
    "category": "Web Application Icons"
  },
  {
    "name": "magnet",
    "id": "magnet",
    "unicode": "f076",
    "category": "Web Application Icons"
  },
  {
    "name": "Male",
    "id": "male",
    "unicode": "f183",
    "category": "Web Application Icons"
  },
  {
    "name": "Map",
    "id": "map",
    "unicode": "f279",
    "category": "Web Application Icons"
  },
  {
    "name": "Map Outlined",
    "id": "map-o",
    "unicode": "f278",
    "category": "Web Application Icons"
  },
  {
    "name": "Map Pin",
    "id": "map-pin",
    "unicode": "f276",
    "category": "Web Application Icons"
  },
  {
    "name": "Map Signs",
    "id": "map-signs",
    "unicode": "f277",
    "category": "Web Application Icons"
  },
  {
    "name": "map-marker",
    "id": "map-marker",
    "unicode": "f041",
    "category": "Web Application Icons"
  },
  {
    "name": "Meh Outlined",
    "id": "meh-o",
    "unicode": "f11a",
    "category": "Web Application Icons"
  },
  {
    "name": "Microchip",
    "id": "microchip",
    "unicode": "f2db",
    "category": "Web Application Icons"
  },
  {
    "name": "microphone",
    "id": "microphone",
    "unicode": "f130",
    "category": "Web Application Icons"
  },
  {
    "name": "Microphone Slash",
    "id": "microphone-slash",
    "unicode": "f131",
    "category": "Web Application Icons"
  },
  {
    "name": "minus",
    "id": "minus",
    "unicode": "f068",
    "category": "Web Application Icons"
  },
  {
    "name": "Minus Circle",
    "id": "minus-circle",
    "unicode": "f056",
    "category": "Web Application Icons"
  },
  {
    "name": "Mobile Phone",
    "id": "mobile",
    "unicode": "f10b",
    "category": "Web Application Icons",
    "aliases": [
      "mobile-phone"
    ]
  },
  {
    "name": "Moon Outlined",
    "id": "moon-o",
    "unicode": "f186",
    "category": "Web Application Icons"
  },
  {
    "name": "Mouse Pointer",
    "id": "mouse-pointer",
    "unicode": "f245",
    "category": "Web Application Icons"
  },
  {
    "name": "Music",
    "id": "music",
    "unicode": "f001",
    "category": "Web Application Icons"
  },
  {
    "name": "Newspaper Outlined",
    "id": "newspaper-o",
    "unicode": "f1ea",
    "category": "Web Application Icons"
  },
  {
    "name": "Object Group",
    "id": "object-group",
    "unicode": "f247",
    "category": "Web Application Icons"
  },
  {
    "name": "Object Ungroup",
    "id": "object-ungroup",
    "unicode": "f248",
    "category": "Web Application Icons"
  },
  {
    "name": "Paint Brush",
    "id": "paint-brush",
    "unicode": "f1fc",
    "category": "Web Application Icons"
  },
  {
    "name": "Paper Plane",
    "id": "paper-plane",
    "unicode": "f1d8",
    "category": "Web Application Icons",
    "aliases": [
      "send"
    ]
  },
  {
    "name": "Paper Plane Outlined",
    "id": "paper-plane-o",
    "unicode": "f1d9",
    "category": "Web Application Icons",
    "aliases": [
      "send-o"
    ]
  },
  {
    "name": "Paw",
    "id": "paw",
    "unicode": "f1b0",
    "category": "Web Application Icons"
  },
  {
    "name": "pencil",
    "id": "pencil",
    "unicode": "f040",
    "category": "Web Application Icons"
  },
  {
    "name": "Pencil Square",
    "id": "pencil-square",
    "unicode": "f14b",
    "category": "Web Application Icons"
  },
  {
    "name": "Pencil Square Outlined",
    "id": "pencil-square-o",
    "unicode": "f044",
    "category": "Web Application Icons",
    "aliases": [
      "edit"
    ]
  },
  {
    "name": "Percent",
    "id": "percent",
    "unicode": "f295",
    "category": "Web Application Icons"
  },
  {
    "name": "Phone",
    "id": "phone",
    "unicode": "f095",
    "category": "Web Application Icons"
  },
  {
    "name": "Phone Square",
    "id": "phone-square",
    "unicode": "f098",
    "category": "Web Application Icons"
  },
  {
    "name": "Picture Outlined",
    "id": "picture-o",
    "unicode": "f03e",
    "category": "Web Application Icons",
    "aliases": [
      "photo",
      "image"
    ]
  },
  {
    "name": "Plug",
    "id": "plug",
    "unicode": "f1e6",
    "category": "Web Application Icons"
  },
  {
    "name": "plus",
    "id": "plus",
    "unicode": "f067",
    "category": "Web Application Icons"
  },
  {
    "name": "Plus Circle",
    "id": "plus-circle",
    "unicode": "f055",
    "category": "Web Application Icons"
  },
  {
    "name": "Podcast",
    "id": "podcast",
    "unicode": "f2ce",
    "category": "Web Application Icons"
  },
  {
    "name": "Power Off",
    "id": "power-off",
    "unicode": "f011",
    "category": "Web Application Icons"
  },
  {
    "name": "print",
    "id": "print",
    "unicode": "f02f",
    "category": "Web Application Icons"
  },
  {
    "name": "Puzzle Piece",
    "id": "puzzle-piece",
    "unicode": "f12e",
    "category": "Web Application Icons"
  },
  {
    "name": "qrcode",
    "id": "qrcode",
    "unicode": "f029",
    "category": "Web Application Icons"
  },
  {
    "name": "Question",
    "id": "question",
    "unicode": "f128",
    "category": "Web Application Icons"
  },
  {
    "name": "Question Circle",
    "id": "question-circle",
    "unicode": "f059",
    "category": "Web Application Icons"
  },
  {
    "name": "quote-left",
    "id": "quote-left",
    "unicode": "f10d",
    "category": "Web Application Icons"
  },
  {
    "name": "quote-right",
    "id": "quote-right",
    "unicode": "f10e",
    "category": "Web Application Icons"
  },
  {
    "name": "Recycle",
    "id": "recycle",
    "unicode": "f1b8",
    "category": "Web Application Icons"
  },
  {
    "name": "Registered Trademark",
    "id": "registered",
    "unicode": "f25d",
    "category": "Web Application Icons"
  },
  {
    "name": "Remove User",
    "id": "user-times",
    "unicode": "f235",
    "category": "Web Application Icons"
  },
  {
    "name": "Reply",
    "id": "reply",
    "unicode": "f112",
    "category": "Web Application Icons",
    "aliases": [
      "mail-reply"
    ]
  },
  {
    "name": "reply-all",
    "id": "reply-all",
    "unicode": "f122",
    "category": "Web Application Icons",
    "aliases": [
      "mail-reply-all"
    ]
  },
  {
    "name": "retweet",
    "id": "retweet",
    "unicode": "f079",
    "category": "Web Application Icons"
  },
  {
    "name": "road",
    "id": "road",
    "unicode": "f018",
    "category": "Web Application Icons"
  },
  {
    "name": "rss",
    "id": "rss",
    "unicode": "f09e",
    "category": "Web Application Icons",
    "aliases": [
      "feed"
    ]
  },
  {
    "name": "RSS Square",
    "id": "rss-square",
    "unicode": "f143",
    "category": "Web Application Icons"
  },
  {
    "name": "Search",
    "id": "search",
    "unicode": "f002",
    "category": "Web Application Icons"
  },
  {
    "name": "Search Minus",
    "id": "search-minus",
    "unicode": "f010",
    "category": "Web Application Icons"
  },
  {
    "name": "Search Plus",
    "id": "search-plus",
    "unicode": "f00e",
    "category": "Web Application Icons"
  },
  {
    "name": "Server",
    "id": "server",
    "unicode": "f233",
    "category": "Web Application Icons"
  },
  {
    "name": "Share",
    "id": "share",
    "unicode": "f064",
    "category": "Web Application Icons",
    "aliases": [
      "mail-forward"
    ]
  },
  {
    "name": "Share Square",
    "id": "share-square",
    "unicode": "f14d",
    "category": "Web Application Icons"
  },
  {
    "name": "Share Square Outlined",
    "id": "share-square-o",
    "unicode": "f045",
    "category": "Web Application Icons"
  },
  {
    "name": "shield",
    "id": "shield",
    "unicode": "f132",
    "category": "Web Application Icons"
  },
  {
    "name": "Shopping Bag",
    "id": "shopping-bag",
    "unicode": "f290",
    "category": "Web Application Icons"
  },
  {
    "name": "Shopping Basket",
    "id": "shopping-basket",
    "unicode": "f291",
    "category": "Web Application Icons"
  },
  {
    "name": "Shopping Cart Arrow Down",
    "id": "cart-arrow-down",
    "unicode": "f218",
    "category": "Web Application Icons"
  },
  {
    "name": "shopping-cart",
    "id": "shopping-cart",
    "unicode": "f07a",
    "category": "Web Application Icons"
  },
  {
    "name": "Shower",
    "id": "shower",
    "unicode": "f2cc",
    "category": "Web Application Icons"
  },
  {
    "name": "Sign In",
    "id": "sign-in",
    "unicode": "f090",
    "category": "Web Application Icons"
  },
  {
    "name": "Sign Out",
    "id": "sign-out",
    "unicode": "f08b",
    "category": "Web Application Icons"
  },
  {
    "name": "signal",
    "id": "signal",
    "unicode": "f012",
    "category": "Web Application Icons"
  },
  {
    "name": "Sitemap",
    "id": "sitemap",
    "unicode": "f0e8",
    "category": "Web Application Icons"
  },
  {
    "name": "Sliders",
    "id": "sliders",
    "unicode": "f1de",
    "category": "Web Application Icons"
  },
  {
    "name": "Smile Outlined",
    "id": "smile-o",
    "unicode": "f118",
    "category": "Web Application Icons"
  },
  {
    "name": "Snowflake Outlined",
    "id": "snowflake-o",
    "unicode": "f2dc",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort",
    "id": "sort",
    "unicode": "f0dc",
    "category": "Web Application Icons",
    "aliases": [
      "unsorted"
    ]
  },
  {
    "name": "Sort Alpha Ascending",
    "id": "sort-alpha-asc",
    "unicode": "f15d",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort Alpha Descending",
    "id": "sort-alpha-desc",
    "unicode": "f15e",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort Amount Ascending",
    "id": "sort-amount-asc",
    "unicode": "f160",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort Amount Descending",
    "id": "sort-amount-desc",
    "unicode": "f161",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort Ascending",
    "id": "sort-asc",
    "unicode": "f0de",
    "category": "Web Application Icons",
    "aliases": [
      "sort-up"
    ]
  },
  {
    "name": "Sort Descending",
    "id": "sort-desc",
    "unicode": "f0dd",
    "category": "Web Application Icons",
    "aliases": [
      "sort-down"
    ]
  },
  {
    "name": "Sort Numeric Ascending",
    "id": "sort-numeric-asc",
    "unicode": "f162",
    "category": "Web Application Icons"
  },
  {
    "name": "Sort Numeric Descending",
    "id": "sort-numeric-desc",
    "unicode": "f163",
    "category": "Web Application Icons"
  },
  {
    "name": "spoon",
    "id": "spoon",
    "unicode": "f1b1",
    "category": "Web Application Icons"
  },
  {
    "name": "Star",
    "id": "star",
    "unicode": "f005",
    "category": "Web Application Icons"
  },
  {
    "name": "Star Half Outlined",
    "id": "star-half-o",
    "unicode": "f123",
    "category": "Web Application Icons",
    "aliases": [
      "star-half-empty",
      "star-half-full"
    ]
  },
  {
    "name": "Star Outlined",
    "id": "star-o",
    "unicode": "f006",
    "category": "Web Application Icons"
  },
  {
    "name": "star-half",
    "id": "star-half",
    "unicode": "f089",
    "category": "Web Application Icons"
  },
  {
    "name": "Sticky Note",
    "id": "sticky-note",
    "unicode": "f249",
    "category": "Web Application Icons"
  },
  {
    "name": "Sticky Note Outlined",
    "id": "sticky-note-o",
    "unicode": "f24a",
    "category": "Web Application Icons"
  },
  {
    "name": "Street View",
    "id": "street-view",
    "unicode": "f21d",
    "category": "Web Application Icons"
  },
  {
    "name": "Suitcase",
    "id": "suitcase",
    "unicode": "f0f2",
    "category": "Web Application Icons"
  },
  {
    "name": "Sun Outlined",
    "id": "sun-o",
    "unicode": "f185",
    "category": "Web Application Icons"
  },
  {
    "name": "tablet",
    "id": "tablet",
    "unicode": "f10a",
    "category": "Web Application Icons"
  },
  {
    "name": "Tachometer",
    "id": "tachometer",
    "unicode": "f0e4",
    "category": "Web Application Icons",
    "aliases": [
      "dashboard"
    ]
  },
  {
    "name": "tag",
    "id": "tag",
    "unicode": "f02b",
    "category": "Web Application Icons"
  },
  {
    "name": "tags",
    "id": "tags",
    "unicode": "f02c",
    "category": "Web Application Icons"
  },
  {
    "name": "Tasks",
    "id": "tasks",
    "unicode": "f0ae",
    "category": "Web Application Icons"
  },
  {
    "name": "Television",
    "id": "television",
    "unicode": "f26c",
    "category": "Web Application Icons",
    "aliases": [
      "tv"
    ]
  },
  {
    "name": "Terminal",
    "id": "terminal",
    "unicode": "f120",
    "category": "Web Application Icons"
  },
  {
    "name": "Thermometer 1/2 Full",
    "id": "thermometer-half",
    "unicode": "f2c9",
    "category": "Web Application Icons",
    "aliases": [
      "thermometer-2"
    ]
  },
  {
    "name": "Thermometer 1/4 Full",
    "id": "thermometer-quarter",
    "unicode": "f2ca",
    "category": "Web Application Icons",
    "aliases": [
      "thermometer-1"
    ]
  },
  {
    "name": "Thermometer 3/4 Full",
    "id": "thermometer-three-quarters",
    "unicode": "f2c8",
    "category": "Web Application Icons",
    "aliases": [
      "thermometer-3"
    ]
  },
  {
    "name": "Thermometer Empty",
    "id": "thermometer-empty",
    "unicode": "f2cb",
    "category": "Web Application Icons",
    "aliases": [
      "thermometer-0"
    ]
  },
  {
    "name": "Thermometer Full",
    "id": "thermometer-full",
    "unicode": "f2c7",
    "category": "Web Application Icons",
    "aliases": [
      "thermometer-4",
      "thermometer"
    ]
  },
  {
    "name": "Thumb Tack",
    "id": "thumb-tack",
    "unicode": "f08d",
    "category": "Web Application Icons"
  },
  {
    "name": "Ticket",
    "id": "ticket",
    "unicode": "f145",
    "category": "Web Application Icons"
  },
  {
    "name": "Times",
    "id": "times",
    "unicode": "f00d",
    "category": "Web Application Icons",
    "aliases": [
      "remove",
      "close"
    ]
  },
  {
    "name": "Times Circle",
    "id": "times-circle",
    "unicode": "f057",
    "category": "Web Application Icons"
  },
  {
    "name": "Times Circle Outlined",
    "id": "times-circle-o",
    "unicode": "f05c",
    "category": "Web Application Icons"
  },
  {
    "name": "tint",
    "id": "tint",
    "unicode": "f043",
    "category": "Web Application Icons"
  },
  {
    "name": "Toggle Off",
    "id": "toggle-off",
    "unicode": "f204",
    "category": "Web Application Icons"
  },
  {
    "name": "Toggle On",
    "id": "toggle-on",
    "unicode": "f205",
    "category": "Web Application Icons"
  },
  {
    "name": "Trademark",
    "id": "trademark",
    "unicode": "f25c",
    "category": "Web Application Icons"
  },
  {
    "name": "Trash",
    "id": "trash",
    "unicode": "f1f8",
    "category": "Web Application Icons"
  },
  {
    "name": "Trash Outlined",
    "id": "trash-o",
    "unicode": "f014",
    "category": "Web Application Icons"
  },
  {
    "name": "Tree",
    "id": "tree",
    "unicode": "f1bb",
    "category": "Web Application Icons"
  },
  {
    "name": "trophy",
    "id": "trophy",
    "unicode": "f091",
    "category": "Web Application Icons"
  },
  {
    "name": "Umbrella",
    "id": "umbrella",
    "unicode": "f0e9",
    "category": "Web Application Icons"
  },
  {
    "name": "University",
    "id": "university",
    "unicode": "f19c",
    "category": "Web Application Icons",
    "aliases": [
      "institution",
      "bank"
    ]
  },
  {
    "name": "unlock",
    "id": "unlock",
    "unicode": "f09c",
    "category": "Web Application Icons"
  },
  {
    "name": "Unlock Alt",
    "id": "unlock-alt",
    "unicode": "f13e",
    "category": "Web Application Icons"
  },
  {
    "name": "Upload",
    "id": "upload",
    "unicode": "f093",
    "category": "Web Application Icons"
  },
  {
    "name": "User",
    "id": "user",
    "unicode": "f007",
    "category": "Web Application Icons"
  },
  {
    "name": "User Circle",
    "id": "user-circle",
    "unicode": "f2bd",
    "category": "Web Application Icons"
  },
  {
    "name": "User Circle Outlined",
    "id": "user-circle-o",
    "unicode": "f2be",
    "category": "Web Application Icons"
  },
  {
    "name": "User Outlined",
    "id": "user-o",
    "unicode": "f2c0",
    "category": "Web Application Icons"
  },
  {
    "name": "User Secret",
    "id": "user-secret",
    "unicode": "f21b",
    "category": "Web Application Icons"
  },
  {
    "name": "Users",
    "id": "users",
    "unicode": "f0c0",
    "category": "Web Application Icons",
    "aliases": [
      "group"
    ]
  },
  {
    "name": "Video Camera",
    "id": "video-camera",
    "unicode": "f03d",
    "category": "Web Application Icons"
  },
  {
    "name": "volume-down",
    "id": "volume-down",
    "unicode": "f027",
    "category": "Web Application Icons"
  },
  {
    "name": "volume-off",
    "id": "volume-off",
    "unicode": "f026",
    "category": "Web Application Icons"
  },
  {
    "name": "volume-up",
    "id": "volume-up",
    "unicode": "f028",
    "category": "Web Application Icons"
  },
  {
    "name": "WiFi",
    "id": "wifi",
    "unicode": "f1eb",
    "category": "Web Application Icons"
  },
  {
    "name": "Window Close",
    "id": "window-close",
    "unicode": "f2d3",
    "category": "Web Application Icons",
    "aliases": [
      "times-rectangle"
    ]
  },
  {
    "name": "Window Close Outline",
    "id": "window-close-o",
    "unicode": "f2d4",
    "category": "Web Application Icons",
    "aliases": [
      "times-rectangle-o"
    ]
  },
  {
    "name": "Window Maximize",
    "id": "window-maximize",
    "unicode": "f2d0",
    "category": "Web Application Icons"
  },
  {
    "name": "Window Minimize",
    "id": "window-minimize",
    "unicode": "f2d1",
    "category": "Web Application Icons"
  },
  {
    "name": "Window Restore",
    "id": "window-restore",
    "unicode": "f2d2",
    "category": "Web Application Icons"
  },
  {
    "name": "Wrench",
    "id": "wrench",
    "unicode": "f0ad",
    "category": "Web Application Icons"
  }
  ]

  // contains ui selector and data key strings for what elements to operate on and what data properties to examine
  ui = {
    container: 'body',
    view: '.js-view',
    defaultView: '.js-defaultview',
    showView: '.js-showview',
    viewDataKey: 'view',
    hideButton: '.js-cancel',
    selectedIcon: '.js-selected-icon-display',
    hdnSelectedIcon: '.js-selected-icon-value',
    iconChooser: '.js-icon-chooser',
    toggleChooserBtn: '.js-toggle-chooser',
    clearIconBtn: '.js-clear-icon'
  };

  // init the click handlers for the views
  initViews = function () {
    $(ui.container)
      .on('click', ui.showView, onShowClick)
      .on('click', ui.hideButton, onHideClick);
  };

  // hide all the views
  hideViews = function () {
    $(ui.view).hide();
  };

  // handle when a show element is clicked. hide all views and show only the view specified in the element's data 
  // property.
  onShowClick = function (e) {
    var $el = $(e.target),

      // the view selector will be in a data- attribute on the clicked element
      viewSelector = $el.data(ui.viewDataKey),
      view = $(viewSelector);

    if (!!view.length) {
      // hide any currently visible views
      hideViews();

      // show the view referenced by the clicked element
      view.show();
    }
  };

  // handle when a hide element is clicked within a view. hide the parent view and show the default view.
  onHideClick = function (e) {
    var $el = $(e.target),

      // find the closest parent view
      parent = $el.closest(ui.view);

    if (!!parent.length) {
      // hide the parent view
      parent.hide();

      // show the default view
      $(ui.defaultView).show();
    }
  };

  // init views when the document is ready
  $(initViews);

  // global function for page to call to reset the views
  window.resetView = function () {
    hideViews();
    $(ui.defaultView).show();
  };

  function selectIcon(e) {
    var $el = $(e.target),
      content = $.trim($el.parent().find('.js-icon').html()),
      charCode = content.charCodeAt(0);

    // place the icon in the selected icon element
    $(ui.selectedIcon).html('<span class="fa fa-4x">' + content + '</span>');

    // place the char code in the hidden input element
    $(ui.hdnSelectedIcon).val(charCode.toString());

    // hide the chooser
    $('#iconChooserModal').modal('hide');
  }

  function clearIcon() {
    // Clear the icon and the selected value
    $(ui.selectedIcon).html('<i>None</i>');
    $(ui.hdnSelectedIcon).val('');
  }

  function initSearchIcon() {
    this.input = document.querySelector('input[data-typeahead="search-icon"]');
  }

  initSearchIcon.prototype = {
    init: function() {
      console.log(this.input, 'I work');
    }
  }
  
  initFontAwesomeIconChooser = function () {
    var $body = $('body'),
      iconJsClass = 'js-icon';

    // When the "Clear" button is clicked, clear the chooser
    $body.on('click', ui.clearIconBtn, clearIcon);

    var stringBuilder = [''];
    var lastCategoryName;
    stringBuilder.push('<div class="form-group"><label for="icon-search">Search icon</label><input data-typeahead="search-icon" type="text" class="form-control" name="icon-search" placeholder="Search for an icon"></div>');
    for (var i = 0; i < fontAwesomeIconSet.length; i += 1) {

      var curIcon = fontAwesomeIconSet[i];

      // If we switched categories, render a header for the new icon name
      if (curIcon.category != lastCategoryName) {
        stringBuilder.push('<h3 class="clearfix">');
        stringBuilder.push(curIcon.category);
        stringBuilder.push('</h3>');
        lastCategoryName = curIcon.category;
      }

      stringBuilder.push('<span><button type="button" class="btn btn-default icon-option"><div class="icon-wrapper">');
      stringBuilder.push('<span class="fa fa-3x fa-fw fa-nopad icon ' + iconJsClass + '" aria-hidden="true">');
      stringBuilder.push('&#x' + curIcon.unicode + ';');
      stringBuilder.push('</span>');
      stringBuilder.push('<div class="icon-text">');
      stringBuilder.push(curIcon.name);
      stringBuilder.push('</div>');
      stringBuilder.push('</div></button></span>');
    }

    $(ui.iconChooser).html(stringBuilder.join(''));

    $body.on('click', '.icon-option', selectIcon);

    // Typeahead box creation
    var searchIconTypeahead = new initSearchIcon();
    searchIconTypeahead.init();
  };

  // initialize the font-awesome icon chooser
  $(initFontAwesomeIconChooser);
}());