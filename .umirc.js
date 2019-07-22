
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  proxy: {
    "/api": {
      "target": "http://192.168.1.48:8085/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/apis": {
      "target": "http://localhost:3000/",
      "changeOrigin": true,
      "pathRewrite": { "^/apis" : "" }
    },
    "/ceshi": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/ceshi" : "" }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-dva',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
