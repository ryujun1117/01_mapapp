// deck.gl
import DeckGL from '@deck.gl/react';
// react-map-gl
import Map from 'react-map-gl';
// MapLibre GL JS
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';
import { RenderLayers } from './RenderLayers';
import { GeoJsonLayer } from "@deck.gl/layers";
import {load} from '@loaders.gl/core';
import {GeoJSONLoader} from '@loaders.gl/json';
// const geoJSONfeatures = await load('/usr/app/react-test/src/point.geojson',GeoJSONLoader);
const App = (geoJSONfeatures) => {
    // 初期ビューポートの設定
    const INITIAL_VIEW_STATE = {
        latitude: 35.688584,
        longitude: 139.7454316,
        bearing: 0,
        pitch: 0,
        zoom: 12,
    };
    // ポイントを直接読み込む！
    const data = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "id": 1, "restaurant": "タイガー餃子軒　広尾", "address": "東京都渋谷区広尾5-14-2", "tel": "03-6277-4051", "open_time": 1130.0, "close_time": 1500.0, "website": "https://kiwa-group.co.jp/tiger_hiroo/", "lat": 35.6504019, "lng": 139.7215267 }, "geometry": { "type": "Point", "coordinates": [ 139.7215267, 35.6504019 ] } },
{ "type": "Feature", "properties": { "id": 2, "restaurant": "BURGER MANIA", "address": "東京都港区南麻布5-15-25六幸館2F", "tel": "03-5422-7899", "open_time": 1100.0, "close_time": 2200.0, "website": "https://maniacorporation.com/burger-mania", "lat": 35.6518772, "lng": 139.7224545 }, "geometry": { "type": "Point", "coordinates": [ 139.7224545, 35.6518772 ] } },
{ "type": "Feature", "properties": { "id": 3, "restaurant": "いびさ", "address": "東京都渋谷区広尾5-16-16エクセル代田ビル2F", "tel": "03-5421-0570", "open_time": null, "close_time": null, "website": "https://tabelog.com/tokyo/A1307/A130703/13106422/", "lat": 35.6497875, "lng": 139.7205989 }, "geometry": { "type": "Point", "coordinates": [ 139.7205989, 35.6497875 ] } },
{ "type": "Feature", "properties": { "id": 4, "restaurant": "PIZZA SALVATORE CUOMO 西麻布", "address": "東京都港区西麻布4-10-5 ネクスト西麻布1F", "tel": "03-5464-8265", "open_time": 1130.0, "close_time": 1430.0, "website": "https://www.salvatore.jp/restaurant/nishiazabu/", "lat": 35.6574097, "lng": 139.7230131 }, "geometry": { "type": "Point", "coordinates": [ 139.7230131, 35.6574097 ] } },
{ "type": "Feature", "properties": { "id": 5, "restaurant": "凛と", "address": "東京都渋谷区広尾5‐10‐3 フロストバード広尾 1F", "tel": "050-5494-7959", "open_time": 1130.0, "close_time": 1400.0, "website": "https://gd5s411.gorp.jp/", "lat": 35.6495128, "lng": 139.7210419 }, "geometry": { "type": "Point", "coordinates": [ 139.721041899999989, 35.6495128 ] } },
{ "type": "Feature", "properties": { "id": 6, "restaurant": "Soup Stock Tokyo", "address": "東京都港区南麻布5-15-12 美濃屋ビル 1F", "tel": "03-5447-6080", "open_time": 1100.0, "close_time": 2100.0, "website": "https://www.soup-stock-tokyo.com/store/detail/?id=1013", "lat": 35.6511749, "lng": 139.723073 }, "geometry": { "type": "Point", "coordinates": [ 139.723073, 35.6511749 ] } },
{ "type": "Feature", "properties": { "id": 7, "restaurant": "mosh Grab'nGo", "address": "東京都港区南麻布5-16-10", "tel": null, "open_time": 1000.0, "close_time": 2100.0, "website": "https://www.mos.jp/mosh/", "lat": 35.651255, "lng": 139.7232725 }, "geometry": { "type": "Point", "coordinates": [ 139.7232725, 35.651255 ] } },
{ "type": "Feature", "properties": { "id": 8, "restaurant": "西麻布　権八", "address": "東京都港区西麻布1-13-11", "tel": "050-5443-1691", "open_time": 1130.0, "close_time": 2200.0, "website": "https://gonpachi.jp/nishi-azabu/", "lat": 35.6602067, "lng": 139.7235945 }, "geometry": { "type": "Point", "coordinates": [ 139.7235945, 35.6602067 ] } },
{ "type": "Feature", "properties": { "id": 9, "restaurant": "まんみ　西麻布", "address": "東京都港区西麻布4-5-8 LA 西麻布ビル 3F", "tel": "03-5485-2007", "open_time": 1130.0, "close_time": 1430.0, "website": "https://manmi.jp/", "lat": 35.6565268, "lng": 139.7231976 }, "geometry": { "type": "Point", "coordinates": [ 139.7231976, 35.6565268 ] } },
{ "type": "Feature", "properties": { "id": 10, "restaurant": "広尾のメキシコ料理店\nLA JOLLA（ラ・ホイヤ）", "address": "東京都渋谷区広尾5-16-3 小安ビル2F", "tel": "03-3442-1865", "open_time": 1130.0, "close_time": 1530.0, "website": "https://www.la-jolla.jp/", "lat": 35.6501335, "lng": 139.7207685 }, "geometry": { "type": "Point", "coordinates": [ 139.7207685, 35.6501335 ] } },
{ "type": "Feature", "properties": { "id": 11, "restaurant": "Pizzeria BUGANVILLE Hiroo", "address": "東京都港区南麻布5-15-25六幸館1F", "tel": "050-5304-2335", "open_time": 1130.0, "close_time": 1430.0, "website": "https://pizzeria-buganville-hiroo.foodre.jp/", "lat": 35.6518772, "lng": 139.7224545 }, "geometry": { "type": "Point", "coordinates": [ 139.7224545, 35.6518772 ] } },
{ "type": "Feature", "properties": { "id": 12, "restaurant": "福寿司", "address": "東京都渋谷区広尾5-4-15", "tel": "03-3473-0239", "open_time": 1130.0, "close_time": 1400.0, "website": "https://tabelog.com/tokyo/A1307/A130703/13072171/", "lat": 35.6507555, "lng": 139.7220055 }, "geometry": { "type": "Point", "coordinates": [ 139.7220055, 35.6507555 ] } },
{ "type": "Feature", "properties": { "id": 13, "restaurant": "さ和長", "address": "東京都港区南麻布5-15-11", "tel": "03-3447-0557", "open_time": 1130.0, "close_time": 1430.0, "website": "https://www.saryou-tsukushi.com/sawanaga-azabu", "lat": 35.6511749, "lng": 139.723073 }, "geometry": { "type": "Point", "coordinates": [ 139.723073, 35.6511749 ] } },
{ "type": "Feature", "properties": { "id": 14, "restaurant": "つくしんぼ", "address": "東京都港区南麻布5-15-10", "tel": "03-5448-1443", "open_time": 1130.0, "close_time": 1430.0, "website": "https://tabelog.com/tokyo/A1307/A130703/13004585/", "lat": 35.651376, "lng": 139.7231529 }, "geometry": { "type": "Point", "coordinates": [ 139.7231529, 35.651376 ] } },
{ "type": "Feature", "properties": { "id": 15, "restaurant": "香港料理 申申 西麻布", "address": "東京都港区西麻布3-13-21 ラスパシオ麻布笄町レジデンス 1F", "tel": "03-3401-6033", "open_time": 1130.0, "close_time": 1430.0, "website": "https://tabelog.com/tokyo/A1307/A130702/13199570/", "lat": 35.6579068, "lng": 139.7240446 }, "geometry": { "type": "Point", "coordinates": [ 139.724044600000013, 35.6579068 ] } },
{ "type": "Feature", "properties": { "id": 16, "restaurant": "a te", "address": "東京都港区西麻布4-10-1 ラポート西麻布B１F", "tel": "03-6419-7159", "open_time": 1200.0, "close_time": 1400.0, "website": "https://ate-nishiazabu.com/", "lat": 35.6578981, "lng": 139.7230077 }, "geometry": { "type": "Point", "coordinates": [ 139.723007700000011, 35.6578981 ] } },
{ "type": "Feature", "properties": { "id": 17, "restaurant": "Masala Kitchen", "address": "東京都渋谷区広尾5丁目5-1", "tel": "03-5424-3060", "open_time": 1100.0, "close_time": 1430.0, "website": "https://tabelog.com/tokyo/A1307/A130703/13200395/", "lat": 35.6505113, "lng": 139.7219557 }, "geometry": { "type": "Point", "coordinates": [ 139.7219557, 35.6505113 ] } },
{ "type": "Feature", "properties": { "id": 18, "restaurant": "プリヤ（PRIYA）", "address": "東京都渋谷区広尾5-2-25本国ビル3Ｆ", "tel": "050-5869-7686", "open_time": 1100.0, "close_time": 1600.0, "website": "https://tabelog.com/tokyo/A1307/A130703/13059308/", "lat": 35.6502233, "lng": 139.7202996 }, "geometry": { "type": "Point", "coordinates": [ 139.7202996, 35.6502233 ] } },
{ "type": "Feature", "properties": { "id": 19, "restaurant": "広尾とんかつ ひとみ", "address": "東京都渋谷区広尾5-4-16", "tel": "03-5422-8141", "open_time": 1130.0, "close_time": 1530.0, "website": "https://therestaurant-hiroo.com/shop/hitomi/", "lat": 35.6507701, "lng": 139.721796 }, "geometry": { "type": "Point", "coordinates": [ 139.721796, 35.6507701 ] } },
{ "type": "Feature", "properties": { "id": 20, "restaurant": "馬小房", "address": "東京都渋谷区広尾5-4-16", "tel": "070-2190-7543", "open_time": 1130.0, "close_time": 1530.0, "website": "https://therestaurant-hiroo.com/shop/maxiaofang/", "lat": 35.6507701, "lng": 139.721796 }, "geometry": { "type": "Point", "coordinates": [ 139.721796, 35.6507701 ] } },
{ "type": "Feature", "properties": { "id": 21, "restaurant": "焼鳥ことぶき", "address": "東京都渋谷区広尾5-3-10", "tel": "03-3473-5463", "open_time": 1100.0, "close_time": 1430.0, "website": "https://www.hiroo.info/?page_id=1565?page_id=1565", "lat": 35.6505893, "lng": 139.7215466 }, "geometry": { "type": "Point", "coordinates": [ 139.721546600000011, 35.6505893 ] } }
]
}

    //追加
    const point = new GeoJsonLayer({
      id: "point",
    //data: "/usr/app/react-test/src/point.geojson",
      data: data,
      stroked: true,
      filled: true,
      pointType: "circle+text",
      //circleの設定
    getPointRadius: 5, //circleの半径
    getFillColor: [255, 0, 0, 180],
    getLineColor: [0, 255, 0, 255],
    lineWidthMinPixels: 2,
    });

    return (
        <div className="App">
           <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={[point]}>
           <Map mapLib={maplibregl} mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"/>
            </DeckGL>
        </div>
    );
};

export default App;;

