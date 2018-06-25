module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=2&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'image': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=2&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Traffic',
        'href': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=3&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'image': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=3&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    // Array of data provider are supported
    'dataPath': ['https://downloads.bremen.freifunk.net/data/'],
    'siteName': 'Freifunk Bremen',
    'maxAge': 7,
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      {
        'name': 'Freifunk Bremen',
        'url': '//tiles.bremen.freifunk.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'type': 'osm',
          'attribution': '<a href="https://github.com/mapbox/mapbox-studio-osm-bright.tm2">Design</a> © <a href="https://www.mapbox.com/">Mapbox</a>, <a href="http://creativecommons.org/licenses/by/3.0/">CC-BY 3.0</a> — Daten © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Freifunk Regensburg Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'mode': 'night'
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
    // Northwest
      [
        53.27917,
        8.31390
      ],
      // Southeast
      [
        52.9734,
        9.2037
      ]
    ],
    'siteNames': [
      {
        'site': 'ffhb',
        'name': 'Freifunk Bremen'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://bremen.freifunk.net/impressum.html'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://wiki.bremen.freifunk.net/Infrastruktur/Datenschutz'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': '/verein/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': '/verein/datenschutz/'
      }
    ]
  };
};
