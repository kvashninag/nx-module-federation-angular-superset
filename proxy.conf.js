const PROXY_CONFIG = [
  {
    context: [
      "/api/v1",
      "/static/assets",
      "/superset",
    ],
    target: "http://vmi648695.contaboserver.net:8088/",
    secure: false,
    timeout: 600000,
    changeOrigin: true
  },
];

module.exports = PROXY_CONFIG;
