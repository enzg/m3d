export default {
  shadowMap: true,
  concurrent: true,
  colorManagement: true,
  pixelRatio: window.devicePixelRatio
}

export const models = {
  url:
    'https://drive.google.com/file/d/1MjkWs6j9l__LqqJURYnXFIEXVh6hE1Rh/view?usp=sharing'
}

export const Menus = [
  {name:'地质显示',key:'geoInfo'},
  {name: '查找标注',key:'findFlag'},
  {name: '模型库',key:'modLib'},
  {name: '添加标识',key:'addFlag'},
  {name: '场景设置',key:'sceneSetting'},
  {name: '工点管理',key:'projManager'},
]