<p align="center">
  <a href="https://itsevin.github.io/LoveLetter/"><img src="https://raw.githubusercontent.com/itsevin/LoveLetter/main/favicon.ico" width="200" height="200" alt=""></a>
</p>

<div align="center">
    <h1 align="center">✨喂狗情书✨</h1>
</div>

## 介绍

***一封~~喂狗~~情书***

本项目基于[原作者](https://github.com/loveeating233)的[原作](https://github.com/loveeating233/letter)使用 ChatGPT 进行改造优化而成，所以代码很可能极不规范且诡异，望周知。

> ~~为什么我称之为喂狗情书，因为差点喂了狗了~~

> ~~如果你想使用，我希望你不是拿来喂狗~~

> ~~建议不要直接生搬硬套，最好自己修改优化一下，这样更显你的心意~~

> 好了，祝你表白成功

## [Demo](https://itsevin.github.io/LoveLetter/)

若要使用请自行部署

## 功能说明

### 手机页面

会显示提示页面

> 因为手机显示效果很差

<img src="https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/mobile.jpg" height="250" />

### 电脑页面

首先会显示该页面并提示进入全屏以达到最佳显示效果

[](https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/1.png)

鼠标放到信封上任意地方时信会展开，并出现跳动的爱心

![](https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/2.png)

点击跳动的爱心后进入内容页面，播放背景音乐，然后是打字特效打出内容

![](https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/3.png)

![](https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/4.png)

打字完成后的5秒会跳转到一个指定链接网站，但是初次大概大概率会被你的浏览器拦截，要你根据你用的浏览器调节设置

> 该功能可以关闭

> 我对该功能的设想是打开完letter进入具体告白页面（文章页面）

![](https://raw.githubusercontent.com/itsevin/LoveLetter/main/img/5.png)

## 部署

### 修改信封内容文本

在`/letter.json`里面按照json格式改

### 修改跳转链接

在`/js/letter.js`的49行进行修改

### 关闭跳转

删去或注释掉`/js/letter.js`的46行到52行

### 修改背景音乐

替换掉`/mp3/music.mp3`

### 修改任意内容或功能

自己在源码里面改

### 站点部署

把源码部署到你的服务器，GitHub Page，vercel……

## 贡献

本项目通过 ChatGPT 改自按照 GPL3.0 许可证开源的 [loveeating233/letter](https://github.com/loveeating233/letter)。

如果你有想法、有能力，欢迎:
- [提交 Pull request](https://github.com/itsevin/LoveLetter/pulls)

## 声明

若有侵权请告知，立马删库。

此项目仅用于学习交流，请勿用于非法用途。

## 许可证

本项目使用 [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) 作为开源许可证。

这意味着你可以运行本项目，并向你的用户提供服务，如后续有对本项目源码的修改，你需要向用户公开修改后的此项目的源码。

---

喜欢就点个star吧，安抚一下作者的心（真诚