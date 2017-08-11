# Bilibili夏日绘板助手
现在包含两个功能，一个是批量检测小号的剩余时间，另一个是循环换号画图

## 要求环境
nodejs
怎么安装nodejs不用教吧，下载可以到淘宝的npm镜像站
我这里开发时用的版本是v6.9.1 x64 win

## 0、获取
右上角绿色按钮Clone or Download 然后download zip

## 1、安装
在该目录内打开命令行输入npm install
国内最好在后面加上--registry=https://registry.npm.taobao.org来使用淘宝的npm镜像站，速度会快很多。

## 2、添加账号
自己看着IDS.js文件里面的就应该会搞了吧

## 3.1 使用批量检测小号

批量检测小号的剩余时间对应的文件是 main.js
node main.js
每30秒检测一次

## 3.2 循环换号画图

批量检测小号的剩余时间对应的文件是 draw.js
node draw.js
然后大概3-5秒左右应该可以输入了
输入格式为
x y color
例如我要在点(1,1)画0号色
那么可以输入
1 1 0
如果输出信息中带有success字样，那么就是成功了