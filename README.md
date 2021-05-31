# parts

## やったことリスト
- Chart.jsとの連携
- Vuetifyとの連携

---
### 4/9
Chart.vue  
```
npm install vue-chartjs chart.js --save
```

[sample](https://note.com/kawa1228/n/n3d372b2f76ae)

chart.js v3の問題点があるらしい　v2にダウングレードしたら動いた！  

[git issue　バージョンが3だと動作しない](https://stackoverflow.com/questions/66940954/why-does-nuxt-give-me-this-error-with-vue-chartjs)

```
npm rm chart.js
npm install chart.js@v2 --save
```

普通の仕組み　⇨　Child

---

### 4/13
[公式サンプル　いろいろな種類のグラフがあるで！](https://www.npmjs.com/package/vue-chartjs)  

#### 1.[propで外側からいじる仕組み](https://belltree.life/vue-chartjs/)　⇨　Child1  

#### 2.[普通のグラフにちょいとアテンド](https://www.isoroot.jp/blog/3524/) ⇨　Child2
```
npm install --save chartjs-plugin-annotation
```
[git issue　バージョンが2.9.4だと動作しない！！](https://github.com/chartjs/chartjs-plugin-annotation/issues/276)
```
npm rm chart.js
npm install --save chart.js@2.9.3
```
sampleのソースコード問題について  
mouted時にpluginを使うよ〜と明示しないといけないgit issueの[サンプルを参照](https://github.com/chartjs/chartjs-plugin-annotation/issues/276)！
```js
this.addPlugin([chartjsPluginAnnotation])
```
---
### 6/1
[参考URL](https://qiita.com/azukiazusa/items/16ebffd361af8fa58333)  
VSCodeでコード整形を行う方法 Shift+Alt+f  
基本的に必要な情報は[公式サンプル](https://vuetifyjs.com/ja/)から引っ張ってサンプルを打ち込むようにする。

[icon](https://vuetifyjs.com/ja/components/icons/#section-8272)をVuetify側で設計済みになっている。

動きをつけるのがすごく得意
- [Reval](https://vuetifyjs.com/ja/components/cards/#outlined)
- [Transitions](https://vuetifyjs.com/ja/styles/transitions/)









