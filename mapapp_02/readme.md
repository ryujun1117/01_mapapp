
# contents

## 配信方法
日本地図を可視化してみるシンプルなwebサイトをdockerで構築。    
dockerでNginxコンテナを準備し、htmlファイルを"/usr/share/nginx/html/"に配置して配信する。  

## ピンの可視化方法
1. 店舗情報を含んだ表を準備し、Geocodeing API（Google）を用いて、住所から経度緯度に変換し、GeoJSONとして出力
2. 出力したGeoJSONを"/usr/share/nginx/html/"に配置（manypin.html）と同階層に配置  
 
# url
http://localhost:80  
http://localhost/manypin.html  

# screen shot
![screenshot](https://github.com/ryujun1117/01_mapapp/blob/08cc90f177c27c8f0b2b3bb0cf4ff355d12f0f60/mapapp_02/screen%20shot.png)
