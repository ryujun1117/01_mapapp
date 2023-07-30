import { ScatterplotLayer } from '@deck.gl/layers';

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

    //レイヤーの重なり順を配列で指定(先頭のレイヤーが一番下になる)
    return [point];
}
