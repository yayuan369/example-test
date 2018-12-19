# example-test
这是一个练习例子

vux环境配置方法一:

配置vux框架的安装命令
npm install vue-cli -g

vue init airyland/vux2 项目名称

cd 项目名称

npm install –registry=https://registry.npm.taobao.org

cnpm i

运行项目:
npm run dev

vux环境配置方法二:

(1)安装
```
cnpm i vux -S
cnpm i vux-loader -S
cnpm i less -S
cnpm i less-loader -S
```


(2)在bulid —>webpack.base.conf.js文件中:

1）首先引入vux-loader

```const vuxLoader = require('vux-loader')```

2）然后将原来的module.exports 替换成const webpackConfig，然后在最底下写上以下代码:

```
module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
})
```




VUX部分坑

如果你想直接在组件中的methods方法里面 this.$vux.comfirm.show({....}) 这样调用，你就需在main.js里面配置如下

```
import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
```
