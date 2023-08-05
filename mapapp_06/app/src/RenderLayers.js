import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers';

export function RenderLayers(props) {
    const point = new ScatterplotLayer({
        id: 'scatterplot-layer',
        data: props.data,
        pickable: false,
        opacity: 0.8,
        stroked: true,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: (d) => {
            return [d.lng, d.lat];
        },
        getRadius: 10,
        getFillColor: (d) => [255, 140, 0],
        getLineColor: (d) => [0, 0, 0],
    });
const hiro = new GeoJsonLayer({
    id: "point",
    data: "/usr/app/point.geojson",
    stroked: true,
    filled: true,
    pointType: "circle+text",
    //circleの設定
    getPointRadius: 30, //circleの半径
    getFillColor: [255, 0, 0, 180],
    getLineColor: [0, 255, 0, 255],
    lineWidthMinPixels: 2,    
    //テキストラベル設定
    getText: (d) => d.properties.label,　//属性値のlabelの値をテキストラベルとして表示する
    getTextPixelOffset: [0, -20], //テキストラベルの相対的な位置
    getTextColor: [180, 0, 0],
    textFontWeight: "bold",
    textSizeScale: 0.6,
    //textCharacterSet: charaSet //生成したキャラクターセットをdeck.glに渡す
  });

    

    //レイヤーの重なり順を配列で指定(先頭のレイヤーが一番下になる)
    return [point,hiro];
};
