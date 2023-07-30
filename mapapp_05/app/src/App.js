// deck.gl
import DeckGL from '@deck.gl/react';
// react-map-gl
import Map from 'react-map-gl';
// MapLibre GL JS
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';
import { RenderLayers } from './RenderLayers';

const App = () => {
    // 初期ビューポートの設定
    const INITIAL_VIEW_STATE = {
        latitude: 35.688584,
        longitude: 139.7454316,
        bearing: 0,
        pitch: 0,
        zoom: 12,
    };
    const data = [
        { name: '東京タワー', lng: 139.7454316, lat: 35.658584 },
        { name: '東京スカイツリー', lng: 139.8108103, lat: 35.7100069 },
    ];

    return (
        <div className="App">
            <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={RenderLayers({ data: data })}>
                <Map mapLib={maplibregl} mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json" />
            </DeckGL>
        </div>
    );
};

export default App;;
